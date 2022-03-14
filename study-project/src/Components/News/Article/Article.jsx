import React from "react";
import PropTypes from "prop-types";

class Article extends React.Component {
  state = {
    visibility: false,
  };

  onClickShowFullText = (e) => {
    e.preventDefault();
    this.setState({ visibility: true });
  };

  render() {
    const { newsItem } = this.props;

    return (
      <div className="news">
        <p className="news__author">{newsItem.author}</p>
        <p className="news__text">{newsItem.text}</p>
        {!this.state.visibility ? (
          <a
            onClick={this.onClickShowFullText}
            href="#"
            className="news__readmore"
          >
            Подробнее
          </a>
        ) : (
          <p className="news__big-text">{newsItem.bigText}</p>
        )}
      </div>
    );
  }
}

Article.propTypes = {
  newsItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    bigText: PropTypes.string.isRequired,
  }),
};

export default Article;
