import Form from "@/components/form";
import { newLibreria } from "@/lib/actions"

export const dynamic = 'force-dynamic'

function page() {
  return (
    <div>
      
      <Form action={newLibreria} title='Crear libreria' libreria={null}>
      </Form>

    </div>
  )
}

export default page