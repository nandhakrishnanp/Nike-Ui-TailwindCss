import { useState } from "react"
import Button from "../Components/Button"
import ShoeCard from "../Components/ShoeCard"
import { shoes, statistics } from "../Constants"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"

const Hero = () => {
const [bigShoeImg , setBigshoeImg] = useState(bigShoe1)

  return (
    <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container relative ">
        <div className="relative xl:w-3/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
            <span >The New Arrival</span>
            <br />
            <span className="text-coral-red mr-2">Nike</span>
            shoes
        </h1>
        <p className="font-monserrat mt-5 mb-10 text-slate-gray">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero amet odit, fugit exercitationem eum, nam ut optio quos error blanditiis, distinctio quisquam ea aperiam ex adipisci perferendis quibusdam ipsum quae.</p>

        <Button 
        label={"Shop Now"}
        iconUrl={arrowRight}
        />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
             {statistics.map((stat,index)=>(
                <div>
                    <p className="font-palanquin font-bold text-4xl">{stat.value}</p>
                    <p className="font-monsarrat leading-7 text-slate-gray ">{stat.label}</p>
                </div>
             ))}
        </div>
        </div>
        <div className="relative" >
        <div className=" flex justify-center items-center flex-1 xl:min-h-screen  max-xl:py-40 bg-primary bg-cover  ">
            <img src={bigShoeImg} alt="shoe collection " 
            width={610} 
            height={500}
            className="object-contain relative z-10"/>
            
        </div> 

        <div className="flex  sm:gap-6 gap-4 absolute  -bottom-[5%] sm:left-[10%] max-sm:px-6" >
             {shoes.map( (shoe)=>(
              <div   >
                <ShoeCard 
                imgUrl={shoe}
                changBigShoeImg ={(shoe)=> setBigshoeImg(shoe)}
                className="object-contain"
                width={127}
                height={103}
                bigShoeImg ={bigShoeImg} />
              </div>
             ))}
        </div>
        </div>
   
    </section>
  )
}

export default Hero