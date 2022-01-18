import styles from "./Modal.module.css"
import React, { useEffect } from "react"

const Modal = ({ lightbox, setLightbox }) => {
  const { visibility, imgUrl } = lightbox

  useEffect(() => {
    const onEsc = (e) => (e.code === "Escape" ? modalClose() : "")

    document.addEventListener("keydown", onEsc)

    return () => document.removeEventListener("keydown", onEsc)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const modalClose = () => setLightbox({ visibility: false, imgUrl: "" })
  return visibility ? (
    <div className={styles.Overlay} onClick={modalClose}>
      <div className={styles.Modal}>
        <img src={imgUrl} alt="" />
      </div>
    </div>
  ) : (
    <></>
  )
}

export default Modal
