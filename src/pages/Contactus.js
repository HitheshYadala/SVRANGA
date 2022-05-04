import React from 'react';
import css from '../components/compStyles/contactus.module.css';
// import style from '../layouts/style.module.css';
import foot from '../components/compStyles/footer.module.css';


function Footer() {
    return (


            <div>


                            <div>
                                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7777.483417018082!2d77.51366393488773!3d12.924315500000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f39de1c02f5%3A0x69d7777f81da6f40!2sAiplex%20Software%20Private%20Limited!5e0!3m2!1sen!2sin!4v1605612007134!5m2!1sen!2sin" width="100%" height="400px" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15312.58340333217!2d80.4369431!3d16.366531!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x99df108eb419d889!2sAcharya%20N.%20G.%20Ranga%20Agricultural%20University!5e0!3m2!1sen!2sin!4v1651657795684!5m2!1sen!2sin" width="100%" height="300px" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </div>
                            <div style={{backgroundColor:"rgb(238, 238, 238)"}} id="contact">
                          
                                <div className="row p-5" style={{backgroundColor : "#c1cfbd"}}>
                                    <div className="col-md-5">
                                    </div>

                                    <div  style={{height: "50px"}}>
                                        
                                    </div>
                                    <div className="col-md-7 pt-4" >
                                        <div className="row ">
                                            <div className="col-md-2"></div>
                                            <div className="col-md-4">
                                                <h4 className="first-latter pb-1">Registered Office</h4>
                                                <p>9C8P+JQ8, Administrative Office, Amaravathi Rd, Lam, Guntur, Andhra Pradesh 522034</p>
                                            </div>

                                            <div className="col-md-2"></div>
                                            <div className="col-md-4">
                                                <h4 className="first-latter pb-1">Contact Details</h4>
                                                <p>Ph : +91 123 123 12344</p>
                                                <p  style={{fontSize:"14px"}}>email : ngranga@example.com</p>
                                            </div>
                                        </div>


                                        
                                    </div>


                                    
                                </div>
                            </div>

        </div>
    )
}

export default Footer;