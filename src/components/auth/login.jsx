import React from "react";

export default function Login({ goTo, validateLogin }) {
return (
    <div className="screen active" id="login">
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
            validateLogin();
        }}
        >
        <input type="email" id="login-email" placeholder="ejemplo@" />
        <small id="error-login-email" className="mensaje-error"></small>

        <input type="password" id="login-pass" placeholder="********" />
        <small id="error-login-pass" className="mensaje-error"></small>

        <button type="submit">Ingresar</button>
        <button
        type="button"
        onClick={() => goTo("forgot")}
        className="link-button"
        >
        Olvidé mi contraseña
        </button>

        <button
        type="button"
        onClick={() => goTo("register")}
        className="link-button"
        >
        Registrarme
        </button>
        </form>
    </div>
    </div>
);
}

