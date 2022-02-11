import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";


function Search() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const url = `https://newsapi.org/v2/everything?q=${search}&searchIn=title&language=en&sortBy=relevancy&apiKey=67a1214ec92345a9a704e89cae5a1b1f&page=1&pageSize=8`;
    setPage(page + 1);
    setLoading(true);
    const response = await fetch(url);
    const resJson = await response.json();
    console.log(response);
    setArticles(resJson.articles);
    setLoading(false);
  };

  return (
    <>
      <div>
        <div className="container" style={{ marginTop: "60px" }}>
          <div className="row height d-flex justify-content-center align-items-center">
            <div className="col-md-8">
              <div className="search">
                {" "}
                <i className="fa fa-search"></i>{" "}
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search News or Articles and click search button"
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                />{" "}
                <button className="btn btn-primary" onClick={fetchApi}>
                  Search
                </button>{" "}
              </div>
            </div>
          </div>
        </div>

        {loading && <Spinner />}

        <div className="container">
          <div className="row">
            {articles?.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : " "}
                    description={
                      element.description ? element.description : " "
                    }
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
      </div>
    </>
  );
}

export default Search;
