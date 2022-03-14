import React from "react";
import Article from "./Article/Article";
import PropTypes from "prop-types";

class News extends React.Component {
  render() {
    const { news } = this.props;
    if (news.length) {
      const News = this.props.news.map((newsItem) => {
        return <Article key={newsItem.id} newsItem={newsItem} />;
      });

      return (
        <div className="news_wrapper">
          {News}
          <strong onClick={this.onNewsClickCounter} className="news__count">
            Всего новостей: {this.props.news.length}
          </strong>
        </div>
      );
    } else
      return (
        <React.Fragment>
          <p>Новостей нет</p>
        </React.Fragment>
      );
  }
}

News.propTypes = {
  news: PropTypes.array.isRequired,
};

export default News;
