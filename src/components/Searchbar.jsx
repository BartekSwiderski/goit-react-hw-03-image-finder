import React from "react";
import styles from "./Gallery.module.css";

const SearchBar = ({ handleChange, handleSubmit }) => {
  return (
    <header className={styles.Searchbar}>
      <form onSubmit={handleSubmit} className={styles.SearchForm}>
        <button type="submit" className={styles.SearchBtn}>
          <img
            width="22px"
            src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
          />
        </button>

        <input
          className={styles.SearchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default SearchBar;
