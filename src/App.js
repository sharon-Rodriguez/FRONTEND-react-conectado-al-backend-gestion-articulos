import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";
import Preview from "./components/Preview";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // controla si el sidebar está abierto o cerrado
  const [currentView, setCurrentView] = useState("feed");  // controla qué vista mostrar (feed, form, preview)
  const [message, setMessage] = useState(null);  // mensaje para avisos (ej: eliminado)


  // lista de artículos con 2 de ejemplo
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Bicicleta usada",
      description: "En buen estado, lista para rodar 🚴",
      image: "https://picsum.photos/300/200?random=1",
    },
    {
      id: 2,
      title: "Chaqueta de cuero",
      description: "Casi nueva, talla M 🧥",
      image: "https://picsum.photos/300/200?random=2",
    },
  ]);

   // === REFERENCIAS ===
  const sidebarRef = useRef(null);  // referencia al sidebar (para detectar clic afuera)
  const menuBtnRef = useRef(null); // referencia al botón de menú


  // === MÁS ESTADOS ===
  const [toast, setToast] = useState(null);// mensaje temporal (ej: guardado exitoso)
  const [formData, setFormData] = useState({ title: "", description: "", image: "" }); // datos del formulario
  const [previewArticle, setPreviewArticle] = useState(null); // artículo en vista previa


   // === MANEJAR CLICK FUERA DEL SIDEBAR ===
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        sidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) && // clic fuera del sidebar
        menuBtnRef.current &&
        !menuBtnRef.current.contains(e.target) // clic fuera del botón de menú
      ) {
        setSidebarOpen(false);   // cerrar sidebar
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [sidebarOpen]);

// === FUNCIONES PRINCIPALES ===

// Alterna el estado del sidebar (abrir/cerrar)
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Actualiza el estado del formulario en cada cambio de input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
// Maneja el envío del formulario → crea un artículo en preview
  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = { id: Date.now(), ...formData };
    setPreviewArticle(newArticle);
    setCurrentView("preview");
    setToast("Artículo guardado exitosamente ✅");
    setTimeout(() => setToast(null), 3000);
  };

  const handleConfirm = () => {
    setArticles([previewArticle, ...articles]);
    setPreviewArticle(null);
    setFormData({ title: "", description: "", image: "" });
    setCurrentView("feed");
  };

  const handleDeletePreview = () => {
    if (previewArticle) {
      setArticles(prev => prev.filter(a => a.id !== previewArticle.id));
    }
    setPreviewArticle(null);
    setCurrentView("form");
  };

  const handleDeleteDirecto = (id) => {
    if (window.confirm("¿Seguro quieres borrar este artículo?")) {
      setArticles(prev => prev.filter(a => a.id !== id));
      setMessage("El elemento ha sido borrado");
      setTimeout(() => setMessage(null), 3000);
    }
  };

  return (
    <div>
      {/* HEADER */}
      <div className="header">
        <div ref={menuBtnRef} className="menu-btn" onClick={toggleSidebar}>☰</div>
        <div className="brand">
          <img src="/logo.png" alt="logo" />
          <h1>Stanew</h1>
        </div>
      </div>

      {/* SIDEBAR */}
      <div ref={sidebarRef} className={`sidebar ${sidebarOpen ? "active" : ""}`}>
        <h3>Menú</h3>
        <ul>
          <li onClick={() => { setSidebarOpen(false); setCurrentView("feed"); }}>Inicio</li>
          <li>Solicitudes</li>
          <li>Perfil</li>
          <li onClick={() => setCurrentView("form")}>Publicar artículo</li>
          <li>Cerrar sesión</li>
        </ul>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <main style={{ marginTop: "8px" }}>
        {currentView === "feed" && (
          <>
            <h2 className="titulo">Artículos disponibles</h2>
            <div className="articles">
              {articles.map((art) => (
                <Card key={art.id} article={art} onDelete={handleDeleteDirecto} />
              ))}
            </div>
          </>
        )}

        {currentView === "form" && (
          <Form formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
        )}

        {currentView === "preview" && previewArticle && (
          <Preview
            article={previewArticle}
            onConfirm={handleConfirm}
            onDelete={handleDeletePreview}
          />
        )}
      </main>

      {/* TOAST */}
      {toast && <div className="toast">{toast}</div>}

      {message && <div className="alert success">{message}</div>}
      
      <footer>© 2025 Stanew - Exchange · Sale · Donation</footer>
    </div>
  );
}