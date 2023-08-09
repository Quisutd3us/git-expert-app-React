import {useState} from "react";

import SearchCategory from "./SearchCategory.jsx";

const GitExpertApp = () => {
  /*define state for GIFS categories*/
  const [categories, setCategories] = useState(['Dragon Ball', 'comics', 'food', 'sports'])

  return (
      <>
        {/*title*/}
        <h1>Git Expert App</h1>
        {/* Component Search Category*/}
        <SearchCategory
            categories={categories}
            setCategories={setCategories}
        />

        <ol>
          {
            categories.map((category,index) => <li key={index}>{category}</li>)
          }
        </ol>
        {/*list gifs*/}

        {/*gif*/}
      </>
  );
};


export default GitExpertApp;