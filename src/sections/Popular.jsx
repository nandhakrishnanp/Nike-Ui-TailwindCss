import PopularCard from "../Components/PopularCard"
import { products } from "../Constants"


const Popular = () => {
  return (
    <section id = "Products" className="max-container max-sm:mt-12">
         <div className="flex flex-col justify-start
          gap-5
         ">
            <h2 className="text-4xl font-bold font-palanquin  max-sd:text-2xl">Our <span className="text-coral-red">Popular</span> Products</h2>
            <p className="text-slate-gray">Elevate your experience with top-rated gems from our Popular Products collection.</p>
         </div>

         <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 place-items-center">
              {products.map(prod =>(
                <PopularCard
                key={prod.name}
                prod ={prod}
                />
              ))}
         </div>
    </section>
  )
}

export default Popular