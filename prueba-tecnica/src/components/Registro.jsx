import { useState } from "react";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom"

const Registro = () =>{

    const [celular, setCelular] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        if([celular, email].includes('')){
            Swal.fire({
                icon: 'error',
                text: 'Todos los campos son obligatorios',
              })
            return;
        }else{
            Swal.fire({
                icon: 'suceess',
                text: 'Cuenta creada exitosamente',
              })
        }
    }

    return(
        <>
        <div className="registro">
            <p className="title">Bitcoin APP</p>
            <p className="subRegistro">Crea tu cuenta</p>
        <form  onSubmit={handleSubmit}>
            <div>
                <label className="labelCelular">Ingresa tu celula</label>
                <div className="space-input"></div>
                <input 
                className="button-celular"
                type="text"
                value={celular}
                placeholder="a 10 dígitos"
                id="celular"
                name="celular"
                onChange={(e) => setCelular(e.target.value)}/>
            </div>
            <div className="space-inputs"></div>
            <div>
                <label className="label-mail">Y tu correo</label>
                <div className="space-input"></div>
                <input 
                className="button-mail"
                type="email"
                value={email}
                placeholder="tucorreo@mail.com"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="terminos-div">
                <p className="terminos">Al continuar, aceptas los <span>términos y condiciones y el aviso de privacidad</span></p>
            </div>

            <input 
                className="button-crear"
                value="Crear cuenta"
                type="submit"
            />
            </form>
            <div className="space-buttons"></div>
            <Link to="/resumen">
            <input 
                className="button-sesion"
                value="Iniciar sesión"
                type="submit"
            />
            </Link>
            <div className="space"></div>
        </div>
    </>
    )
}

export default Registro