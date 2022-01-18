import sytles from "./ImageGalleryItems.module.css"
import React from "react"

const ImageGalleryItems = ({ images, setLightbox }) => {
  return images.map(({ id, webformatURL, largeImageURL }) => {
    return (
      <li className={sytles.ImageGalleryItem} key={id}>
        <img
          className={sytles.ImageGalleryItem_image}
          src={webformatURL}
          alt=""
          onClick={() =>
            setLightbox({ visibility: true, imgUrl: largeImageURL })
          }
        />
      </li>
    )
  })
}

export default ImageGalleryItems
