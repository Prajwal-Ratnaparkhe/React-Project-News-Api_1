import React, { useEffect, useState } from "react";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Search from "./Search";

const News = (props) => { 
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  /*
  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5395a7ba886a47cfa2df671648bdc395&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);

    let parsedData = await data.json();

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };
*/

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - News`;
    // updateNews();
    fetchMoreData();
    setLoading(false);
  }, []);

  const fetchMoreData = async () => {
   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5395a7ba886a47cfa2df671648bdc395&page=${page}&pageSize=${props.pageSize}`;

  // const url=`https://gnews.io/api/v4/top-headlines?&lang=en&country=${props.country}&token=4d5f3a359c3cd76ddcbc168c020f4296&page=${page}&max=${props.pageSize}`;
    setPage(page + 1);
    setLoading(true);
    let data = await fetch(url);

    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  return (
    <>
   { /*<Search/>*/}
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "100px" }}
      >
        {" "}
        Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles?.length}
        next={fetchMoreData}
        hasMore={articles?.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles?.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;