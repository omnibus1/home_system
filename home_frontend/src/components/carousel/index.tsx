import { useEffect, useState } from "react"
import useMediaQuery from "../../hooks/useMediaQuery"
import { Image } from "../../common/classes"


type Props = {
  images:Image[]
}

const Carousel = ({images}: Props) => {
  const smallScreen:boolean = useMediaQuery("(max-width: 640px")

  const [currentIndex, setCurrentIndex] = useState<number>(0)


  useEffect(() => {
    setTimeout(()=> updateIndex(), 10000); 
  }, [currentIndex]);
  
  const updateIndex= () => {
    let nextIdx = currentIndex === images.length-1 ? 0 : currentIndex + 1
    setCurrentIndex(nextIdx)
  }

  return (
      <div className="carousel">
        {!images.length && <div>ładuje sie</div>}
        {Array.from({length: images.length}, (_, i) =>(
          <>
          {smallScreen ? 
          (
          <img src={images[i].small_image} className={`w-full h-full ${i===currentIndex?"":"hidden"}`}></img>
          ) : (
            <img src={images[i].image} className={`w-full h-full ${i===currentIndex?"":"hidden"}`}></img>
          )}
          </>
        ))}
      </div>
  )
}

export default Carousel