import React from "react";

export default function Register({ goTo, validateRegister }) {
return (
    <div className="screen" id="register">
    <div className="contenedor_mayor">
        <div className="del_logo">
        <img src="logo.png" alt="Stanew logo" />
        <h1>STANEW</h1>
        <p className="slogan">INTERCAMBIO · VENTA · DONACIÓN</p>
        </div>

        <form
        className="formulario"
        onSubmit={(e) => {
            e.preventDefault();
            validateRegister();
        }}
        >
        <input type="text" id="reg-name" placeholder="Tu nombre completo" />
        <small id="error-reg-name" className="mensaje-error"></small>

        <input type="email" id="reg-email" placeholder="ejemplo@" />
        <small id="error-reg-email" className="mensaje-error"></small>

        <input type="password" id="reg-pass" placeholder="********" />
        <small id="error-reg-pass" className="mensaje-error"></small>

        <button type="submit">Crear cuenta</button>
        <button
        type="button"
        onClick={() => goTo("login")}
        className="link-button"
        >
        Ya tengo cuenta
        </button>
        </form>
    </div>
    </div>
);
}
