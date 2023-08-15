import {useState} from "react";

import SearchCategory from "./components/SearchCategory.jsx";
import GifList from "./components/GifList.jsx";

/*import helper functions*/

const GifExpertApp = () => {

  const [message, setMessage] = useState('')
  /*define state for GIFS categories*/
  const [categories, setCategories] = useState(['Dragon Ball'])
  /*add Category*/
  const onAddCategory = (category) => {
    const isRepeat = categories.filter(categoryState => categoryState === category)
    if (isRepeat.length > 0) {
      setMessage('The Category exist...')
      return
    }
    setCategories([category.trim(), ...categories])
    setMessage('')
  }

  return (
      <>
        {/*title*/}
        <h1>Git Expert App</h1>
        {/* Component Search Category*/}
        <SearchCategory
            onNewCategory={(value) => onAddCategory(value)}
        />
        {/*Rendering git list*/}
        {
          categories.map(category =>
              (
                  <GifList
                      key={category}
                      category={category}
                  />
              )
          )
        }
        {/*Messages*/}
        {
          message ?
              (
                  <h5>{message}</h5>
              ) :
              (
                  <h5>{''}</h5>
              )
        }

      </>
  );
};


export default GifExpertApp;