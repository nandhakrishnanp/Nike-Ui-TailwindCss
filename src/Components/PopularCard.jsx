import { star } from "../assets/icons"


const PopularCard = ({prod}) => {
    function getRandomNumber() {
        return (Math.random() * (5 - 4) + 4).toFixed(2);
      }
      
  return (
    <div >
        <img src={prod.imgURL} className=" hover:cursor-pointer hover:shadow-2xl" alt="PopularProducts" />
        <div className="flex  gap-3 mt-6  ">
           <img src={star} alt="" />
           <p className="text-slate-gray">{getRandomNumber()}</p>
        </div>
        <div className="">
        <h3 className=" font-montserrat font-bold mt-4 ">{prod.name}</h3>
        <p className="font-palanquin mt-2 text-coral-red text-xl">{prod.price}</p>

        </div>
        
    </div>
  )
}

export default PopularCard