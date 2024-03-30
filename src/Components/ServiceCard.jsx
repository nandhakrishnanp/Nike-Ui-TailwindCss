
const ServiceCard = ({item}) => {
  return (
    <div className="bg-white py-10 px-8 rounded-xl shadow-2xl">
        <img className="bg-red-400 p-2 rounded-full" src={item.imgURL} alt="logo" />
        <h3 className="mt-3 font-medium  text-lg">{item. label}</h3>
        <p className="mt-3 text-slate-gray">{item.subtext}</p>
    </div>
  )
}

export default ServiceCard