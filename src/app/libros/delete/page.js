import Formlibro from "@/components/formlibro"
import Button from "@/components/button-form"
import {prisma} from '@/lib/prisma'
import { deleteLibro } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
  const libro = await prisma.libro.findUnique({
    where: {
      id: Number(searchParams.id),
    },
  })

  return (
    <div>
      
      <Formlibro action={deleteLibro} title='Eliminar libro' libro={libro} disabled={true} >
      </Formlibro>
     
    </div>
  )
}

export default page