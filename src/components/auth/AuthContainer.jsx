import React, { useState } from "react";
import Login from "./login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";

export default function AuthContainer({ onLoginSuccess }) {
    const [activeScreen, setActiveScreen] = useState("login");

    const goTo = (screen) => setActiveScreen(screen);

  // FUNCIONES DE VALIDACIÓN (las mismas que en JS original)
const validateLogin = () => {
    let email = document.getElementById("login-email");
    let pass = document.getElementById("login-pass");
    let valid = true;

    if (email.value.trim() === "") {
        email.classList.add("error");
        document.getElementById("error-login-email").innerText =
        "El correo es obligatorio";
        valid = false;
    } else {
        email.classList.remove("error");
        document.getElementById("error-login-email").innerText = "";
    }

    if (pass.value.trim() === "") {
        pass.classList.add("error");
        document.getElementById("error-login-pass").innerText =
        "La contraseña es obligatoria";
        valid = false;
    } else {
        pass.classList.remove("error");
        document.getElementById("error-login-pass").innerText = "";
    }

    if (valid) {
        alert("Login exitoso ✅");
      onLoginSuccess(); // aquí mandamos al home
    }
};

const validateRegister = () => {
    let name = document.getElementById("reg-name");
    let email = document.getElementById("reg-email");
    let pass = document.getElementById("reg-pass");
    let valid = true;

    if (name.value.trim() === "") {
        name.classList.add("error");
        document.getElementById("error-reg-name").innerText =
        "El nombre es obligatorio";
        valid = false;
    } else {
        name.classList.remove("error");
        document.getElementById("error-reg-name").innerText = "";
    }

    if (email.value.trim() === "") {
        email.classList.add("error");
        document.getElementById("error-reg-email").innerText =
        "El correo es obligatorio";
        valid = false;
    } else {
        email.classList.remove("error");
        document.getElementById("error-reg-email").innerText = "";
    }

    if (pass.value.trim() === "") {
        pass.classList.add("error");
        document.getElementById("error-reg-pass").innerText =
        "La contraseña es obligatoria";
        valid = false;
    } else {
        pass.classList.remove("error");
        document.getElementById("error-reg-pass").innerText = "";
    }

    if (valid) {
        alert("Registro exitoso 🎉");
        goTo("login");
    }
};

const validateForgot = () => {
    let email = document.getElementById("forgot-email");
    if (email.value.trim() === "") {
        email.classList.add("error");
        document.getElementById("error-forgot-email").innerText =
        "El correo es obligatorio";
    } else {
        email.classList.remove("error");
        document.getElementById("error-forgot-email").innerText = "";
        alert("Se ha enviado un link de recuperación a tu correo 📩");
        goTo("login");
    }
};

    return (
    <>
        {activeScreen === "login" && (
        <Login goTo={goTo} validateLogin={validateLogin} />
        )}
        {activeScreen === "register" && (
        <Register goTo={goTo} validateRegister={validateRegister} />
        )}
        {activeScreen === "forgot" && (
        <ForgotPassword goTo={goTo} validateForgot={validateForgot} />
        )}
    </>
);
}
