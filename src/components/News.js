import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import {SquareLoader } from 'react-spinners';
export class News extends Component {
  static defaultProps={
    country:'us',
    pageSize:8,
    category:'general'
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string

  }
     articles=
    [
        {
          "source": {
            "id": "bbc-sport",
            "name": "BBC Sport"
          },
          "author": null,
          "title": "IPL 2025 results: Australia's Mitchell Starc takes first five-wicket haul in T20s as DC beat SRH",
          "description": "Mitchell Starc takes his first five-wicket haul in T20 cricket as Delhi Capitals cruise to a seven-wicket win over Sunrisers Hyderabad in the Indian Premier League.",
          "url": "http://www.bbc.co.uk/sport/cricket/articles/cjwv37241d7o",
          "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/0c2c/live/8d7e46d0-0d60-11f0-8cb6-ef080be5aa48.jpg",
          "publishedAt": "2025-03-30T13:52:22.875376Z",
          "content": "Mitchell Starc took his first five-wicket haul in T20 cricket as Delhi Capitals cruised to a seven-wicket win over Sunrisers Hyderabad in the Indian Premier League.\r\nThe 35-year-old Australia left-ar… [+1532 chars]"
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z",
          "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          "publishedAt": "2020-03-30T15:26:05Z",
          "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
      ]
    // results = [
    //   {
    //     article_id: "d7e8fde8075e750fccfff8767c7d4090",
    //     title: "La Orquesta Estable del Teatro Colón brindará un concierto gratuito en la Usina del Arte",
    //     link: "https://www.perfil.com/noticias/cultura/la-orquesta-estable-del-teatro-colon-brindara-un-concierto-gratuito-en-la-usina-del-arte.phtml",
    //     keywords: [
    //       "orquesta estable del teatro colón",
    //       "teatro colón",
    //       "usina del arte"
    //     ],
    //     creator: [
    //       "Rosario Bernasconi"
    //     ],
    //     video_url: null,
    //     description: "El programa incluirá obras de autores rusos: Ocho canciones populares rusas, op. 58 de Anatoly Liadov y la Sinfonía no 4 en fa menor, op. 36 de Piotr I. Chaikovsky. Leer más",
    //     content: "ONLY AVAILABLE IN PAID PLANS",
    //     pubDate: "2025-03-31 22:40:00",
    //     pubDateTZ: "UTC",
    //     image_url: "https://fotos.perfil.com/2025/03/31/trim/540/304/la-orquesta-estable-del-teatro-colon-brindara-un-concierto-gratuito-en-la-usina-del-arte-1995204.jpg",
    //     source_id: "perfil",
    //     source_priority: 56989,
    //     source_name: "Perfil",
    //     source_url: "https://www.perfil.com",
    //     source_icon: "https://i.bytvi.com/domain_icons/perfil.png",
    //     language: "spanish",
    //     country: [
    //       "argentina"
    //     ],
    //     category: [
    //       "top"
    //     ],
    //     ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //     sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //     sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //     ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    //     ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
    //     duplicate: false
    //   },
    //   {
    //     article_id: "f6c20c69486f506daee3097bbf848efe",
    //     title: "Springdale students have out of this world conversation as they speak with astronaut aboard International Space Station",
    //     link: "https://www.nwaonline.com/news/2025/mar/31/springdale-students-have-out-of-this-world/",
    //     keywords: null,
    //     creator: null,
    //     video_url: null,
    //     description: "SPRINGDALE -- Students inside Lakeside Junior High's Hartzell Jones Gymnasium gave a 10-second countdown, then went silent. Quiet anticipation was needed for school staff to make contact with the special assembly guest.",
    //     content: "ONLY AVAILABLE IN PAID PLANS",
    //     pubDate: "2025-03-31 22:40:00",
    //     pubDateTZ: "UTC",
    //     image_url: null,
    //     source_id: "nwaonline",
    //     source_priority: 30593,
    //     source_name: "Nwaonline",
    //     source_url: "https://www.nwaonline.com",
    //     source_icon: "https://i.bytvi.com/domain_icons/nwaonline.png",
    //     language: "english",
    //     country: [
    //       "united states of america"
    //     ],
    //     category: [
    //       "top"
    //     ],
    //     ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //     sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //     sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    //     ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    //     ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
    //     duplicate: false
    //   }
    // ]
  
      constructor()
      {
        super()
        this.state={
            article:this.articles,
            page:1
        }
      }
 async updateNews(){
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed95256128f841608579957544c1c339&page=${this.state.page}&pageSize=${this.props.pageSize}`
  let response = await fetch(url)
  let data= await response.json()
  console.log(data)
  this.setState({article:data.articles ,totalpages:data.totalResults})

}
  async componentDidMount()
  {
    // https://newsapi.org/v2/top-headlines?country=us&apiKey=ed95256128f841608579957544c1c339
    // https://newsdata.io/api/1/latest?apikey=pub_7743608c186e7226ad0a616077ff3af4a6b40&language=en&page=1743483415735094274
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed95256128f841608579957544c1c339&page=1&pageSize=${this.props.pageSize}`
    // let response = await fetch(url)
    // let data= await response.json()
    // console.log(data)
    // this.setState({article:data.articles ,totalpages:data.totalResults})
    this.updateNews()
  }
  handlePrevClick=async ()=>{
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed95256128f841608579957544c1c339&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    // let response = await fetch(url)
    // let data= await response.json()
    // console.log(data)
    // this.setState({article:data.articles})
    // this.setState({page:this.state.page - 1})
    this.setState({page:this.state.page-1})
    this.updateNews()
  }
  handlenextClick=async ()=>{
    // if(this.state.page+1 > Math.ceil(this.state.totalpages/this.props.pageSize))
    // {

    // }else{

    
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed95256128f841608579957544c1c339&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    // let response = await fetch(url)
    // let data= await response.json()
    // console.log(data)
    // this.setState({article:data.articles})
    // this.setState({page:this.state.page + 1})
    // }
    this.setState({page:this.state.page+1})
    this.updateNews()
  }
  capitalizeFirstLetter=(str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  fetchData=async ()=>{
    this.setState({page:this.state.page+1})
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed95256128f841608579957544c1c339&page=${this.state.page}&pageSize=${this.props.pageSize}`
    let response = await fetch(url)
    let data= await response.json()
    console.log(data)
    this.setState({article:this.state.article.concat(data.articles) ,totalpages:data.totalResults})
  }
 loader=()=>{
  return(
    <div className='d-flex justify-content-center mb-3'>
        <SquareLoader/>
    </div>
  )
 }
  render() {
    return (
      <>
      
        <h2 className='text-center' style={{margin:'40px 0px'}}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} heading</h2>
        <InfiniteScroll
          dataLength={this.state.article.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.article.length<this.state.totalpages}
          loader={this.loader()}>
          <div className='container mt-3 '>
        <div className='row'>
            {this.state.article.map((Element)=>{
              console.log("Elements are ",Element)
               return <div className='col-md-4'key={Element.url}>
                <NewsItem title={Element.title?Element.title:""} description={Element.description?Element.description:""} imageurl={Element.urlToImage?Element.urlToImage:""} url={Element.url?Element.url:''} author={Element.author} date={Element.publishedAt} source={Element.source.name}/>
                </div>

            })}
           
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1?true:false}type="button" className="btn btn-primary" onClick={this.handlePrevClick}> &larr; Previous</button>
      <button disabled={this.state.page+1 > Math.ceil(this.state.totalpages/this.state.pageSize)?true:false} type="button" className="btn btn-primary" onClick={this.handlenextClick}>Next &rarr;</button>
        </div> */}
        
      </>
     
    )
  }
}

export default News
