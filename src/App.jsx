import React, { Component } from "react";

import Loader from "react-loader-spinner";
import SearchBar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Modal from "./components/Modal";
const API_KEY = "23744712-142a310b592b893afddd0f0d4";
class App extends Component {
  state = {
    images: [],
    searchBy: "",
    page: 1,
    isLoaded: false,
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
                isLoaded: true,
              })
            : this.setState({
                images: [...this.state.images, ...data.hits],
                page: page + 1,
                isLoaded: true,
              });
        })
        .finally(() => this.setState({ isLoaded: true }));
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (e) => {
    this.setState({ page: 1 });
    const value = e.target.value;
    this.setState({ searchBy: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchImages(this.state.searchBy, this.state.page);
  };

  loadMore = (e) => {
    e.preventDefault();
    console.log(this.state.page);
    this.fetchImages(this.state.searchBy, this.state.page);
  };

  openModalWindow = (e) => {
    if (e.target.nodeName !== "IMG") {
      return;
    }
    this.setState({
      largeImg: e.target.dataset.img,
      isModalOpen: true,
    });
  };
  closeModalWithEsc = (e) => {
    if (e.code === "Escape") {
      this.setState({ isModalOpen: false });
    }
  };

  closeModal = (e) => {
    if (e.target.nodeName === "IMG") {
      return;
    }
    this.setState({ isModalOpen: false });
  };

  componentDidMount() {
    this.fetchImages(this.state.searchBy, this.state.page);
  }

  render() {
    window.addEventListener("keydown", this.closeModalWithEsc);

    return (
      <div>
        <SearchBar
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        {this.state.isLoaded === true ? (
          <ImageGallery
            images={this.state.images}
            openModalWindow={this.openModalWindow}
          />
        ) : (
          <Loader
            className="wrapper"
            type="Rings"
            color="#00BFFF"
            height={80}
            width={80}
          />
        )}
        <Button loadMore={this.loadMore} />
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
