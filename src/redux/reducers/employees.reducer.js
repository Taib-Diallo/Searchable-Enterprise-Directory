const employeesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_EMPLOYEES':
      return action.payload;
    case 'RESET_FORM':
      return state = {};
    default:
      return state;
  }
};

export default employeesReducer;
