import { auth } from "@/auth"
import { logout } from '@/lib/actions'


async function Header() {
    const session = await auth();
    // console.log(session);
    

    return (
        <header>
            <div className="relative bg-black">
            <div className="absolute inset-0">
                    <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/headers/3/coworking-space.jpg" alt="" />
                </div>

                <div className="absolute inset-0 bg-black/30"></div>

                <div className="relative px-4 mx-auto sm:px-6 lg:px-8">
                    <nav className="flex items-center justify-between h-16 lg:h-20">
                        <div className="flex-shrink-0">
                            <a href="/" title="" className="flex">
                                <img className="w-auto h-8 lg:h-10" src="https://img.icons8.com/dusk/64/book-shelf.png" alt="" />
                            </a>
                        </div>

                        <button type="button" className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-800 hover:bg-gray-800">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>

                        <div className="hidden lg:flex lg:items-center lg:space-x-10">
                            <a href="/librerias" title="" className="text-base font-medium text-white"> librerias </a>

                            <a href="/libros" title="" className="text-base font-medium text-white"> libros </a>

                            <a href="/about" title="" className="text-base font-medium text-white"> sobre nosotros </a>

                        </div>
                        
                        {session
                        
                    ? <form><button formAction={logout}>SignOut</button></form>
                    :
                    (<>
                    
                        <div className="flex items-start lg:space-x-5"> 
                            <a href="/auth/signin" title="" className="inline-flex items-center justify-center w-auto px-6 py-3 mt-auto text-base font-semibold text-white transition-all duration-200 bg-zinc-700 border border-transparent rounded-full hover:bg-zinc-300 focus:bg-zinc-500" role="button">SignIn</a>
                        </div>       
                    </>)
                }
                    </nav>
                </div>
            </div>


            <nav id="menu" className="flex flex-col justify-between w-full max-w-xs min-h-screen px-4 py-10 bg-black sm:px-6 lg:hidden">
                <button type="button" className="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800" >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="flex flex-col flex-grow h-full">
                    <nav className="flex flex-col flex-1 mt-10 space-y-2">
                        <a href="/librerias" title="" className="text-base font-medium text-white"> librerias </a>

                        <a href="/libros" title="" className="text-base font-medium text-white"> libros </a>

                        <a href="/about" title="" className="text-base font-medium text-white"> sobre nosotros </a>
                    </nav>
                </div>
            </nav>
        </header>
    )
}



export default Header


// {/* <div>
// <Link href="/">Inicio</Link>
// {session?.user?.role === 'ADMIN'
//     ? <Link href="/admin">Admin panel</Link>
//     : ''
// }
// <Link href="/dashboard">Dashboard</Link>
// </div>
// <nav>
// {session
//     ? <form><button formAction={logout}>SignOut</button></form>
//     :
//     (<>
//         <Link href="/auth/register">SignUp</Link>
//         <Link href="/auth/signin">SignIn</Link>
//     </>)
// }
// </nav> */}



//         <header>
            // <div className="relative bg-black">
            //     <div className="absolute inset-0">
            //         <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/headers/3/coworking-space.jpg" alt="" />
            //     </div>

            //     <div className="absolute inset-0 bg-black/30"></div>

            //     <div className="relative px-4 mx-auto sm:px-6 lg:px-8">
            //         <nav className="flex items-center justify-between h-16 lg:h-20">
            //             <div className="flex-shrink-0">
            //                 <a href="#" title="" className="flex">
            //                     <img className="w-auto h-8 lg:h-10" src="https://img.icons8.com/dusk/64/book-shelf.png" alt="" />
            //                 </a>
            //             </div>

            //             <button type="button" className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-800 hover:bg-gray-800">
            //                 <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            //                 </svg>
            //             </button>

            //             <div className="hidden lg:flex lg:items-center lg:space-x-10">
            //                 <a href="#" title="" className="text-base font-medium text-white"> Features </a>

            //                 <a href="#" title="" className="text-base font-medium text-white"> Solutions </a>

            //                 <a href="#" title="" className="text-base font-medium text-white"> Resources </a>

            //                 <a href="#" title="" className="text-base font-medium text-white"> Pricing </a>
            //             </div>

            //             <a href="#" title="" className="items-center justify-center hidden px-6 py-3 text-base font-semibold text-black transition-all duration-200 bg-yellow-400 border border-transparent rounded-full lg:inline-flex hover:bg-yellow-500 focus:bg-yellow-500" role="button"> Join Now </a>
            //         </nav>
            //     </div>
            // </div>

            // <nav className="flex flex-col justify-between w-full max-w-xs min-h-screen px-4 py-10 bg-black sm:px-6 lg:hidden">
            //     <button type="button" className="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800">
            //         <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            //         </svg>
            //     </button>

            //     <div className="flex flex-col flex-grow h-full">
            //         <nav className="flex flex-col flex-1 mt-10 space-y-2">
            //             <a href="#" title="" className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"> Features </a>

            //             <a href="#" title="" className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"> Solutions </a>

            //             <a href="#" title="" className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"> Resources </a>

            //             <a href="#" title="" className="flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"> Pricing </a>
            //         </nav>

                    
            //     </div>
            // </nav>
        // </header>
