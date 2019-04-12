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

// ACTION CREATORS TO ADD TO ARRAYS
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

// ACTION CREATORS TO MOVE LIST ITEMS TO NEW ARRAYS

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
      // SPREAD OPERATOR USED TO PUSH ITEMS TO ARRAY
      return { ...state, backlog: [...state.backlog, action.payload] };
    case ADDTODO:
      return { ...state, todo: [...state.todo, action.payload] };
    case ADDTOINPROGRESS:
      return { ...state, inProgress: [...state.inProgress, action.payload] };
    case ADDTOCOMPLETED:
      return { ...state, completed: [...state.completed, action.payload] };
    case MOVETOTODO:
      console.log((state.backlog = [...state.backlog, action.payload]));
      return {
        ...state,
        backlog: state.backlog.filter(e => e !== action.payload),
        todo: [...state.todo, action.payload]
      };

    case MOVETOBACKLOG:
      return {
        ...state,
        // USED TO FILTER OUT THE VALUE
        todo: state.todo.filter(e => e !== action.payload),
        backlog: [...state.backlog, action.payload]
      };
    case MOVETOINPROGRESS:
      return {
        ...state,
        todo: state.todo.filter(e => e !== action.payload),
        inProgress: [...state.inProgress, action.payload]
      };

    case MOVEBACKTOTODO:
      return {
        ...state,
        inProgress: state.inProgress.filter(e => e !== action.payload),
        todo: [...state.todo, action.payload]
      };

    case MOVETOCOMPLETED:
      return {
        ...state,
        inProgress: state.inProgress.filter(e => e !== action.payload),
        completed: [...state.completed, action.payload]
      };

    case MOVEBACKTOINPROGRESS:
      return {
        ...state,
        completed: state.completed.filter(e => e !== action.payload),
        inProgress: [...state.inProgress, action.payload]
      };
    default:
      return state;
  }
}
