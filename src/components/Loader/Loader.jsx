import React from "react"
import Loaders from "react-loader-spinner"
import styles from "./Loader.module.css"

const Loader = ({ timeout, loaderOf }) => {
  loaderOf()
  return (
    <Loaders
      className={styles.Loader}
      type="Hearts"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={timeout} // secs
    />
  )
}

export default Loader
