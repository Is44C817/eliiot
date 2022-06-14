import useMonedas from "../hooks/useMonedas"
import { Link } from "react-router-dom"

const Resumen = () =>{
    
    const {moneda} = useMonedas()
    const { categoria, handleChangeCategoria } = useMonedas()
    console.log('desde resumen', categoria)
    console.log('moneda resumen', moneda)

    const {price_24h, symbol } = moneda
    console.log(price_24h)

    return(
        <>
            <div className="resumen">
                <div>
                    <Link to="/registro"><img className="back" src='./src/img/back.svg' /></Link>
                    <p className="title-resumen">Resumen Bitcoin</p>
                </div>

                <div className="space-resumen"></div>

                <p className="valor">Valor de Bitcoin actual</p>

                <div className="space-moneda"></div>

                <div className="box-resumen">
                    <p className="moneda">Moneda</p>

                    <div className="box-buttons">
                        <div className="div-grid">

                        <select 
                        onChange={handleChangeCategoria}
                        value={categoria}
                        name="bitcoins" id="bitcoins">
                            <option value="">Selecciona una opción</option>
                            <option value="BTC-USD">USD</option>
                            <option value="BTC-GBP">GBP</option>
                            <option value="BTC-EUR">EUR</option>
                        </select>

                        </div>
                </div>
                </div>

                <div className="space-detalle"></div>

                <div className="box-detalle">
                    <p className="title-detalle">Detalle</p>
                    <p className="sub-title-detalle">United States Dollar</p>
                <input 
                                className="button-detalle"
                                value={symbol === 'BTC-USD' ? '$ ' + price_24h 
                                :  symbol === 'BTC-GBP' ? '£ ' + price_24h 
                                : symbol === 'BTC-GBP'  ? '€ ' + price_24h 
                                : '...' }
                                type="button"
                            />  
   
                </div>

                <div className="space-actualizar"></div>
                        
            </div>
        </>
    )
}

export default Resumen