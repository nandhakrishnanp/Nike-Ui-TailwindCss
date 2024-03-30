import { hamburger } from '../assets/icons'
import {headerLogo} from '../assets/images'
import { navLinks } from '../Constants'

const Navbar = () => {
  return (
   <header className='padding-x py-8 absolute z-10 w-full'>

    <nav className='flex justify-between max-container items-center'>
        <a href="/">
            <img src={headerLogo} alt="logo" width={130}
            height={29} 
            
            />
        </a>

        <ul className=' flex-1 flex justify-center items-center gap-16  max-lg:hidden'>
              { navLinks.map((item)=> (
                <li key={item.label}>
                    <a href={item.href} className='leading-normal text-lg text-slate text-slate-gray'>{item.label}  </a>
                </li>
              ))}
        </ul>
        <div>
            <img src={hamburger} alt="ham" 
            width={25}
            height={25}
            className='hidden max-lg:block'/>
        </div>
    </nav>
   </header>
  )
}

export default Navbar