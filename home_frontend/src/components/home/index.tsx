import { useState, useEffect } from "react"
import { Image } from "../../common/classes"
import Carousel from "../carousel"
type Props = {}

const Home = (props: Props) => {

  const [images, setImages] = useState<Image[]>([])


  const requesImages = async () =>{
    try{
      let response = await fetch("http://localhost:8000/api/images")
      let jsonData = await response.json()
      setImages(jsonData)
    }
    catch (error){
      console.log("error")
    }
  }

  useEffect(()=>{
    requesImages()
  },[])

  return (
    <div className="w-100">
    <Carousel images={images}/>
      <div className="w-100 bg-primary-500 py-40">
        <div className="m-auto w-4/5">
          <div>
            <span className="text-2xl font-bold">Konrad jest z <span id="warszawa">Warszawy</span></span>
          </div>
        </div>
      </div>
      <div className="w-full bg-primary-100">
        <div className="m-auto w-4/5 py-40">
          <div className="text-xl text-center">
            <span>Tu kiedyś coś będzie...</span>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Home