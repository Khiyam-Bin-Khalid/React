import React from "react";
// .createContext() method is used to create a context object. 
// It returns an object with two properties: Provider and Consumer. 
// The Provider component is used to provide the context value to the components that need it, while the Consumer component is used to consume the context value in the components that need it.
const UserContext = React.createContext()

export default UserContext;
