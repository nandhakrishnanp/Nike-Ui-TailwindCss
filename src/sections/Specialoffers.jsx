import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"

const Specialoffers = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse
    gap-10 max-container">
        <div className="flex-1">
          <img src={offer} alt="offersImg"
          height={687}
          width={773} 
          className="object-contain w-full"/>
        </div>
 <div>
 <h2 className="mt-10 font-palanquin text-4xl  capitalize  font-bold lg:max-w-lg">
           
            <span className="text-coral-red mr-2"> Special </span>
            Offers
        </h2>
        <p className="font-monserrat mt-4 lg:max-w-lg info-text">
Nike shoes are renowned for their exceptional quality, setting the standard for athletic footwear worldwide. Crafted with precision and innovation, each pair of Nike shoes embodies durability, performance, and style. From advanced cushioning technologies to superior materials, Nike ensures that every shoe delivers unparalleled comfort, support, and functionality. Whether you're hitting the track, the court, or the streets,Nike shoes promise unmatched quality to elevate your performance and style game to new heights.</p>
  <div className="mt-11 flex gap-5 flex-wrap ">
  <Button 
        label={"View  Details"}
        iconUrl={arrowRight}
        />
  </div>
     
      </div>

    </section>
  )
}

export default Specialoffers