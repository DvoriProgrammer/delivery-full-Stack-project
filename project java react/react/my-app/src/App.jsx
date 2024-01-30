import React,{useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import ResponsiveAppBar from './components/head';
import Home from './components/home';
import About from './components/about';
import Menu from './components/menu';
//import Segests from './components/segests'
 import SignIn from './components/signIn';
import FooterComponent from './components/footer.jsx';
import RecipeReviewCard from './components/get&take/card.jsx';
 import Cards from './components/get&take/cards.jsx'
import Profile from './components/Profile/profilePage.jsx';
import PrimarySearchAppBar from './components/newMenu.jsx'
import AddComment from './components/get&take/addComment.jsx';
import AddRequest from './components/get&take/addRequest.jsx';
import AddGood from './components/get&take/addGood.jsx';
import CardsVolunteering from './components/volunteering/cardsVolunteering.jsx'
import { useSelector ,useDispatch} from 'react-redux';
function App() {
  const  dispatch = useDispatch()
  useEffect(() => {  
    document.title = 'By the way';
    dispatch({type:'GET_REQUESTS', id:1});
    dispatch({type:'GET_REQUESTS', id:2});
    // setCurrentRequest(myRequest)
    // console.log(myRequest);
  }, []);
 

  return (
    <>
 <Routes >
      {/* <Route path="/" element={<PrimarySearchAppBar/>}/>  */}
   
        <Route path='menu/*' element={<Menu/>}>
       <Route path="about" element={<About />} />
        <Route path="home" element={<Home />} />
        <Route path='add' element={<AddGood/>} />
        {/* <Route path="home" element={<Home />} /> */}
        <Route path="profilePage" element={<Profile/>} />
        <Route path="signIn" element={<SignIn/>}/>
        <Route path="cards" element={<Cards/>}/>
        <Route path="cardsVolunteering" element={<CardsVolunteering/>}/>
        <Route path="addRequest" element={<AddRequest />} />
         </Route>

         </Routes>
         {/* < RecipeReviewCard/> */}
      
         {/* <Cards/> */}
       {/* <FooterComponent style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh',buttom:"0", position: 'fixed'}} />   */}
     </>
  )
}

export default App;
