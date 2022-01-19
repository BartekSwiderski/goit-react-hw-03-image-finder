import "./App.css";
import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Modal from "./components/Modal";
import styles from "./components/Gallery.module.css";
const API_KEY = "23744712-142a310b592b893afddd0f0d4";
class App extends Component {
  state = {
    images: [],
    searchKey: "",
    page: 1,
    largeImg: "",
    isModalOpen: false,
  };

  fetchImages = (searchQuery, page) => {
    try {
      fetch(
        `https://pixabay.com/api/?&q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((data) => data.json())
        .then((data) => {
          this.state.page === 1
            ? this.setState({
                images: data.hits,
                page: page + 1,
              })
            : this.setState({
                images: [...this.state.images, ...data.hits],
                page: page + 1,
              });
        });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (e) => {
    this.setState({ page: 1 });
    const value = e.target.value;
    this.setState({ searchKey: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchImages(this.state.searchKey, this.state.page);
  };

  loadMore = (e) => {
    e.preventDefault();
    this.fetchImages(this.state.searchKey, this.state.page);
  };

  openModalWindow = (e) => {
    if (e.target.nodeName === "IMG") {
      this.setState({
        largeImg: e.target.dataset.img,
        isModalOpen: true,
      });
    }
  };
  closeModalWithEsc = (e) => {
    if (e.code === "Escape") {
      this.setState({ isModalOpen: false });
    }
  };

  closeModal = (e) => {
    if (e.target.nodeName !== "IMG") {
      this.setState({ isModalOpen: false });
    }
  };

  componentDidMount() {
    this.fetchImages(this.state.searchKey, this.state.page);
  }

  render() {
    window.addEventListener("keydown", this.closeModalWithEsc);
    return (
      <div>
        <Searchbar
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        {this.state.images.length !== 0 ? (
          <div>
            {" "}
            <ImageGallery
              images={this.state.images}
              openModalWindow={this.openModalWindow}
            />
            <div className={styles.btn}>
              <Button loadMore={this.loadMore} />
            </div>
          </div>
        ) : (
          <div className={styles.alert}>
            {" "}
            <span className={styles.alertText}>No images ಥ_ಥ</span>
          </div>
        )}

        {this.state.isModalOpen === true ? (
          <Modal closeModal={this.closeModal} largeImg={this.state.largeImg} />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default App;
