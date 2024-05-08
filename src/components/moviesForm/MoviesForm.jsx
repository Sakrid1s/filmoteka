import css from './MoviesForm.module.css';

const MoviesForm = ({ setSearchParams }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const formValue = form.elements.search.value;

    if (formValue.trim() === '') {
      alert('Form field must be filled in!');
      form.reset();
      return;
    }

    setSearchParams({ query: formValue });
    form.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movie..."
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
    </div>
  );
};

export default MoviesForm;
