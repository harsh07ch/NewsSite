import React, { Component } from 'react'


export default class News extends Component {

  render() {
    let {title, description, imageUrl, Url, Time, Author, Source} = this.props;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col my-3">
              <div className="card">
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{zIndex:'1', left:'90%'}}>{Source}</span>
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text"><small className="text-muted">{Author?"By "+Author:""} On {new Date(Time).toGMTString()} </small></p>
                  <div className="text-center">
                    <a rel="noreferrer" href={Url} target='_blank' className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

