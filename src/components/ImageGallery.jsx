import React, { Component } from "react";
import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "./ImageGalleryItem";

class ImageGallery extends Component {
  render() {
    const { images, openModalWindow } = this.props;
    return (
      <ul className={styles.ImageGallery} onClick={openModalWindow}>
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
