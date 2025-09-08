import { FaTrashAlt } from "react-icons/fa";

function Card({ article, onDelete }) {
  return (
    <div className="card">
      <img src={article.image} alt={article.title} />
      <div className="info">
        <h3>{article.title}</h3>
        <p>{article.description}</p>
      </div>

      {/* Ícono de basurita abajo a la derecha */}
      <div className="delete-icon" onClick={onDelete ? () => onDelete(article.id) : null}
        style={{ cursor: onDelete ? "pointer" : "default", opacity: 0.6 }}
      >
      {/* onClick={onDelete ? () => onDelete(article.id) : null}
      Si el componente Card recibió la función "onDelete" como prop, entonces al hacer clic en el icono de basurita se ejecuta "onDelete(article.id)" que borra la card.
      "style={{ cursor: onDelete ? "pointer" : "default"
      Si no recibió onDelete, no hace nada (queda en null)
      Si no existe "onDelete" en esa card, el cursor queda normal (default).
        "opacity: 0.6" hace que el icono siempre se vea un poco más clarito/sutil. */}
        <FaTrashAlt />
      </div>
    </div>
  );
}

export default Card;