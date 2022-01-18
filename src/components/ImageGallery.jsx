import React, { Component } from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import style from "./Gallery.module.css";

class ImageGallery extends Component {
  render() {
    const { images, openModalWindow } = this.props;
    return (
      <ul className={style.ImageGallery} onClick={openModalWindow}>
        <>
          {images.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              id={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
            />
          ))}
        </>
      </ul>
    );
  }
}

export default ImageGallery;
