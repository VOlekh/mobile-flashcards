
const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.log("ACTION:", action);
    const result = next(action);
    console.log("STATE:", store.getState());
    console.groupEnd();
    return result;
  };
  
  export default logger;
