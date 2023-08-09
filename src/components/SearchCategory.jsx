import {useState} from 'react';
import PropTypes from 'prop-types';

const SearchCategory = ({setCategories}) => {
  /*define state for category*/
  const [category, setCategory] = useState('')
  /*add Category*/
  const handleSubmitCategory = (e) => {
    e.preventDefault()
    setCategories(categories => [category,...categories])
    setCategory('')
  }
  const handleInputCategory = (e) => {
    setCategory(e.target.value)
  }
  return (
      <div>
        <form
            onSubmit={handleSubmitCategory}
        >
          <label htmlFor="inputCategory">Type the new Category (4 to 8 characters):</label>
          <input
              onChange={handleInputCategory}
              value={category}
              type={"text"}
              id={"inputCategory"}
              name={"inputCategory"}
              placeholder={'Search Gifs'}
              required={true}
              minLength={3}
              maxLength={18}/>
          <button>Add Category</button>
        </form>
      </div>
  );
};

SearchCategory.propTypes = {
  setCategories: PropTypes.func
};

export default SearchCategory;