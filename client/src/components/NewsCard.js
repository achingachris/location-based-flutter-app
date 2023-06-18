import PropTypes from 'prop-types';

const NewsCard = ({ title, description, url, date }) => {
  return (
    <div className='col-xl-6 col-md-6 mb-4'>
      <div className='card mb-4'>
        <div className='card-body'>
          <div className='small text-muted'>{date}</div>
          <h2 className='card-title h4'>{title}</h2>
          <p className='card-text'>
            {description}
          </p>
          <a className='btn btn-primary' href={url}>
            Read more →
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsCard

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

NewsCard.defaultProps = {
  title: 'News Title',
  description: 'news description goes here',
  url: '/',
  date: '06-14-2023',
};

