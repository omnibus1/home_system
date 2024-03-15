import useMediaQuery from "../../hooks/useMediaQuery"
import { Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';



const Navbar = () => {

    const smallScreen:boolean = useMediaQuery("(max-width: 640px")
    const [menuToggled, setMenuToggled] = useState<boolean>(false)

    useEffect(()=>{
        menuToggled? document.body.style.overflow = "hidden": document.body.style.overflow = ""
    },[menuToggled])

    return (
        <div className="w-full py-3 flex items-center z-30 text-primary-100 absolute font-bold text-xl">
            <div className="w-4/5 m-auto flex items-center justify-between">
                <span className="text-2xl  inline-block ">Nieznanowice 149</span>
                {smallScreen? 
                    (    
                        <button className="rounded-full bg-secondary-500">
                            {menuToggled? 
                            <XMarkIcon className="h-8 w-8 hover:text-primary-300" onClick={()=>setMenuToggled(!menuToggled)}/>
                            :
                            <Bars3Icon className="h-8 w-8 hover:text-primary-300" onClick={()=>setMenuToggled(!menuToggled)}/>}
                        </button>

                    ) : (
                        <div className="flex gap-8">
                            <Link to="/" className={`hover:text-primary-300 transition-all `}>Home</Link>
                            <Link to="/devices" className={`hover:text-primary-300 transition-all`}>Devices</Link>
                        </div>
                    )}
            </div>
            {menuToggled && smallScreen &&
            <div className={`h-screen w-screen absolute top-0 bg-primary-100 absolute left-0 mt-14 opacity-90 py-10 text-primary-300`}>
                <div className="w-4/5 m-auto flex flex-col items-center gap-8">
                    <Link to="/" className={`hover:text-primary-500`} onClick={()=>setMenuToggled(false)}>Home</Link>
                    <Link to="/devices" className={`hover:text-primary-500`} onClick={()=>setMenuToggled(false)}>Devices</Link>
                </div>
            </div>
            }
        </div>
    )
}

export default Navbar

