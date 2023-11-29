import { createContext } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
    return <dataContext.Provider>{children}</dataContext.Provider>;
};

export default DataProvider;