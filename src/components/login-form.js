'use client'
import { useState } from 'react';
import { login } from '@/lib/actions'
import Button from '@/components/button-form';
import { useFormStatus } from 'react-dom'
import OAuthForm from '@/components/oauth-form'

export default function LoginForm() {
    const [resultado, setResultado] = useState("")
    const [tipo, setTipo] = useState("")

    async function wrapper(data) {
       
        const message = await login(data) // Server action
        if (message?.success) {
            // setTipo('success')
            // setResultado(message.success);
        }
        if (message?.error) {
            setTipo('error')
            setResultado(message.error);
        }
    }
    const { pending } = useFormStatus()

    return (
        // <div className="form">
        //     <h1>Iniciar sesión</h1>
        //     <form action={wrapper} className='auth'>
        //         <div>
        //             <label>Email
        //                 <input type='email' name='email'
        //                     placeholder="john.doe@example.com"
        //                 />
        //             </label>
        //             <label>Password
        //                 <input type="password" name='password'
        //                     placeholder="******"
        //                 />
        //             </label>
        //             <p className={`info ${tipo}`}> {resultado} </p>
        //         </div>

        //         <Button title="Iniciar sesión" />
        //     </form>
        // </div>
        <section className="relative py-10 bg-gray-900 sm:py-16 lg:py-24">
        <div className="absolute inset-0">
            <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/signin/2/man-eating-noodles.jpg" alt="" />
        </div>
        <div className="absolute inset-0 bg-gray-900/20"></div>
    
        <div className="relative max-w-lg px-4 mx-auto sm:px-0">
            <div className="overflow-hidden bg-white rounded-md shadow-md">
                <div className="px-4 py-6 sm:px-8 sm:py-7">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900">Bienvenido de nuevo</h2>
                        <p className="mt-2 text-base text-gray-600">No tienes una? <a href="/auth/register" title="" className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">Crea una cuenta gratis</a></p>
                    </div>
    
                    <form action={wrapper} method="POST" className="auth">
                        <div className="space-y-5">
                            <div>
                                <label for="" className="text-base font-medium text-gray-900"> Correo electrónico </label>
                                <div className="mt-2.5">
                                    <input type="email" name="email" id="email" placeholder="david@gmail.com" className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>
                            </div>
    
                            <div>
                                <div className="flex items-center justify-between">
                                    <label for="" className="text-base font-medium text-gray-900"> Contraseña </label>
                                </div>
                                <div className="mt-2.5">
                                    <input type="password" name="password" id="password" placeholder="david1234" className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>
                            </div>
    
                            <div>
                                <button type="submit" disabled={pending} className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">Log in</button>

                            </div>
    
                            <div>
                            <OAuthForm/> 
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <p className={`info ${tipo}`}> {resultado} </p>
    </section>

    );
};

