export default function Preview({ article, onConfirm, onDelete }) {
    return (
/* Tarjeta con los datos del artículo en preview */        
    <div className="preview">
        <h2>Artículo añadido ✅</h2>
        <div className="card">
        <img src={article.image} alt={article.title} />
        <div className="info">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
        </div>
    </div>
{/* Botones de acción: confirmar publicación o eliminar */}
    <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={onConfirm}>Volver al inicio</button>
        <button onClick={onDelete} style={{ background: "#c0392b" }}>
        Eliminar
        </button>
    </div>
    </div>
    );
}