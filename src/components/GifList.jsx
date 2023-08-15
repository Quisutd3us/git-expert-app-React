import PropTypes from 'prop-types';
/*components*/
import GifListItem from "./GifListItem.jsx";
/*custom hooks*/
import {UseFetchGifs} from "../hooks/useFetchGifs.js";

const GifList = ({category}) => {
  const {images, isLoading} = UseFetchGifs(category);

  return (
      <>
        {isLoading && <h2>IsLoading...</h2>}
        <h3>{category}</h3>
        <div className="card-grid">
          {
            images.map((image) => (
                <GifListItem
                    key={image.id}
                    {...image}
                />
            ))
          }

        </div>
      </>

  );
};

GifList.propTypes = {
  category: PropTypes.string.isRequired
};

export default GifList;