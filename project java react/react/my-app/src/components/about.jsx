// About.js
import React from 'react';
import Open from './about/open';
import image1 from '../images/1.jpg';
import image2 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image3 from '../images/3.jpg';
import image10 from '../images/10.jpg';
import sit from '../images/sit.png';
import share from '../images/share.png';
import local from '../images/local.png';
import get from '../images/get.png';
import ImageSlider from './homePage/imageSlider';
import ImageAbout from './about/imageAbout';
import CardComponent from  '../components/get&take/try'
import ScrollToTopOnMount from './scroll';
import HowTake from './homePage/howTake';
import LogoSlider from './about/logoSlider';
import Slide from '../components/about/imgP.jsx'
import '../components/homePage/newHome.css'
const About = () => {
  const images = [image1 ,  image3,image2,image5, image10];
  return (
    <div>
      <ScrollToTopOnMount/>
     

      <section id="one" >
      

       
        {/* <div className="content" >
            <div className="text-content">
                <h1 className="white">Providing Special care
                    For <strong>Your Pets!</strong>
                </h1>
                <h4 className="blackish">We offer special services for special pets!</h4>
                <div className="two-button">
                    <button className="w-btn btn">View Our Services</button>
                    <button className="t-btn btn">Hire Us</button>
                </div>

            </div>
        </div> */}
      </section>
      <section id="one-half" className="goblack">
        <span><img src={share} alt=""/></span>

        <div className="half-content">
            <div className="half__text">
                <h1 >About Us</h1>
                <br/> <br/> <br/> <br/> <br/> <br/>
                <p style={{fontFamily:'initial',fontSize:"24px"}}>
                You know when you had to pick up a shipment that was stuck somewhere?  <br/>And in order to take it you had to rush and waste time? 
Or on the contrary, you went somewhere and you had room in the car - to make money on the way? <br/>
You have come to the right place 'by the way' making money on the way
</p>
            </div>
            <div className="half__boxes">
                <div className="box">
                 
                    <br/>  <br/>  <br/>
               
                </div>
                {/* <div className="box">
                    <span href="#"><i className="fas fa-paw logo"></i></span>
                    <br/>  <br/>  <br/>
                    <h2>Our Vision</h2>
                    <p>In a diam et dui elit, orci urna vel id neque. Donec sed tempus enims.</p>
                </div> */}
            </div>
        </div>

    </section>
     

    <section id="one-half" className="goblack">
    

        <div className="half-content">
            <div className="half__text">
                <h1 >How did it all start</h1>
                <br/><br/><br/><br/>
                <p style={{fontFamily:'initial',fontSize:"22px"}}>So how did it all start?<br/>
It all started when a package I needed to pick up was stuck in the middle of nowhere.
I was looking for a friend to take the package for me, even for a fee.
After I couldn't find it I thought, why not set up such a website?<br/> In it, those who need a shipment collected for them will simply advertise there!
</p>
            </div>
           
        </div>
        <span><img src={sit} alt=""/></span>
    </section>




    <section id="one-half" className="goblack">
        <span><img src={local} alt=""/></span>
        <div className="half-content">
            <div className="half__text">
                <h1 >How does it work</h1>
                <br/><br/><br/><br/><br/><br/><br/>
                <p style={{fontFamily:'initial',fontSize:"22px"}}>
                So, how does it work?<br/>
First of all, register on the site
In order to upload a request, you must go to the requests page and click on 'Add request', fill in the details of the request and add it.
When people respond to your request, you will receive an email update and you will be able to enter the profile of the user who responded to you, and get their details so you can contact them.
If you are already traveling, and want to make money on the way, go to the requests page and filter as needed.
You can respond to requests and if your offer suits them they will contact you!

                </p>
            </div>
         
        </div>

    </section>
     

  
  
    <section id="one-half" className="goblack">
    

    <div className="half-content">
        <div className="half__text">
            <h1 >Stay connected!</h1>
            <br/><br/><br/><br/>
            <p style={{fontFamily:'initial',fontSize:"22px"}}>
            Take advantage of our service ,We trust you! Of course you ask yourself what this means?!<br/>
Don't worry, very easy, Just make sure to upload requests, to choose messengers and delete your messages, you're done! Also make sure to answer friends suggestions And we can continue to operate the site. All rights reserved to ByTheWay.
 <br/>For comments:<br/>
bytheway933@gmail.com
</p>
        </div>
       
    </div>
    <span><img src={get} alt=""/></span>
</section>



      {/* <ImageAbout/>  */}
      <br/>
      {/* <YourComponent22/> */}
       <ImageSlider images={images} />
       <p>
        
       </p>
       <HowTake/>
       {/* <CardComponent/> */}
    </div>
  );
};

export default About;
