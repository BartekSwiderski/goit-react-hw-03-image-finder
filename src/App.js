import "./App.css"
import React, { useState, useEffect } from "react"
import Button from "./components/Button/Button"
import Loader from "./components/Loader/Loader"
import Searchbar from "./components/Searchbar/Searchbar"
import ImageGallery from "./components/ImageGallery/ImageGallery"

const API_KEY = "24742992-acb349cfcfd15309f04f38c87"

const App = () => {
  const [images, setImages] = useState([])
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [time, setTime] = useState(1000)

  useEffect(() => {
    setRawImages(search)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search])

  const fetchPixabay = async (search) => {
    let apiResponse = await fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${search}&page=${page}&image_type=photo&pretty=true&per_page=12&image_type=photo&orientation=horizontal`
    )
    return apiResponse.json()
  }

  const setRawImages = async (search) => {
    await fetchPixabay(search).then((images) => {
      setImages(
        images.hits.map(({ id, webformatURL, largeImageURL }) => ({
          id,
          webformatURL,
          largeImageURL,
        }))
      )
    })
    setSearch(search)
  }

  const searchImages = async (search) => {
    setPage(1)
    await setRawImages(search)
  }

  const loaderOf = () => {
    setTimeout(() => setTime(0), time)
  }

  const loaderOn = () => {
    setTimeout(() => setTime(1000), time)
  }

  return (
    <div className="App">
      <Searchbar onSubmit={searchImages} />
      <ImageGallery images={images}></ImageGallery>
      {images.length ? (
        <>
          {time ? (
            <Loader timeout={time} loaderOf={loaderOf} />
          ) : (
            <Button
              onClick={() => {
                setPage(page + 1)
                loaderOn()
              }}
            >
              Load more
            </Button>
          )}
        </>
      ) : (
        <span style={{ margin: "auto", fontSize: "40px" }}>😞No Images😞</span>
      )}
    </div>
  )
}

export default App
