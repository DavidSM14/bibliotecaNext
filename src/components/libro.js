function Libro({ children, libro }) {
    return (
        <div className='card'>
            <p><strong>{libro.nombre}</strong></p>
            <p>{libro.autor}</p>
            <p>{libro.literatura} </p>
            {children}
        </div>
    )
}

export default Libro