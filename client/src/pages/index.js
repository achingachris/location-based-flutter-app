/* eslint-disable @next/next/no-img-element */
import Categories from '@/components/Categories'
import InfoSideBar from '@/components/InfoSideBar'
import NewsCard from '@/components/NewsCard'
import SearchBar from '@/components/SearchBar'

const index = ({ news }) => {
  const guardian_news = news?.response?.results || [];

  console.log(news)
  console.log(guardian_news)

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
              {/* <NewsCard /> */}
              {guardian_news.map((article, index) => (
                <NewsCard
                  key={index}
                  title={article.webTitle}
                  description={article.fields?.bodyText}
                  url={article.webUrl}
                  date={article.webPublicationDate}
                />
              ))}
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

// get data from the guardian API
export const getServerSideProps = async () => {
  try {
    const apiKey = process.env.THE_GUARDIAN_API_KEY;
    const response = await fetch(
      `https://content.guardianapis.com/search?api-key=${apiKey}`
    );
    const news = await response.json();
    return {
      props: {
        news,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        news: null,
      },
    };
  }
};
