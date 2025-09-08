export default function Form({ formData, onChange, onSubmit }) {
    return (
    <form className="formulario" onSubmit={onSubmit}>
        <h2>Publicar artículo</h2>
        <input
        type="text"
        name="title"
        placeholder="Título"
        value={formData.title}
        onChange={onChange}
        required
    />
    <textarea
        name="description"
        placeholder="Descripción"
        value={formData.description}
        onChange={onChange}
        required
    />
    <input
        type="text"
        name="image"
        placeholder="URL de la imagen"
        value={formData.image}
        onChange={onChange}
        required
    />
    <button className="guardar" type="submit">Guardar</button>
    </form>
    );
}

