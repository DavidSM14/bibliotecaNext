'use client'
import { useState } from 'react';
import { register } from '@/lib/actions'
import { redirect } from 'next/navigation';
import { useFormStatus } from 'react-dom'
import Button from '@/components/button-form';


function RegisterForm() {
    const [resultado, setResultado] = useState("")
    const [tipo, setTipo] = useState("")
    const { pending } = useFormStatus()

    async function wrapper(data) {
        const message = await register(data) // Server action
        if (message.success) {
            setTipo('success')
            // setResultado(message.success);
            redirect('/auth/signin')
        } else {
            setTipo('error')
            setResultado(message.error);
        }

    }
    
    return (
    //     <form action={wrapper} className='credentials'>
    //         <div>
    //             <label>Nombre
    //                 <input type='text' name='name' placeholder="José García" />
    //             </label>
    //             <br/>
    //             <label>Email
    //                 <input type='email' name='email' placeholder="jose@mail.com" />
    //             </label>
    //             <br/>
    //             <label>Contraseña
    //                 <input type="password" name='password' placeholder="******" />
    //             </label>
    //             <p className={`info ${tipo}`}> {resultado} </p>
    //         </div>

    //         <Button title="Crear cuenta" />
    //     </form>
    // )
<section class="bg-white">
    <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
            <div class="absolute inset-0">
                <img class="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/4/girl-working-on-laptop.jpg" alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

            <div class="relative">
                
            </div>
        </div>

        <div class="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">Registrate</h2>
                

                <form action={wrapper} method="POST" className="credentials">
                    <div class="space-y-5">
                        <div>
                            
                            
                        </div>

                        <div>
                            <label for="" class="text-base font-medium text-gray-900"> Correo electrónico </label>
                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>

                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Introduzca su correo electrónico"
                                    class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label for="" class="text-base font-medium text-gray-900"> Contraseña </label>
                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                        />
                                    </svg>
                                </div>

                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Introduzca su contraseña"
                                    class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
                            </div>
                        </div>

                        <div>
                            <Button title="Crear cuenta" />
                        </div>
                    </div>
                </form>

                <div class="mt-3 space-y-3">
        
                </div>
            </div>
        </div>
        <p className={`info ${tipo}`}> {resultado} </p>
    </div>
</section>  
    )
};

export default RegisterForm;


