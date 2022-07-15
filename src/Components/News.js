import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spiner from "./Spiner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const Updatenews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=47d89b93215a429bb69f52fee9ce0d6a&page=${props.page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedata = await data.json();
    setArticles(parsedata.articles);
    setTotalResults(parsedata.totalResults);
    setLoading(false);
  };
  useEffect(() => {
    return () => {
      document.title = `${props.category} - News`;
      Updatenews();
    };
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=47d89b93215a429bb69f52fee9ce0d6a&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    setArticles(articles.concat(parsedata.articles));
    setTotalResults(parsedata.totalResults);
  };
  return (
    <>
      <h1 className="text-center mb-3" style={{ margin: "70px" }}>
        Top {capitalize(props.category)} News HeadLines
      </h1>
      {loading && <Spiner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spiner />}
      >
        <div className="container my-1">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imgUrl={element.urlToImage}
                    Newsurl={element.url}
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

News.defautprops = {
  country: "in",
  pageSize: 1,
  category: "general",
};
News.PropsTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
