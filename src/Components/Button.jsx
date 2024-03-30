
const Button = ({label,iconUrl}) => {
  return (
   <button className="flex bg-orange-600 p-2 rounded-full text-white my-3 hover:bg-orange-500">
    {label}
    <img src={iconUrl} alt="icon"
    className="ml-2 rounded-full w-5 h-5 hover:bg-gray-100 " />
   </button>
  )
}

export default Button