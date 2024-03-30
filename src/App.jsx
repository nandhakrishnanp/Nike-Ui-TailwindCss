import { CustomerReviews ,Footer , Hero ,Popular,
  Services,Specialoffers,Subscribe,SuperQuality } from "./sections"
import Navbar from "./Components/Navbar"
const App = () => {
  return (
    <main className="relative">
         <Navbar/>
      <section className="xl:padding-l wide:padding-r padding-b ">
         <Hero/>
      </section>
      <section className="padding">
         <Popular/>
      </section>
      <section className="padding">
         <SuperQuality/>
         
      </section>
      <section className="padding bg-slate-100/95">
        <Services/>
      </section>
      <section className="padding">
        <Specialoffers/>
      </section>
      <section className="padding bg-pale-blue">
         <CustomerReviews/>
      </section>
      <section className="padding padding-x
      sm:py-32 py-16 w-full">
         <Subscribe/>
      </section>
      <section className="padding bg-black padding-x padding-y">
        <Footer/>
      </section>

    </main>
  )
}

export default App