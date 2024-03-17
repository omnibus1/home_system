import {useState, useEffect} from "react";
import {Device} from "../../common/classes.ts";
import DeviceTile from "../device-tile";


const Device = () => {
    const api_url = import.meta.env.VITE_API_URL || "localhost"

    const [devices, setDevices] = useState<Device[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [requestError, setRequestError] = useState<boolean>(false)

    useEffect(() => {
        requestDevices()

    }, []);

    const requestDevices = async () => {
        try{
            let response = await fetch(`http://${api_url}:8000/api/devices`)
            let jsonData = await response.json()
            setDevices(jsonData)
            setIsLoading(false)
        }
        catch (error){
            setIsLoading(false)
            setRequestError(true)
        }
    }

  return (
    <div className="w-100 h-screen bg-primary-500">
        <div className="w-4/5 h-full m-auto py-16 flex">
            {isLoading &&
                <div className="w-full h-full text-center flex justify-center items-center">
                    <div className="loading" id="loadingDots">Loading...</div>
                </div>
            }
            {devices.length !== 0  &&
                <div className="w-full flex flex-col items-center mt-16 gap-8">
                    {devices.map((device, index)=>(
                        <DeviceTile device={device} key={index}/>
                    ))}
                </div>
            }
            {requestError &&
                <div className="w-full text-center mt-8">
                    <span>There was an error. Please try again...</span>
                </div>
            }
        </div>
    </div>
  )
}

export default Device