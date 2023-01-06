import React, {useEffect } from "react";
import "./style.css"
import DatosUsuario from "./DatosUsuario";

const UserForm = (props) => {
    const { state, setState } = props;

    useEffect(() => {
        console.log("🚀 ~ file: FormRegister.js:17 ~ FormRegister ~ user", state)
    }, [state])

    const changeUser = (e) => {
        console.log(e.value);
        setState({
            ...state,
            [e.name]:e.value
        })
    }
    const createUser= (e) => {
        e.preventDefault();
        
    };
    return(
        <div>
            <form className="formulario" onSubmit={createUser} id="formulario">
                <div className="nombre">
                    <label className="nomLabel" htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" value={state.firstName} onChange={(e) => changeUser(e.target)}/>
                    <p className="msgNombre">{state.firstName.length > 0 && state.firstName.length < 2
                        ? "Este campo debe tener al menos 2 caracteres." : ""}</p>
                </div>
                
                <div className="apellido">
                    <label className="apeLabel" htmlFor="lastName">Last Name: </label>
                    <input type="text" name="lastName" value={state.lastName} onChange={(e) => changeUser(e.target)}/>
                    <p className="msgApellido">{state.lastName.length > 0 && state.lastName.length < 2
                        ? "Este campo debe tener al menos 2 caracteres." : ""}</p>
                </div>

                <div className="correo">
                    <label className="corrLabel" htmlFor="email">Email: </label>
                    <input type="email" name="email" value={state.email} onChange={(e) => changeUser(e.target)}/>
                    <p className="msgEmail">{state.email.length > 0 && state.email.length < 5
                        ? "Este campo debe tener al menos 5 caracteres." : ""}</p>
                </div>

                <div className="contraseña">
                    <label className="contraLabel" htmlFor="password">Password: </label>
                    <input type="password" name="password" value={state.password} onChange={(e) => changeUser(e.target)}/>
                    <p className="msgContraseña">{state.password.length > 0 && state.password.length < 8
                        ? "Este campo debe tener al menos 8 caracteres." : ""}</p>
                </div>

                <div className="confCont">
                    <label className="confLabel" htmlFor="confirmPassword">Confirm Password: </label>
                    <input type="password" name="confirmPassword" value={state.confirmPassword} onChange={(e) => changeUser(e.target)}/>
                    <p className="msgConfirmar">{state.confirmPassword.length > 0 && state.confirmPassword.length < 8
                        ? "Este campo debe tener al menos 8 caracteres." : ""}
                        {state.password !== state.confirmPassword ? "Las contraseñas deben coincidir" : ""}</p>
                </div>
            </form>
            <button type="submit" form="formulario" value="submit">Enviar</button>
            <DatosUsuario datos={state}/>
        </div> 
    )
}
export default UserForm;