const employeesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_EMPLOYEES':
      return action.payload;
    case 'RESET_FORM':
      return state = {};
    default:
      return state;
  }
};

export default employeesReducer;
