const NewsCard = () => {
  return (
    <div className='col-xl-6 col-md-6 mb-4'>
      <div className='card mb-4'>
        <div className='card-body'>
          <div className='small text-muted'>January 1, 2023</div>
          <h2 className='card-title h4'>Post Title</h2>
          <p className='card-text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            aliquid atque, nulla.
          </p>
          <a className='btn btn-primary' href='#!'>
            Read more →
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
