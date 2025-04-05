import React, { Component } from 'react'


export class NewsItem extends Component {

  render() {
    const {title,description,imageurl,url,author,date,source}=this.props
    return (
      <div className='my-4'>
        <div className="card" style={{width: '18rem'}}>
            <img src={imageurl?imageurl:"https://image.shutterstock.com/z/stock-vector-modern-futuristic-template-for-news-on-background-digital-data-visualization-business-technology-1171834219.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p> <small className="text-body-secondary"> By {author?author:"unknown"} on {new Date(date).toUTCString()}</small></p>
                <a href={url} className="btn btn-dark">Read more</a>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {source?source:"Unknown"}
                    <span className="visually-hidden">unread messages</span>
                  </span>
            </div>
        
            </div>
      </div>
    )
  }
}

export default NewsItem
