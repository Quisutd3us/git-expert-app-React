
import {useEffect, useState} from "react";
import {getGifs} from "../helpers/getGifs.js";
export const UseFetchGifs = (category) => {

  /*define states*/

  const [images, setImages] = useState([])
  const [isLoading,setIsLoading] =useState(true)

  /*Retrieve Gifs */
  const getImages = async () => {
    const newImages = await getGifs(category)
    setImages(newImages)
    setIsLoading(false)
  }

  useEffect(() => {
    getImages()
  }, [])

  return {
    images,
    isLoading
  };
};
