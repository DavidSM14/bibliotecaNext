import Link from 'next/link'
import Libro from '@/components/libro'
import { getLibros } from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function Libros() {
    const libros = await getLibros()
  //console.log(libros);

    return (
        <div className="flex flex-col items-center justify-center py-2">
            <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-md mt-2">
            <h1 className="text-3xl font-bold mb-4 text-center mt-2">Libros</h1>
            <Link class="enlace block text-center mb-2" href="/libros/new">
                Nuevo libro
            </Link>
            {
                
                libros.map((libro) => (
                    <Libro key={libro.id} libro={libro} >
                        <Link className="enlace"  href={{ pathname: '/libros/edit', query: { id: libro.id } }} >
                            Editar
                        </Link>
                        <Link className="enlace" href={{ pathname: '/libros/delete', query: { id: libro.id } }} >
                            Eliminar
                        </Link>
                    </Libro>
                ))
            }
            </div>
        </div>
    )
}
