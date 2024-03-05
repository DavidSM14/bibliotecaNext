import Link from "next/link"

export default function Home() {
  return (
    <main>
      <section class="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
          <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div class="grid items-center grid-cols-1 md:grid-cols-2">
                  <div>
                      <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Hey 👋 somos Libreria Esilian <br class="block sm:hidden" /></h2>
                      <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Bienvenido a Librería Esilian, tu destino literario en el corazón de la ciudad. En Esilian, nos apasiona conectar a los lectores con las historias que aman y crear un espacio donde puedan explorar, descubrir y disfrutar del placer de la lectura.
                        Nuestra librería es mucho más que un lugar para comprar libros; es un santuario para los amantes de la literatura, donde cada estantería está repleta de tesoros esperando ser descubiertos. Desde los clásicos más venerados hasta las últimas novedades, nuestra cuidadosa selección de títulos abarca una amplia gama de géneros y temas para satisfacer todos los gustos y edades.
                      </p>
                      <p class="mt-4 text-xl text-gray-600 md:mt-8">
                          <span class="relative inline-block">
                              <span class="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                              <span class="relative"> Tienes alguna pregunta? </span>
                          </span>
                          <br class="block sm:hidden" /> Buscame en instagram <a href="https://www.instagram.com" title="" class="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"> Instagram</a>
                      </p>
                  </div>

                  <div class="relative">
                    <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="/libro.png" alt="" />
                  </div>
              </div>
          </div>
      </section>
    </main>
  )
}
