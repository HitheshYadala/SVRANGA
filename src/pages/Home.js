import React, { Component } from 'react'
import banner from "../assets/BannerImage.jpeg"
import '../components/compStyles/messages.css'
import avatar from "../assets/img_avatar.png"
import ReadMoreReact from 'read-more-react'

export default class Home extends Component {
  render() {
    return (
<div style={{backgroundImage: "linear-gradient(to top left,#ddf1db, #ffffff)"}}>
      <div className='row pt-5'>
        <div className='col-md-4'>
        <div className="content" >
         {/* <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank"> */}
           <div className="content-overlay "></div>
           <img className="content-image" src={avatar} />
           <div className="content-details fadeIn-bottom">
             <h3 className="content-title">Dr.K.Yella Reddy</h3>
             <p className="content-text" style={{fontSize:"18px"}}>DEAN</p>
           </div>
          
        {/* </a> */}

      </div>
        </div>

        <div className='col-md-8'>
          <h5 style={{color:'#506448', fontWeight:'bold' ,textDecorationLine : 'underline' , textDecorationColor : "#83a778", textDecorationThickness: '6px'}}>Dean's Message </h5>
          <p>   It is my pleasure and privilege to express that The year 2018-19 has been highly eventful with the outstanding performance of the students of the college by obtaining 12 very good GATE ranks. The students of the 2017-18 batch had bagged 13 ranks in GATE, 29 JRF ranks and 4 SRF ranks in ICAR. I congratulate all the students and staff of the college for these achievements. This year, so far 30 final year students were selected for placement and 24 students of 2017-18 received their placement and appointment orders through college placement cell.<br/>
   I am happy to inform that the Girls hostel Complex was established and AICRP on Farm Implements and Machinery, Bapatla centre is functioning at this college w.e.f. 1st April 2015 to cater the mechanization needs of Andhra Pradesh farmers. The college is also blessed with new ELP building and hostels with a NABARD funding of Rs. 7 crores, construction planning and design works are in progress.
   <br/> All round development is in progress at this college for which, I am highly thankful to Dr. V. Damodara Naidu, Hon’ble Vice-chancellor, Dr. K. Yella Reddy, Dean of Agricultural Engineering and Technology(AE&T), Dr. S.R. Koteswara Rao DSA, Dr. D. Bhaskara Rao, Registrar and Dr. D. Balaguravaiah, Dean of PGS and all other university officers for supporting the college during 2018-19.</p>
</div>
      </div>




<div className='row pt-5'>

<div className='col-md-8'>
  <h5 style={{color:'#506448', fontWeight:'bold' ,textDecorationLine : 'underline' , textDecorationColor : "#83a778", textDecorationThickness: '6px'}}>Message From Associate Dean </h5>
  <p>   It is my pleasure and privilege to express that The year 2018-19 has been highly eventful with the outstanding performance of the students of the college by obtaining 12 very good GATE ranks. The students of the 2017-18 batch had bagged 13 ranks in GATE, 29 JRF ranks and 4 SRF ranks in ICAR. I congratulate all the students and staff of the college for these achievements. This year, so far 30 final year students were selected for placement and 24 students of 2017-18 received their placement and appointment orders through college placement cell.<br/>
   I am happy to inform that the Girls hostel Complex was established and AICRP on Farm Implements and Machinery, Bapatla centre is functioning at this college w.e.f. 1st April 2015 to cater the mechanization needs of Andhra Pradesh farmers. The college is also blessed with new ELP building and hostels with a NABARD funding of Rs. 7 crores, construction planning and design works are in progress.
   <br/> All round development is in progress at this college for which, I am highly thankful to Dr. V. Damodara Naidu, Hon’ble Vice-chancellor, Dr. K. Yella Reddy, Dean of Agricultural Engineering and Technology(AE&T), Dr. S.R. Koteswara Rao DSA, Dr. D. Bhaskara Rao, Registrar and Dr. D. Balaguravaiah, Dean of PGS and all other university officers for supporting the college during 2018-19.</p>
</div>


<div className='col-md-4'>
<div className="content" >
 {/* <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank"> */}
   <div className="content-overlay "></div>
   <img className="content-image"  src={avatar}/>
   <div className="content-details fadeIn-bottom">
     <h3 className="content-title">Dr. A. Mani</h3>
     <p className="content-text" style={{fontSize:"18px"}}>ASSOC. DEAN</p>
   </div>
  
{/* </a> */}

</div>
</div>
</div>

</div>

    )
  }
}


