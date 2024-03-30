import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"


const SuperQuality = () => {
  return (
    <section
    id="about-us"
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container ">
      <div className="flex flex-1 flex-col">
      <h2 className="mt-10 font-palanquin text-4xl  capitalize  font-bold lg:max-w-lg">
            We provide you 
           
            <span className="text-coral-red mr-2"> Super</span>
            <span className="text-coral-red mr-2">quality</span>
            shoes
        </h2>
        <p className="font-monserrat mt-4 lg:max-w-lg info-text">
Nike shoes are renowned for their exceptional quality, setting the standard for athletic footwear worldwide. Crafted with precision and innovation, each pair of Nike shoes embodies durability, performance, and style. From advanced cushioning technologies to superior materials, Nike ensures that every shoe delivers unparalleled comfort, support, and functionality. Whether you're hitting the track, the court, or the streets,Nike shoes promise unmatched quality to elevate your performance and style game to new heights.</p>
  <div className="mt-7">
  <Button 
        label={"Shop Now"}
        iconUrl={arrowRight}
        />
  </div>
     
      </div>
      <div className="flex flex-1 justify-center items-center">
     <img src={shoe8} width={570}
     height={522} alt="shoe" />
      </div>
    </section>
  )
}

export default SuperQuality