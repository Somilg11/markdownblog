"use client"
import WordRotate from "@/components/ui/word-rotate";


const Hero = () => { 
    
  return (
    <div>
        <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8 md:pl-10">
          <h1 className="text-3xl leading-snug text-zinc-800 dark:text-zinc-200 md:text-4xl">
            a <span className="font-semibold">free blog repository</span> for community <br className="hidden lg:block" /> components using <span className="font-semibold decoration-primary"><span />
            <WordRotate
      className="text-4xl font-bold text-black dark:text-white"
      words={['coding', 'web development', 'software engineering', 'data science', 'machine learning']}
    />
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            you may sometimes find what you are looking for, <br className="hidden lg:block" /> if not so give me a dm!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
             
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img src="./heroimg.png" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>
    </div>
  )
}

export default Hero