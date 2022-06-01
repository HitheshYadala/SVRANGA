import React, { Component } from 'react'
import banner from "../assets/BannerImage.jpeg"
import '../components/compStyles/messages.css'
import avatar from "../assets/img_avatar.png"
import ReadMoreReact from 'read-more-react'
import "../components/compStyles/neocards.css"
import NewsTicker from "react-advanced-news-ticker"
import { NavItem } from 'react-bootstrap'
import "../components/compStyles/newsticker.scss"
// import Particles from 'particlesjs'

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      news : [],
      data : [],
      isNew : [],
      actData: []
    };
    this.callNewsApi = this.callNewsApi.bind(this)

}  



  componentDidMount() {

    // window.onload = function() {
    //   Particles.init({
    //     selector: '.background',
    //     color:"green",
    //     maxParticles:1000
    //   });
    // };

    setTimeout(() => {
      this.callNewsApi()
    }, 1000);
  }

  callNewsApi = () => {
    
    fetch( 'http://ngranga.com:8080/api/resource/News?fields=["*"]',
      {
        method: "get",
        headers: {
          "Authorization": "token 3c8d33a6cf5fdcc:b020ce98d33d51f",
          "Content-Type": "application/json"
        },
      }
    ).then(handleResponse => handleResponse.json())
     .then(async(response) => {
       this.setState({actData : response.data})
       console.log(this.state.actData)
      await response.data.map((item) => {
       
        //  this.state.news.push(item.news)
        this.state.news.push(item.news, item.isnew)
        });
        this.setState({data : this.state.news})
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {

    let data = this.state.data.map((item , index) => 
    {
      <div key={index}>
        {item}
      </div>
    })

return(
  <>

<div className="ticker-wrap">
    <div className="ticker">

  {this.state.actData.map((item, ind)=> {
    return(
   <div className="ticker__item">
   <a href = "/www.google.com" style = {{color :"black"}}>{item.news} {item.isnew !== 0 ? 
     <img style = {{width : "50px"}}src="https://myhpgas.in/myhpgas/App_Themes/Blue/images/new.gif"/>
  : null}</a>
   </div>
    )
  })}  
 </div>
  </div>


  {/* <div className="row"  style={{paddingTop : "6%" ,paddingLeft: '3%',paddingRight: '3%', justifyContent:"space-evenly"}}>
    <div className=" col-6 card p-3 py-4">
        <div className="text-center"> <img src="https://i.imgur.com/stD0Q19.jpg" width="120" className="" />
            <h3 className="mt-2">Maria Samantha</h3> <span className="mt-1 clearfix">Dean</span>

            <hr className="line"/> <small className="mt-4">I am Dean for NGRAU and im incharge of all internal and external operations in the university... <a href="/readmoredean">Read more</a></small>
            
        </div>
    </div>


    <div className=" col-6 card p-3 py-4">
        <div className="text-center"> <img src="https://i.imgur.com/stD0Q19.jpg" width="120" className="" />
            <h3 className="mt-2">Maria Samantha</h3> <span className="mt-1 clearfix">Asso. Dean</span>

            <hr className="line"/> <small className="mt-4">I am Dean for NGRAU and im incharge of all internal and external operations in the university... <a href="/readmoredean">Read more</a></small>
        </div>
    </div>

    
    





    
</div> */}
</>
)
  }
}


