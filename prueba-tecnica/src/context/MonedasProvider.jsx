import { useState, useEffect, createContext } from "react";
import axios from 'axios';

const MonedaContext = createContext()

const MonedasProvider = ({children}) => {

    const [categoria, setCategoria] = useState('')
    const [moneda, setMoneda] = useState([])

    useEffect(() =>{
        const consultarAPI = async () => {
            const url = `https://api.blockchain.com/v3/exchange/tickers/${categoria}`
        
            const {data} = await axios(url)
            console.log('data',data)

            setMoneda(data)
            }
        consultarAPI()
    }, [categoria])

    const handleChangeCategoria = e =>{
        setCategoria(e.target.value)
    }

    return(
        <MonedaContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                moneda
            }}
        >
            {children}
        </MonedaContext.Provider>
    )
}

export{
    MonedasProvider
}

export default MonedaContext