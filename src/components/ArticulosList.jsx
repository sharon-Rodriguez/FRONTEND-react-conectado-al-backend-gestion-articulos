import React, { useEffect, useState } from "react";
import { getArticulos } from "../services/articulosService"; // ajusta la ruta según dónde tengas el service
import CardArticulo from "./CardArticulo"; // ajusta la ruta según dónde esté tu componente de tarjeta

export default function ListarArticulos() {
const [articulos, setArticulos] = useState([]);

  // Cuando el componente carga, pedimos los artículos al backend
useEffect(() => {
    getArticulos()
        .then((data) => {
        setArticulos(data);
        })
    .catch((error) => {
        console.error("Error al cargar los artículos:", error);
        });
}, []);

    return (
    <div className="articulos-lista" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {articulos.length > 0 ? (
        articulos.map((articulo) => (
            <CardArticulo key={articulo.id} articulo={articulo} />
        ))
        ) : (
        <p>No hay artículos disponibles</p>
        )}
    </div>
    );
}