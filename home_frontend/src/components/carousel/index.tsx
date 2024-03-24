import { useEffect, useState } from "react"
import useMediaQuery from "../../hooks/useMediaQuery"
import { Image } from "../../common/classes"


type Props = {
  images:Image[]
  error: boolean
}

const Carousel = ({images, error}: Props) => {
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
        {(error || !images.length) &&
            <>
              <div className={"w-100 py-40"}>
                <div className={"w-4/5 m-auto flex justify-center"}>
                  <span className={"text-2xl font-bold"}>There is a problem loading pictures...</span>
                </div>
              </div>
            </>
        }
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