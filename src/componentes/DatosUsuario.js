import React from "react";

const DatosUsuario= (props) => {
    console.log(props);
    const {datos} = props;

    const {firstName, lastName, email, password, confirmPassword} = datos;
    return (
        <div>
            <h2>Datos ingresados </h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    )
}

export default DatosUsuario;