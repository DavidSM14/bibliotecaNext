import Link from 'next/link'
import Libreria from '@/components/libreria'
import { getLibrerias } from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function Librerias() {
    const librerias = await getLibrerias()
  //console.log(librerias);

    return (
        <div className="flex flex-col items-center justify-center py-2">
            <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-md mt-2">
            <h1 className="text-3xl font-bold mb-4 text-center mt-2">Librerias</h1>
            <Link class="enlace block text-center mb-2" href="/librerias/new">
                Nueva libreria
            </Link>
            {
                librerias.map((libreria) => (
                    <Libreria key={libreria.id} libreria={libreria} >
                        <Link className='enlace'  href={{ pathname: '/librerias/edit', query: { id: libreria.id } }} >
                            Editar
                        </Link>
                        <Link className='enlace' href={{ pathname: '/librerias/delete', query: { id: libreria.id } }} >
                            Eliminar
                        </Link>
                    </Libreria>
                ))
            }
            </div>
        </div>
    )
}