import React, { createContext, useState } from "react";

import Loader from "../components/loader";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  
  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      <Loader visivel={loading} />
      {children}
    </LoaderContext.Provider>
  );
}

export default LoaderContext;