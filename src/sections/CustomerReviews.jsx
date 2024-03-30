import { reviews } from "../Constants"
import { star } from "../assets/icons"

const CustomerReviews = () => {
  return (
    <section className="flex flex-col items-center justify-center
     max-container">
        <h1 className="text-black text-center font-palanquin text-4xl font-bold ">What Our <span className="text-coral-red">
        Customers</span> Say ?</h1>
     <p className="text-xl text-center font-montserrat text-slate-gray mt-3">Recent Reviews from Customers</p>
      
      <div className="mt-16 w-full ">
        { reviews.map((item)=>(
          <div className="flex flex-col justify-center  items-center py-3">
<img className="rounded-full  shadow-2xl" src={item.imgURL} alt=""  width={150}/>
          <div className="flex gap-3 mt-3" >
            <img src={star} alt="rating"
            />
          <p className="font-palanquin font-bold text-xl">{item.rating}</p>
          </div>
         
          <p className="mt-5 text-xl text-center  font-montserrat ">" {item.feedback} "</p>
          <h2 className="mt-5 text-2xl font-palanquin font-bold">{item.customerName}</h2>
          </div>
          
        ))}
      </div>

    </section>
  )
}

export default CustomerReviews