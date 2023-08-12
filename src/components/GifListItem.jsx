
import PropTypes from 'prop-types';

const GifListItem = ({title,url}) => {
  return (
      <div className={'card'}>
          <img
            src={url}
            alt={title}
          />
        <p>{title}</p>
      </div>
  );
};

GifListItem.propTypes = {
  title:PropTypes.string.isRequired,
  url:PropTypes.string.isRequired
};

export default GifListItem;