
import React from 'react';
import YourComponent1 from './homePage/pic';
import Coments from './homePage/coments';

import  PicBorder from './homePage/picBorder.jsx';
import  Movie from './homePage/movie.jsx';
import HowTo1 from './homePage/howTo1.jsx';
import HowTo2 from './homePage/howTo2.jsx';
import Qustion from './homePage/qustion.jsx';
import HowTake from './homePage/howTake.jsx';
import ScrollToTopOnMount from './scroll';
import ImageSlider from './homePage/imageSlider';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
// import image4 from '../images/4.jpg';
// import image5 from '../images/5.jpg';
// import image6 from '../images/6.jpg';
// import image7 from '../images/7.jpg';
// import image8 from '../images/8.jpg';
import image10 from '../images/10.jpg';
import NewHome from './homePage/newHome.jsx';
import { useSelector ,useDispatch} from 'react-redux';
import {editUser} from '../redux/reducers/UserSlice.js';
import FallingImage from './homePage/fallingImage.jsx';
import {useEffect} from 'react'
const Home = () => {


  const images = [image1 , image2, image3, image10];
  useEffect(() => {
    dispatch({ type: 'GET_REQUESTS', id:1 });
    dispatch({ type: 'GET_REQUESTS', id:2 });
    // setCurrentRequest(myRequest)
    // console.log(myRequest);
  }, []);

  const  dispatch = useDispatch()
  
  const users = useSelector((state) =>state.users) || []
  const updateUser=()=>{
    const currentUser={...users[2]};
    currentUser.name="tamar";
    dispatch(editUser({userId:1,user:currentUser}));
    console.log({currentUser})
  }
  return (
    <>
    <ScrollToTopOnMount />
    <div style={{top:15,left:0}}>
<NewHome></NewHome>
 {/* <YourComponent1 style={{top:0}}/> */}
 {/* <ImageSlider images={images} style={{top:5}}/> */}
 {/* <br/> <br/> <br/> <br/> <br/> <br/> <br/>
<Coments style={{marginTop:40}}/> */}
{/* <br/> <br/> <br/> <br/> <br/> <br/> <br/>
<PicBorder style={{marginTop:40}}></PicBorder> */}
{/* <Movie style={{marginTop:0}}/>
<br/> <br/> <br/> <br/> <br/> <br/> <br/> */}
{/* <HowTo1/>
<HowTo2/> */}
{/* <FallingImage style={{width:100}}/> */}
{/* <Qustion style={{height:20}}/> */}
{/* <HowTake style={{}}/> */}

</div>
</>
  );
};

export default Home;
