import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
                  BluLoo Tabs: Ahorra Agua con Cada Uso
                </h1>
                <p className="mb-12 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Tabletas ecológicas que limpian, desodorizan y tiñen el agua de azul, permitiendo usar el inodoro hasta 5 veces antes de descargarlo. Ahorra hasta 50 litros de agua diarios por hogar.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://blulootabs.com"
                    className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    🌱 Conoce el Producto
                  </Link>
                  <Link
                    href="https://wa.me/573156703477"
                    className="inline-block rounded-xs bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                    target="_blank"
                  >
                    Invertir o Distribuir
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SVGs decorativos se conservan tal como están */}
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">{/* SVG */}</div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">{/* SVG */}</div>
      </section>
    </>
  );
};

export default Hero;
