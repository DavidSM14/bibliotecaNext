import Form from "@/components/form";
import Button from "@/components/button-form"
import {prisma} from '@/lib/prisma'
import { editLibreria } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
  const libreria = await prisma.libreria.findUnique({
    where: {
      id: Number(searchParams.id),
    },
  })

  return (
    <div>
      
      <Form action={editLibreria} title='Editar' libreria={libreria}  >
      </Form>
      
    </div>
  )
}


export default page