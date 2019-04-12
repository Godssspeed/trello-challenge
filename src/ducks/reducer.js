const initialState = {
  backlog: ["This will probable never get done"],
  todo: ["This will supposedly be competed next"],
  inProgress: ["This is being worked on now... maybe"],
  completed: ["This is done, but probably doesn't work"]
};

const ADDBACKLOG = "ADDBACKLOG";
const ADDTODO = "ADDTODO";
const ADDTOINPROGRESS = "ADDTOINPROGRESS";
const ADDTOCOMPLETED = "ADDTOCOMPLETED";
const MOVETOTODO = "MOVETOTODO";
const MOVETOBACKLOG = "MOVETOBACKLOG";
const MOVETOINPROGRESS = "MOVETOINPROGRESS";
const MOVEBACKTOTODO = "MOVEBACKTOTODO";
const MOVETOCOMPLETED = "MOVETOCOMPLETED";
const MOVEBACKTOINPROGRESS = "MOVEBACKTOINPROGRESS";

export const addToBacklog = item => {
  return {
    type: ADDBACKLOG,
    payload: item
  };
};

export const addToToDo = item => {
  return {
    type: ADDTODO,
    payload: item
  };
};

export const addToInProgress = item => {
  return {
    type: ADDTOINPROGRESS,
    payload: item
  };
};

export const addToCompleted = item => {
  return {
    type: ADDTOCOMPLETED,
    payload: item
  };
};

export const moveToToDo = value => {
  return {
    type: MOVETOTODO,
    payload: value
  };
};

export const moveToBacklog = value => {
  return {
    type: MOVETOBACKLOG,
    payload: value
  };
};

export const moveToInProgress = value => {
  return {
    type: MOVETOINPROGRESS,
    payload: value
  };
};

export const moveBackToToDo = value => {
  return {
    type: MOVEBACKTOTODO,
    payload: value
  };
};

export const moveToCompleted = value => {
  return {
    type: MOVETOCOMPLETED,
    payload: value
  };
};

export const moveBackToInProgress = value => {
  return {
    type: MOVEBACKTOINPROGRESS,
    payload: value
  };
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADDBACKLOG:
      return { ...state, backlog: [...state.backlog, action.payload] };
    case ADDTODO:
      return { ...state, todo: [...state.todo, action.payload] };
    case ADDTOINPROGRESS:
      return { ...state, inProgress: [...state.inProgress, action.payload] };
    case ADDTOCOMPLETED:
      return { ...state, completed: [...state.completed, action.payload] };
    case MOVETOTODO:
      return {
        ...state,
        backlog: [
          ...state.backlog.slice(1),
          ...state.backlog.slice(1, action.index)
        ],
        todo: [...state.todo, action.payload]
      };

    case MOVETOBACKLOG:
      return {
        ...state,
        todo: [...state.todo.slice(1), ...state.todo.slice(1, action.index)],
        backlog: [...state.backlog, action.payload]
      };
    case MOVETOINPROGRESS:
      return {
        ...state,
        todo: [...state.todo.slice(1), ...state.todo.slice(1, action.index)],
        inProgress: [...state.inProgress, action.payload]
      };

    case MOVEBACKTOTODO:
      return {
        ...state,
        inProgress: [
          ...state.inProgress.slice(1),
          ...state.inProgress.slice(1, action.index)
        ],
        todo: [...state.todo, action.payload]
      };

    case MOVETOCOMPLETED:
      return {
        ...state,
        inProgress: [
          ...state.inProgress.slice(1),
          ...state.inProgress.slice(1, action.index)
        ],
        completed: [...state.completed, action.payload]
      };

    case MOVEBACKTOINPROGRESS:
      return {
        ...state,
        completed: [
          ...state.completed.slice(1),
          ...state.completed.slice(1, action.index)
        ],
        inProgress: [...state.inProgress, action.payload]
      };
    default:
      return state;
  }
}
