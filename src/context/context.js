import React, { createContext } from "react";

export const StoreContext = createContext()

export const StoreProvider = ({ children }) => {

    const [orders, setOrders] = React.useState([]);
    const [showLoader,setShowLoader] = React.useState(false)
    const [user,setUser] = React.useState(undefined)
  
    return (
      <StoreContext.Provider
        value={{
          orders,
          setOrders,
          showLoader,
          setShowLoader,
          user,
          setUser
        }}
      >
        {children}
      </StoreContext.Provider>
    );
  };