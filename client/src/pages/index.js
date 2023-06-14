/* eslint-disable @next/next/no-img-element */
import Categories from '@/components/Categories'
import InfoSideBar from '@/components/InfoSideBar'
import NewsCard from '@/components/NewsCard'
import SearchBar from '@/components/SearchBar'

const index = ({ GuardianNews, newsApiNews, newsHeadlinesData }) => {
  const guardian_news = GuardianNews?.response?.results || [];
  const newsApiArticles = newsApiNews?.articles || [];
  const newsHeadlines = newsHeadlinesData?. articles || [];

  // console.log(GuardianNews)
  // console.log(guardian_news)
  // console.log(newsApiNews)
  // console.log(newsHeadlinesData)
  console.log(newsHeadlines)

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
              {/* The Guardian */}
              {/* {guardian_news.map((article, index) => (
                <NewsCard
                  key={index}
                  title={article.webTitle}
                  description={article.fields?.bodyText}
                  url={article.webUrl}
                  date={article.webPublicationDate}
                />
              ))} */}

              {/* NewsAPI */}
              {/* {newsApiArticles.map((article, index) => (
                <NewsCard
                  key={`newsapi-${index}`}
                  title={article.title}
                  description={article.description}
                  url={article.url}
                  date={article.publishedAt}
                />
              ))} */}

              {/* NewsAPI Headline */}
              {newsHeadlines.map((article, index) => (
                <NewsCard
                  key={`newsapi-${index}`}
                  title={article.title}
                  description={article.description}
                  url={article.url}
                  date={article.publishedAt}
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
  // Get News from The Guardian API
  const apiKey = process.env.THE_GUARDIAN_API_KEY;
  const response = await fetch(
    `https://content.guardianapis.com/search?api-key=${apiKey}`
  );
  const GuardianNews = await response.json();


  // Get news from newsapi
  const newsApiKey = process.env.NEWS_API_KEY;
  const newsApiResponse = await fetch(
    `https://newsapi.org/v2/everything?q=apple`,
    {
      headers: {
        'X-Api-Key': newsApiKey,
      },
    }
  );
  const newsApiNews = await newsApiResponse.json();

  // top headlines from newsAPI
  const newsHeadlines = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us`,
    {
      headers: {
        'X-Api-Key': newsApiKey,
      },
    }
  );
  const newsHeadlinesData = await newsHeadlines.json()

  return {
    props: {
      GuardianNews,
      newsApiNews,
      newsHeadlinesData
    },
  };
};
