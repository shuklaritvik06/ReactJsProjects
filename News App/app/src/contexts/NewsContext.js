import { createContext, Component } from "react";

export const NewsContext = createContext();
export const NewsConsumer = NewsContext.Consumer;

export default class NewsProvider extends Component {
  constructor(props){
    super(props);
    this.state = {
      news: [],
      newsDetails: {},
      loading: true,
      setNews: this.setNews.bind(this),
    };
  }
  setNews= (news) => {
    this.setState({
      news,
      loading: false
    });
  }
  render() {
    return (
      <NewsContext.Provider value={{...this.state}}>
        {this.props.children}
      </NewsContext.Provider>
    );
  }
}
