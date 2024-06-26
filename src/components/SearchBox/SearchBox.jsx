import css from "./SearchBox.module.css";

function SearchBox({ inputValue, handleChange }) {
  return (
    <div className={css.searchBox}>
      <label className={css.label}>Find contact by name</label>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className={css.input}
      />
    </div>
  );
}

export default SearchBox;
