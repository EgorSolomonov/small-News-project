import "./App.css";
import React from "react";
import AddNews from "./Components/News/Addnews/AddNews";
import News from "./Components/News/News";

class App extends React.Component {
  state = {
    news: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    let response = await fetch("http://localhost:3000/newsData/newsData.json");
    let result = await response.json();
    let newsData = await result;
    this.setState({ loading: false, news: newsData });
  }

  static getDerivedStateFromProps(props, state) {
    let filteredNews = [...state.news];

    filteredNews.forEach((newsItem) => {
      if (newsItem.bigText.toLowerCase().includes("pubg") === true) {
        return (newsItem.bigText = "Спам");
      }
    });
    return { news: filteredNews };
  }

  onAddNewsButton = (newNews) => {
    this.setState({
      news: [newNews, ...this.state.news],
    });
  };

  render() {
    if (!this.state.loading) {
      return (
        <React.Fragment>
          <AddNews onAddNewsButton={this.onAddNewsButton} />
          <h3>Новости</h3>
          <News news={this.state.news} />
        </React.Fragment>
      );
    } else return <h3>Идет загрузка страницы...</h3>;
  }
}

export default App;
