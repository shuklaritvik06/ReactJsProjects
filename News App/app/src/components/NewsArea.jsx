import React, { Component } from "react";
import { NewsApi } from "../api/NewsApi";
import { NewsContext } from "../contexts/NewsContext";
import NewsCard from "./NewsCard";

class NewsArea extends Component {
  static contextType = NewsContext;
  componentDidMount() {
    const url = `/top-headlines/?category=${this.props.category}&country=in`;
    NewsApi.get(url).then((result) => {
      this.context.setNews(result.data.articles);
    });
  }
  render() {
    return (
      <div className="mt-5 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:place-items-center">
        {this.context.news.map((article) => {
          return (
            <NewsCard
              image={article?.urlToImage}
              title={article?.title}
              author={article?.author}
              source={article?.source?.name}
              url={article?.url}
              description={article?.description}
              key={article?.title}
            />
          );
        })}
      </div>
    );
  }
}

export default NewsArea;
