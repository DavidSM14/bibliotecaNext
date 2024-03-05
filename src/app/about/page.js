import React from 'react'

function page() {
    return (
        <section class="py-10 bg-gray-800 lg:py-0">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid items-stretch grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 xl:gap-x-24">
            <div class="h-full pr-12 lg:order-2 lg:mb-40">
                <div class="relative h-full lg:h-auto">
                    <div class="absolute w-full h-full -mb-12 overflow-hidden bg-gradient-to-r from-fuchsia-600 to-blue-600 top-12 left-12 xl:left-16 lg:top-0 lg:scale-y-105 lg:origin-top">
                        <img class="object-cover object-right w-full h-full scale-150" src="https://cdn.rareblocks.xyz/collection/celebration/images/content/2/lines.svg" alt="" />
                    </div>
                    <div class="relative lg:-top-12">
                        <img className="mt-20" src="https://cdn.rareblocks.xyz/collection/celebration/images/content/2/girl-drinking-coffee.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-start py-10 lg:order-1 sm:py-16 lg:py-24 xl:py-48">
                <div>
                    
                    <h2 class="mt-8 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">Por qué deberias visitarnos?</h2>
                    <p class="text-xl leading-relaxed text-gray-200 mt-9">Únete a nosotros en la Librería Esilian y déjanos ser tu guía en este emocionante viaje a través del maravilloso mundo de la literatura.</p>
                    <p class="mt-6 text-xl leading-relaxed text-gray-200">Nos encontramos en la calle andalucia nº14 no dudes en visitarnos</p>
                </div>
            </div>
        </div>
    </div>
</section>

    )
}

export default page