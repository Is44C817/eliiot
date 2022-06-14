import { Link } from "react-router-dom"

const Onboarding = () =>{

    return(
        <>
            <div className="onboarding">
                <p className="title">Bitcoin APP</p>
                <img src='./src/img/logo.png' />
                <div className="space"></div>
                <div className="box">
                    <p className="subTitle">¿Cuál es el valor actual del BTC?</p>
                    <p className="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <Link to="/registro">
                    <input 
                        className="buttonOnboarding"
                        value="Iniciar"
                        type="button"
                    />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Onboarding