'use server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { signIn, signOut } from '@/auth';
import { getUserByEmail } from '@/lib/data';
import { redirect } from 'next/navigation';

// REGISTER
export async function register(formData) {
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')

    // Comprobamos si el usuario ya está registrado
    const user = await getUserByEmail(email);

    if (user) {
        return { error: 'El email ya está registrado' }
    }

    // Encriptamos password 
    const hashedPassword = await bcrypt.hash(password, 10)

    // Guardamos credenciales en base datos
    await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })

    return { success: "Registro correcto" }
}


// LOGIN credentials
export async function login(formData) {
    const email = formData.get('email')
    const password = formData.get('password')

    // Comprobamos si el usuario está registrado
    const user = await getUserByEmail(email);

    if (!user) {
        return { error: 'Usuario no registrado.' }
    }

    // Comparamos password 
    const matchPassword = await bcrypt.compare(password, user.password)

    if (user && matchPassword) {  // && user.emailVerified
        await signIn('credentials', { email, password, redirectTo: '/' })
        // return { success: "Inicio de sesión correcto" }
    } else {
        return { error: 'Credenciales incorrectas.' }
    }

}


// LOGIN google
export async function loginGoogle() {
    try {
        await signIn('google', { redirectTo: '/' })
    } catch (error) {
        throw error
    }
}

// LOGIN github
export async function loginGithub() {
    try {
        await signIn('github', { redirectTo: '/' })
    } catch (error) {
        console.log(error);
        throw error
    }
}

// LOGIN spotify
export async function loginSpotify() {
    try {
        await signIn('spotify', { redirectTo: '/' })
    } catch (error) {
        throw error
    }
}

// LOGIN gitlab
export async function loginGitlab() {
    try {
        await signIn('gitlab', { redirectTo: '/' })
    } catch (error) {
        throw error
    }
}


// LOGOUT
export async function logout() {
    try {
        await signOut({ redirectTo: '/' })
    } catch (error) {
        throw error
    }
}


async function getLibreriasIds() {
    const libIds = await prisma.libreria.findMany({
        select: { id: true }
    })
    return libIds.map(p => p.id)
}



// Libros

export async function getLibros() {
    try {
        const libro = await prisma.libro.findMany()
        return libro;
    } catch (error) {
        // console.log(error);  
        return null;
    }
}


export async function getLibro(id) {  // obtener artículo con proveedores
    try {
        const libro = await prisma.libro.findUnique({
            where: { id },
            include: {
                librerias: true
            }
        })

        console.log(libro);
        return libro;
    } catch (error) {
        // console.log(error);  
        return null;
    }
}



export async function newLibro(formData) {
    try {
        const nombre = formData.get('nombre')
        const autor = formData.get('autor')
        const literatura = formData.get('literatura')

        // Array con IDs de todos los proveedores
        const ids = await getLibreriasIds()
        console.log('IDs ', ids);

        // Array con IDs de proveedores marcados por el usuario
        const checks = ids.map(id => formData.get(id.toString()))
            .filter(id => id !== null)
            .map(id => Number(id))
        console.log('CHECKS ', checks);

        // Array de objetos con IDs de proveedores a conectar al artículo
        const connect = checks.map(id => { return { id: Number(id) } })
        console.log('CONNECT ', connect);

        const libro = await prisma.libro.create({
            data: {
                nombre,
                autor,
                literatura,
                
            },
           
        })

        console.log(libro);
        revalidatePath('/libros')
    } catch (error) {
        console.log(error);
    }
    redirect('/libros');
}

export async function editLibro(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const autor = formData.get('autor')
    const literatura = formData.get('literatura')

    // // Array con IDs de todos los proveedores
    // const ids = await getLibreriasIds()
    // console.log('IDs ', ids);

    // // Array con IDs de proveedores marcados por el usuario
    // const checks = ids.map(id => formData.get(id.toString()))
    //     .filter(id => id !== null)
    //     .map(id => Number(id))
    // console.log('CHECKS ', checks);

    // // Array de objetos con IDs de proveedores a conectar al artículo
    // const connect = checks.map(id => { return { id: Number(id) } })
    // console.log('CONNECT ', connect);

    // // Array de objetos con IDs de proveedores a desconectar del artículo
    // // https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript
    // const difference = ids.filter(id => !checks.includes(id));
    // const disconnect = difference.map(id => { return { id: Number(id) } })
    // console.log('DISCONNECT ', disconnect);

    try {
        const libro = await prisma.libro.update({
            where: { id },
            data: {
                nombre,
                autor,
                literatura,
                // librerias: { connect, disconnect },
            },
            // include: {
            //     librerias: true,
            // },
        })

        console.log(libro);
        revalidatePath('/libros')
    } catch (error) {
        console.log(error);
    }
    redirect('/libros');
}


export async function deleteLibro(formData) {
    try {
        const id = Number(formData.get('id'))

        const libro = await prisma.libro.delete({
            where: {
                id: id,
            },
        })
        console.log(libro);
        revalidatePath('/libros')
    } catch (error) {
        console.log(error);
    }

    redirect('/libros');
}



// LIBRERIAS

export async function getLibrerias() {
    try {
        const librerias = await prisma.libreria.findMany()
        return librerias;
    } catch (error) {
        console.log(error);  
        return null;
    }
}



export async function getLibreria(id) {  // obtener proveedores con artículos
    try {
        const libreria = await prisma.libreria.findUnique({
            where: { id },
            include: {
                libros: true
            }
        })

        console.log(libreria);
        return libreria;
    } catch (error) {
        // console.log(error);  
        return null;
    }
}



export async function newLibreria(formData) {
    try {
        const nombre = formData.get('nombre')
        let ciudad = formData.get('ciudad')
        let email = formData.get('email')
        

        const libreria = await prisma.libreria.create({
            data: { nombre, ciudad, email },
        })

        console.log(libreria);
        revalidatePath('/librerias')
    } catch (error) {
        console.log(error);
    }
    redirect('/librerias');
}



export async function editLibreria(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    let ciudad = formData.get('ciudad')
    let email = formData.get('email')

    try {
        const libreria = await prisma.libreria.update({
            where: { id },
            data: { nombre, ciudad, email },
        })
        console.log(libreria);
        revalidatePath('/librerias')
    } catch (error) {
        console.log(error);
    }
    redirect('/librerias');
}



export async function deleteLibreria(formData) {
    try {
        const id = Number(formData.get('id'))

        const libreria = await prisma.libreria.delete({
            where: {
                id: id,
            },
        })
        console.log(libreria);
        revalidatePath('/librerias')
    } catch (error) {
        console.log(error);
    }

    redirect('/librerias');
}

