import { createContext, useState } from "react";
import axios from 'axios'

export const GlobalContext = createContext()

const ContextProvider = ({ children }) => {
    const [tela, setTela] = useState([])
   
    return(
        <GlobalContext.Provider value={{tela, setTela}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ContextProvider;