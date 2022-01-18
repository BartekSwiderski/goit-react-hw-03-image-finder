import React, { useState } from "react"
import styles from "./ImageGallery.module.css"
import ImageGalleryItems from "./../ImageGalleryItems/ImageGalleryItems"
import Modal from "../Modal/Modal"

const ImageGallery = ({ images }) => {
  const [lightbox, setLightbox] = useState({ visibility: false, imgUrl: "" })

  // const sleep = (milliseconds) => {
  //   return new Promise((resolve) => setTimeout(resolve, milliseconds))
  // }

  // const wait = async (milliseconds = 2000) => {
  //   console.log("slp", sleep(milliseconds))
  //   await sleep(milliseconds)
  // }

  // useEffect(() => wait(2000))

  return (
    <ul className={styles.ImageGallery}>
      <ImageGalleryItems images={images} setLightbox={setLightbox} />
      <Modal
        lightbox={lightbox}
        setLightbox={setLightbox}
        onKeyDown={(e) => alert("dance")}
      />
    </ul>
  )
}

export default ImageGallery
