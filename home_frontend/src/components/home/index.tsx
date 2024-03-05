import { useState, useEffect } from "react"
import { Image } from "../../common/classes"
import Carousel from "../carousel"
type Props = {}

const Home = (props: Props) => {

  const [images, setImages] = useState<Image[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const requesImages = async () =>{
    try{
      let response = await fetch("http://localhost:8000/api/images")
      let jsonData = await response.json()
      setImages(jsonData)
      setTimeout(() => setIsLoading(false), 2000)
    }
    catch (error){
      setIsLoading(false)
      console.log("error")
    }
  }

  useEffect(() => {
    isLoading? document.body.style.overflow = "hidden": document.body.style.overflow = ""
  }, [isLoading]);

  useEffect(()=>{
    requesImages()
  },[])

  return (
    <div className="w-100 overflow-hidden relative">
      <>
        <div className={`w-screen h-screen bg-primary-300 opacity-100 z-25 ${isLoading?"visible":"translate-out"} 
        transition-all absolute duration-700`}>
        </div>
      </>

    <Carousel images={images}/>
      <div className="w-100 bg-primary-500 py-40">
        <div className="m-auto w-4/5">
          <div>
            <span className="text-2xl font-bold me-3">Konrad jest z </span>
            <span id="warszawa">Warszawy</span>
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