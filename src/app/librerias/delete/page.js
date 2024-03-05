import Form from "@/components/form"
import {prisma} from '@/lib/prisma'
import { deleteLibreria } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
  const libreria = await prisma.libreria.findUnique({
    where: {
      id: Number(searchParams.id),
    },
  })

  return (
    <div>
      
      <Form action={deleteLibreria} title='Eliminar' libreria={libreria} disabled={true} >
     
      </Form>
    
      
    </div>
  )
}

export default page