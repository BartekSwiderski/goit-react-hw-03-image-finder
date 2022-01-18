import React, { Component } from "react";
import styles from "./Gallery.module.css";

class ImageGalleryItem extends Component {
  render() {
    const { id, webformatURL, largeImageURL } = this.props;
    return (
      <li id={id}>
        <img
          className={styles.ImageGalleryItem}
          src={webformatURL}
          alt="opis obrazka"
          data-img={largeImageURL}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
