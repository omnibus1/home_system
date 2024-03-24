import { useState, useEffect } from "react"
import { Image } from "../../common/classes"
import Carousel from "../carousel"

const Home = () => {
  const api_url = import.meta.env.VITE_API_URL || "localhost"
  const [images, setImages] = useState<Image[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  const requestImages = async () =>{
    fetch(`http://${api_url}:8000/api/images`)
        .then(response =>{
          if(response.ok){
            return response.json()
          }
          throw new Error("Error while fetching")
        })
        .then(data=>{
          setImages(data)
          setIsLoading(false)
        })
        .catch(() =>{
          setIsLoading(false)
          setError(true)
        })
  }

  useEffect(() => {
    isLoading? document.body.style.overflow = "hidden": document.body.style.overflow = ""
  }, [isLoading]);

  useEffect(()=>{
    requestImages()
  },[])

  return (
    <div className="w-100 overflow-hidden relative">
      <>
        <div className={`w-screen h-screen bg-primary-300 opacity-100 z-25 ${isLoading?"visible":"translate-out"} 
        transition-all absolute duration-700`}>
        </div>
      </>

    <Carousel images={images} error={error}/>
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