function Libreria({ children, libreria }) {
    return (
        <div className='card'>
            <p><strong>{libreria.nombre}</strong></p>
            <p>{libreria.ciudad}</p>
            <p>{libreria.email} </p>
            {children}
        </div>
    )
}

export default Libreria