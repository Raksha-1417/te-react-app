import React from "react";
import "../Styles/Footer.css";

export const Footer = () => {
    return (
        <>
              <section class="reachus">
            <div class="container-fluid p-0">
                    <div class="reachus">
                <div class="row">
                        <div class="col-lg-4 col-sm-4 col-xs-12 reachus1">
                            <span class="fa fa-map-marker"></span>
                            <address className="address">NEW YORK 9870 ST<br></br> VINCENT GLASSGLOW</address>
                        </div>
                        <div class="col-lg-4 col-sm-4 col-xs-12 reachus2">
                            <span class="fa fa-envelope"></span>
                            <a href="mailto:" className="address">CONTACT@DEMOLINK.ORG</a>
                        </div>
                        <div class="col-lg-4 col-sm-4 col-xs-12 reachus3">
                            <span class="fa fa-phone"></span>
                            <dl>
                                <dt className="address">CALL US:</dt>
                                <dd><a href="callto:#" className="address">+1 800 603 6035</a></dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </section>
           <footer>
              <div className="container-fluid">
                 <div className="mapped">
                 <div className="row">
                    <div className="col-lg-6 col-12 ps-5">
                    <h2 className="footerfont">HABER<span className="smallfont"><a href="#" class="fa fa-copyright" style={{color:"#dc6226"}}></a> 2022 Privacy Policy</span></h2>
                         <ul class="iconlist">
                         <li><a href="#" class="fa fa-facebook-square icon"></a></li>
                        <li><a href="#" class="fa fa-google-plus-square icon"></a></li>

                        <li><a href="#" class="fa fa-twitter-square icon"></a></li>
                        <li><a href="#" class="fa fa-youtube icon"></a></li>
                        <li><a href="#" class="fa fa-pinterest icon"></a></li>
                        <li><a href="#" class="fa fa-linkedin icon"></a></li>
                      
                    </ul>
                    </div>
                    <div className="col-lg-6 col-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.25121098481!2d73.77408491439003!3d18.56270988738444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf559a0d1a05%3A0x71978883d86139e3!2sHaber%20(Elixa%20Technologies%20Private%20Limited)!5e0!3m2!1sen!2sin!4v1666344683241!5m2!1sen!2sin"></iframe>
                    </div>
                </div>
                 </div>
              </div>
           </footer>
                                
        </>
                                    
        );

}

export default Footer;