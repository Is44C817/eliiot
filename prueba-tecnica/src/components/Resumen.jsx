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


                <div className="infoBitcoin">
                    <form className="formBitcoin"
                    value={categoria}
                    >   
                        <input className="boxBitcoin" type="radio" name="bitcoins" value="BTC-USD" id="usdForm"/>
                        <label className="labelBitcoin activo" for="usdForm">USD</label>
                        
                        <input className="boxBitcoin" type="radio" name="bitcoins" value="BTC-GBP" id="gbpForm"/>
                        <label className="labelBitcoin" for="gbpForm">GBP</label>
                        
                        <input className="boxBitcoin" type="radio" name="bitcoins" value="BTC-EUR" id="eurForm"/>
                        <label className="labelBitcoin" for="eurForm">EUR</label>   
                    </form>
                </div>

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
                                : symbol === 'BTC-EUR'  ? '€ ' + price_24h 
                                : '...' }
                                type="button"
                            />  
   
                </div>

                <div className="space-actualizar"></div>

                <input 
                className="button-actualizar"
                value="Actualizar"
                type="button"
                onChange={handleChangeCategoria}
                />
              
                <div className="space-detalle"></div>
                        
            </div>
        </>
    )
}

export default Resumen