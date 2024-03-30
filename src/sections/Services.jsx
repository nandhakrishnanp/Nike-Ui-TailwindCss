import ServiceCard from "../Components/ServiceCard"
import { services } from "../Constants"


const Services = () => {
  return (
    <section className="w-full justify-between gap-6  flex max-sm:flex-col " >
      { services.map((service)=>(
          <ServiceCard
             item={service}
          />
      ))}
           
    </section>
  )
}

export default Services