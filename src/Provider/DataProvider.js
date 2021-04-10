import { createContext, useState } from "react";


export const DataContext = createContext();

const DataProvider = (props) =>{
    const [data, setData] = useState([]);
    console.log(data);
    return(
        <DataContext.Provider value={[data, setData]}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider;