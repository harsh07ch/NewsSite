import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

    articles = [];

    constructor() {
        super();
        this.state = {
          articles: this.articles,
          loading: true,
          page: 1,
          totalResults: 0
        }
      }

    async componentDidMount() {
        this.Update();
    }

    async Update() {
        this.setState({loading: true})
        let link = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=db4f748d62ab4153badb568b024803fd&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(link);
        let pdata = await data.json();
        this.setState({articles: pdata.articles,
            totalResults: pdata.totalResults,
            loading: false
        })
    }

    fetchMoreData = async () => {
        this.setState({page: this.state.page+1});
        let link = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=db4f748d62ab4153badb568b024803fd&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(link);
        let pdata = await data.json();
        this.setState({articles: this.state.articles.concat(pdata.articles),
            totalResults: pdata.totalResults,
            loading: false
        })
      };

    // handleNext = async ()=> {
    //         this.setState({page: this.state.page+1});
    //         this.Update();
    // }
    
    // handlePrev = async ()=> {
    //     this.setState({page: this.state.page-1});
    //     this.Update();
    // }


    render() {
    return (
      <div>
        <div className='container'>
        <h2 className='text-center my-3'> Here are Today's News </h2><hr/>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.articles.length !== this.state.totalResults}
          loader={<Spinner/>}>
          {
            <div className="container">
            <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                            {!this.state.loading && <NewsItems title={element.title} description={element.description} Time={element.publishedAt} Author={element.author} imageUrl={element.urlToImage?element.urlToImage: 'https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns='} Url={element.url} Source={element.source.name} />}
                        </div>
                })}
            </div>
            </div>
          }
        </InfiniteScroll>
        </div>
        {/* <div className="container d-flex justify-content-between my-4">
        <button disabled={this.state.page<=1} type="button" className="btn btn-warning" onClick={this.handlePrev}>Previous Page</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/18)} type="button" className="btn btn-warning" onClick={this.handleNext}>Next Page</button>
        </div> */}
      </div>
    )
  }
}
