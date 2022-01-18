import styles from "./Searchbar.module.css"
import Button from "./../Button/Button"

const Searchbar = ({ onSubmit }) => {
  const findImgs = (e) => {
    e.preventDefault()
    onSubmit(e.currentTarget.elements.search.value)
  }

  return (
    <header>
      <form className={styles.Searchbar} onSubmit={findImgs}>
        <Button className={styles.SearchForm_button}>
          <span className={styles.SearchForm_button_label}>Search</span>
        </Button>

        <input
          className={styles.SearchForm_input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  )
}

export default Searchbar
