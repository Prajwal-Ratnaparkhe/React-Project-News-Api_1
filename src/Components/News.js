import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import Search from "./Search";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState(null); // Dynamic pagination token
  const [hasMore, setHasMore] = useState(true); // Control Load More button
  const [error, setError] = useState(""); // State to track errors

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  // Helper function to filter duplicates by title
  const filterUniqueArticles = (articles) => {
    const seenTitles = new Set();
    return articles.filter((article) => {
      if (!article.title || seenTitles.has(article.title)) {
        return false;
      }
      seenTitles.add(article.title);
      return true;
    });
  };

  useEffect(() => {
    // Reset state when category or country changes
    setArticles([]);
    setNextPage(null);
    setHasMore(true);
    setError(""); // Clear previous errors
    fetchInitialData();
    document.title = `${capitalizeFirstLetter(props.category)} - News`;
  }, [props.category, props.country]); // run whenever category or country changes
  
  // Fetch initial data for the first time
  const fetchInitialData = async () => {
    setLoading(true);
    const url = `https://newsdata.io/api/1/latest?apikey=pub_43280b6ce8d504cff6bd91594528de94afc5&country=${props.country}&category=${props.category}&language=en,hi,mr`;

    try {
      const response = await fetch(url);
      const parsedData = await response.json();

      if (parsedData.message && parsedData.message.includes("daily limit")) {
        setError("You have reached the daily API limit. Please try again later.");
        setLoading(false);
        return;
      }

      if (Array.isArray(parsedData.results)) {
        const uniqueArticles = filterUniqueArticles(parsedData.results);
        setArticles(uniqueArticles);
        setNextPage(parsedData.nextPage || null);
        setHasMore(!!parsedData.nextPage);
      } else {
        setHasMore(false);
        console.warn("No results or invalid format.");
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      setHasMore(false);
    }

    setLoading(false);
  };

  // Handle loading more articles
  const handleLoadMore = async () => {
    if (!nextPage) return;

    setLoading(true);
    const url = `https://newsdata.io/api/1/latest?apikey=pub_43280b6ce8d504cff6bd91594528de94afc5&country=${props.country}&category=${props.category}&page=${nextPage}&language=en,hi,mr`;

    try {
      const response = await fetch(url);
      const parsedData = await response.json();

      if (parsedData.message && parsedData.message.includes("daily limit")) {
        setError("You have reached the daily API limit. Please try again later.");
        setLoading(false);
        return;
      }

      if (Array.isArray(parsedData.results)) {
        const newArticles = filterUniqueArticles(parsedData.results);
        setArticles((prev) => {
          const combined = [...prev, ...newArticles];
          return filterUniqueArticles(combined); // remove any cross-page duplicates
        });
        setNextPage(parsedData.nextPage || null);
        setHasMore(!!parsedData.nextPage);
      } else {
        setHasMore(false);
        console.warn("No more pages or invalid data.");
      }
    } catch (error) {
      console.error("Error loading more news:", error);
      setHasMore(false);
    }

    setLoading(false);
  };

  return (
    <>
      <Search />
      <h1 className="text-center">{capitalizeFirstLetter(props.category)} Headlines</h1>

      {loading && <Spinner />}

      {error && (
        <div className="alert alert-danger text-center">
          {error}
        </div>
      )}

      <div className="container">
        <div className="row">
          {articles.map((element, index) => {
            if (!element || !element.title || !element.link) return null;
            return (
              <div className="col-md-4" key={`${element.link}-${index}`}>
                <NewsItem
                  title={element.title}
                  description={element.description || ""}
                  imageUrl={element.image_url || ""}
                  newsUrl={element.link}
                  author={
                    Array.isArray(element.creator)
                      ? element.creator[0]
                      : element.creator || "Unknown"
                  }
                  date={element.pubDate || "Unknown"}
                  source={element.source_name || element.source_id || "Unknown"}
                />
              </div>
            );
          })}
        </div>

        {!loading && hasMore && (
          <div className="text-center my-3">
            <button className="btn btn-primary" onClick={handleLoadMore}>
              Load More
            </button>
          </div>
        )}
      </div>
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
