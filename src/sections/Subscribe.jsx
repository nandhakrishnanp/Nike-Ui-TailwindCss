import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"


const Subscribe = () => {
  return (
   <section  className='max-container flex justify-between items-center max-lg:flex-col gap-10'>
       <h2 className="mt-10 font-palanquin text-center text-4xl  capitalize  font-bold lg:max-w-lg">
            Sign Up For
           
            <span className="text-coral-red mr-2"> Updates</span>
           
           & Newsletter
           </h2>

           
           <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full mt-6'>
        <input type='text' placeholder='subscribe@nike.com' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full '>
        <Button 
        label={"Sign Up"}
        iconUrl={arrowRight}
        />
        </div>
      </div>
        
   </section>
  )
}

export default Subscribe