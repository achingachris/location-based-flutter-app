/* eslint-disable @next/next/no-img-element */
import Categories from '@/components/Categories'
import InfoSideBar from '@/components/InfoSideBar'
import NewsCard from '@/components/NewsCard'
import SearchBar from '@/components/SearchBar'

const index = () => {
  return (
    <>
      {/* Page header with logo and tagline*/}
      <header className='py-5 bg-light border-bottom mb-4'>
        <div className='container'>
          <div className='text-center my-5'>
            <h1 className='fw-bolder'>NewsCenter</h1>
            <p className='lead mb-0'>Get All News, New and Updated For You!</p>
          </div>
        </div>
      </header>
      <div className='container'>
        <SearchBar />
        <div className='row'>
          {/* Blog entries*/}
          <div className='col-lg-8'>
            {/* Nested row for non-featured blog posts*/}
            <dic className='row'>
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
            </dic>
          </div>
          {/* Side widgets*/}
          <div className='col-lg-4'>
            {/* Categories widget*/}
            <Categories />
            {/* Side widget*/}
            <InfoSideBar />
          </div>
        </div>
      </div>
      {/* Footer*/}
    </>
  )
}

export default index
