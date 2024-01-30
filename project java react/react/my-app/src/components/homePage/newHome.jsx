import React, { useState,useEffect } from 'react';
import './newHome.css';
import Slide from '../../components/about/imgP.jsx'
import Coments from './coments';
import movie from '../..//images/My Movie.mp4'
import FallingImage from './fallingImage.jsx';
import location from '../..//images/location.png'
import Questions from './movie.jsx'
import PicBorder from './picBorder.jsx'
import {useNavigate } from 'react-router-dom';
import Qustion from './qustion.jsx'
const NewHome = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();
  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty dependency array ensures the effect runs once after the initial render
  const handleScroll = () => {
    console.log('Scrolled!', window.scrollY);
  };
const moveaAboutas=()=>{
    navigate('/menu/about');
}
  return (
    <div style={{width:"100%",left:0}} className="homebody">
<Slide/>
      <br/><br/><br/>
      {/* <section id="one-half" className="goblack">
        <span><img src="https://images.pexels.com/photos/7843934/pexels-photo-7843934.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/></span>

        <div className="half-content">
            <div className="half__text">
                <h1 >About Us</h1>
                <p style={{fontFamily:'initial',fontSize:"30"}}>Orci urna. 
                In et augue ornare, tempor massa in, luctus sapien. Proin a diam et dui fermentum dolor
                    molestie vel id neque. Donec sed tempus enim, a congue risus. Pellen tesqu.</p>
            </div>
            <div className="half__boxes">
                <div className="box">
                    <span href="#"><i className="fas fa-paw logo"></i></span>
                    <br/>  <br/>  <br/>
                    <h2 >Our Mission</h2>
                    <p>In a diam et dui elit, orci urna vel id neque. Donec sed tempus enims.</p>
                </div>
                <div className="box">
                    <span href="#"><i className="fas fa-paw logo"></i></span>
                    <br/>  <br/>  <br/>
                    <h2>Our Vision</h2>
                    <p>In a diam et dui elit, orci urna vel id neque. Donec sed tempus enims.</p>
                </div>
            </div>
        </div>

    </section> */}

    <br/><br/><br/>



    {/* <section id="two">
  <div className="heading">
    <h1>What We Do</h1>
    <p className="lightblack">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque, eaque ipsa quae ab illo inventore.</p>
  </div>

  <div className="container2" style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div className="info" style={{ flex: 1 }}>
      <span><img src="https://images.pexels.com/photos/4240246/pexels-photo-4240246.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></span>
      <div className="info__text">
        <h1>Donec sed teus enime</h1>
        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <h5 className="">READ MORE</h5>
      </div>
    </div>
    <div className="info" style={{ flex: 1 }}>
      <span><img src="https://images.pexels.com/photos/7203788/pexels-photo-7203788.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></span>
      <div className="info__text">
        <h1>It's enim ad minim aute</h1>
        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <h5 className="">READ MORE</h5>
      </div>
    </div>
    <div className="info" style={{ flex: 1 }}>
      <span><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/img3.jpg" alt="" /></span>
      <div className="info__text">
        <h1>Ullamco laboris nisi uts</h1>
        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <h5 className="">READ MORE</h5>
      </div>
    </div>
  </div>
</section> */}
<br/><br/><br/>
<PicBorder/>
 <Questions />
<br/><br/><br/>
    <section id="gallery">
        <div className="heading ">
            <h1>Our Gallery</h1>
            

        </div>
        <div className="gallery__container">
            <div className="first__row row">
                <span><img className="shine" src="https://images.pexels.com/photos/7843966/pexels-photo-7843966.jpeg" alt=""/></span>
                <span><img src="https://images.pexels.com/photos/7843960/pexels-photo-7843960.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/></span>
                <span><img src="https://images.pexels.com/photos/7843980/pexels-photo-7843980.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/></span>
                <span><img src="https://images.pexels.com/photos/7843989/pexels-photo-7843989.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/></span>

            </div>
            <div className="second__row row">
                <div className="first__column">
                    <span><img src="https://images.pexels.com/photos/8931736/pexels-photo-8931736.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/></span>
                    <span><img src="https://images.pexels.com/photos/7203781/pexels-photo-7203781.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/></span>
                </div>
                <span className="big__image" >
                    <img src="https://images.pexels.com/photos/6699420/pexels-photo-6699420.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                </span>
                <div className="first__column">
                    <span><img src="https://images.pexels.com/photos/6407536/pexels-photo-6407536.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/></span>
                    <span><img src="https://images.pexels.com/photos/4604718/pexels-photo-4604718.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/></span>

                </div>
                
            </div>
        </div>

    </section>

    <br/><br/><br/>

   
    <Qustion/>
    <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
    <section id="six" >
      
        <h1>Our Team Is Filled With Highly Dedicated Pet Lovers</h1>

        <button className="btn w-btn" onClick={moveaAboutas}>About as</button>

    </section>
    <Coments/>
{/* 
    
    <section id="seven" class="goblack">
        <div className="heading ">
            <h1>Latest News</h1>
            <p className="lightblack">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque,
                eaque ipsa quae ab illo inventore</p>

        </div>


        <div className="container container__bg goblack">
            <div className="info goblack">
                <span><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/blog3.jpg" alt=""/></span>
                <div className="info__text">
                    <pre>                                                   May 5, 2021</pre>
                    <h1>Hello world!</h1>



                    <h5 className="">READ MORE </h5>
                </div>
            </div>
            <div className="info goblack">
                <span><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/blog2.jpg" alt=""/></span>
                <div className="info__text">
                    <pre>                                                    May 5, 2021</pre>
                    <h1>How to keep your dog cool this summer</h1>



                    <h5 className="">READ MORE </h5>
                </div>
            </div>
            <div className="info goblack">
                <span><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/blog1.jpg" alt=""/></span>
                <div className="info__text">
                    <pre>                                                     May 5, 2021</pre>
                    <h1>Solution for grooming behavior problems</h1>



                    <h5 className="">READ MORE </h5>
                </div>
            </div>
        </div>

    </section> */}
      {/* ... rest of the sections ... */}

     

      {/* Add your JavaScript logic for toggling navigation and handling scroll */}
    </div>
  );
};

export default NewHome;
