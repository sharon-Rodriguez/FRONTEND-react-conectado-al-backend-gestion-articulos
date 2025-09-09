import React, { useEffect, useState } from "react";
import { getArticulos } from "./services/ArticulosServices"; // ajusta la ruta según dónde tengas el service
import Card from "/Card"; // ajusta la ruta según dónde esté tu componente de tarjeta

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
    <div className="articulos-lista">
        {articulos.length > 0 ? (
        articulos.map((articulo) => (
            <Card key={articulo.id} articulo={articulo} />
        ))
        ) : (
        <p>No hay artículos disponibles</p>
        )}
    </div>
    );
}