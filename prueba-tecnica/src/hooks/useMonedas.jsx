import { useContext } from "react";
import MonedaContext from "../context/MonedasProvider";

const useMonedas = () => {
    return useContext(MonedaContext)
}

export default useMonedas