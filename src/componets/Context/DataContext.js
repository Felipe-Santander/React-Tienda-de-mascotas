import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get("data.json").then((res) => setData(res.data));
    }, []);

    return <DataContext.Provider value={{ data, cart, setCart }}>{children}</DataContext.Provider>;
};

export default DataProvider;
