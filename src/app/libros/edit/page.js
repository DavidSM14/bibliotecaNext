import Form from "@/components/formlibro";
import {prisma} from '@/lib/prisma'
import { editLibro } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
  const libro = await prisma.libro.findUnique({
    where: {
      id: Number(searchParams.id),
    },
  })

  return (
    <div>
      
      <Form action={editLibro} title='Editar libro' libro={libro} >
      </Form>
      
    </div>
  )
}


export default page