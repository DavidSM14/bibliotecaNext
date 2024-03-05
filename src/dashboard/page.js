import { auth } from '@/auth'
import { redirect } from 'next/navigation';
import Link from 'next/link';

async function page() {
    const session = await auth()
    console.log(session);

    if (!session) redirect('/')

    return (
        <main>
            <h1>Dashboard</h1>
            <Link href="/">Página principal</Link>
            <div>
                {JSON.stringify(session)}
            </div>
        </main>
    )
}

export default page