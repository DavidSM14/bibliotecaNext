import Form from "@/components/formlibro";
import { newLibro } from "@/lib/actions"

export const dynamic = 'force-dynamic'

function page() {
  return (
    <div>
      
      <Form action={newLibro} title='Crear libro' libro={null}>
      </Form>
    </div>
  )
}

export default page