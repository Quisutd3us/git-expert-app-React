import {useState} from 'react';
import PropTypes from 'prop-types';

const SearchCategory = ({onNewCategory}) => {
  /*define state for category*/
  const [category, setCategory] = useState('')
  /*add Category*/
  const handleSubmitCategory = (e) => {
    e.preventDefault()

    setCategory('')
    onNewCategory(category)
  }
  const handleInputCategory = (e) => {
    setCategory(e.target.value)
  }
  return (
      <div>
        <form
            onSubmit={handleSubmitCategory}
            aria-label="testingHook"
        >
          <label htmlFor="inputCategory">Type the new Category (4 to 8 characters):</label>
          <input
              onChange={handleInputCategory}
              value={category}
              type={"text"}
              id={"inputCategory"}
              name={"inputCategory"}
              placeholder={'Search Gifs and press ENTER'}
              required={true}
              minLength={3}
              maxLength={18}/>
        </form>
      </div>
  );
};

SearchCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
};

export default SearchCategory;