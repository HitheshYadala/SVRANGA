import React, { Component } from 'react'
import Navbar from './Navbar'
import building from "../assets/BUILDING.png"
import aboutbutton from "../components/compStyles/Aboutbutton.css"

export default class Aboutus extends Component {
  render() {
    return (
      <>
      {/* <div style={{backgroundImage: "linear-gradient(to top left,#ddf1db, #ffffff)"}}></div> */}
      {/* <Navbar /> */}
      <div style={{justifyContent : "center", backgroundImage: "linear-gradient(to top left,#ddf1db, #ffffff)"}}>
        <img  src={building} style={{  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: '80%',
  height:'300px'}}/>

<p style={{width : '80%', justifyContent: "center", marginLeft : "auto", marginRight : "auto"}}>	  	
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Considering the demand for Agricultural Engineering graduates in this state, the State Government permitted the Agricultural University to start a 4-year B.Tech (Agril.Engg.) Degree Programme in the Department of Agricultural Engineering, Agricultural College, Bapatla from the academic year 1983-84. The Head of the Department of Agricultural Engineering, Agricultural College, Bapatla was designated as the Officer-in-charge of the programme under the administrative control of the Principal of Agricultural College, Bapatla.
<br/><br/>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The degree programme was started in the month of July 1983. However, the college continued in the campus of the Agricultural College, Bapatla till it was shifted to new campus on NH 214-A in Karlapalem road in May 1994.<br/><br/> 

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A separate campus (existing campus) for the college was planned in a 25 acre area on NH 214-A i.e., on Bapatla – Karlapalem road provided by the Panchayat Raj Department and the foundation stone for construction of the building complex was laid by<strong> Dr.N.T.Rama Rao</strong>, the then Hon’ble Chief Minister of Andhra Pradesh on 24-02-1988 , it was named as <strong>Visweswaraya Bhavan</strong> after the great engineer Sir. Mokshagundam Visweswaraya. The college buildings constructed at a cost of Rs.46.45 lakhs were inaugurated in the new premises on 5-5-1994 by <strong>Sri K. Jana Reddy</strong>, the then Hon’ble Minister for Agriculture of Andhra Pradesh and the college was shifted to the new buildings in May, 1994.<br/><br/>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The college has the unique feature of being the only college offering B.Tech (Agril.Engg.) degree in Andhra Pradesh State till 2008. The annual intake of the students into the degree programme was only 20 in the initial year 1983-84 and later was raised to 65 in the subsequent years. The admissions are made through EAMCET conducted by the Government of Andhra Pradesh and also through the UG- level ICAR exam. At present the annual intake is 65 plus 8 from ICAR quota.

</p>
<div>
<span style={aboutbutton}><a href="/photogallary"></a></span>
  </div>
  
      </div>

      </>
    )
  }
}
