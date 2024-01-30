import React, { useEffect, useState } from 'react';
import CardSingle from '../get&take/card.jsx';
import '../get&take/cards.css';
import FilterBar from '../get&take/filter.jsx';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardContent, Pagination } from '@mui/material';
import ScrollToTopOnMount from '../scroll.jsx';
import BasicModal from '../get&take/modal.jsx'
import SwipeableTextMobileStepper from '../volunteering/cardsVolunteering.jsx'
import {filterVolunteer,clearFilter} from '../../redux/reducers/volunteerSlice.js'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';


const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  

slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000, // כל 5 שניות
};

const ads = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA_gQAo8XmN4q02Mmen_GVqhCrL7qVOpsP8w&usqp=CAU',
  'https://via.placeholder.com/300x600.png?text=Ad+2',
  'https://via.placeholder.com/300x600.png?text=Ad+3',
];
const share = [
  {
    name: "dvori",
    from: "pt",
    to: "jerusalem",
    color: "red"
  },
  // ... (other share items)
];

export default function CardVolunteering() {
  <ScrollToTopOnMount/>
 
  const [currentRequest,setCurrentRequest]=useState([])
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  
  const [cardData, setCardData] = useState([]);
  const [filteredColor, setFilteredColor] = useState('');
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [cardSize, setCardSize] = useState('small');
  const [showAddRequest, setShowAddRequest] = useState(false);
const [slc,setSlc]=useState(null);
  const dispatch = useDispatch();
  let myRequest = useSelector((state) => state.volunteer.volunteerFilter)

  useEffect(() => {
    dispatch({ type: 'GET_REQUESTS', id: 2 });
   
  }, []);
  const myUser=useSelector((state)=>state.user.currentUser)
  const allMyv=()=>{
    let UserRequest= myRequest.filter((e)=>e.userId.id===myUser.id)
     dispatch(filterVolunteer(UserRequest))
   }
   const cleanFilter=()=>{
    dispatch(clearFilter())
  }
const funcFilter=(data)=>{
  console.log(data);
  setSlc(data)
  let filtermyRequest = myRequest;
  if(data.fromWhere!=null){
    const a = filtermyRequest.filter((e) => e.fromWhere.includes(data.fromWhere));
    filtermyRequest=a;
     //setMyRequest(ss)
    }

   if(data.ToWhere!=null){
    const b = filtermyRequest.filter((e) => e.ToWhere.includes(data.ToWhere));
    filtermyRequest=b;
    }
   if(data.price!="0"){
    const c = filtermyRequest.filter((e) => e.price>(data.price));
    filtermyRequest=c;
   }
   
      if(data.dateTime!=null){
    const d= filtermyRequest.filter((e) => e.dateTime>(data.dateTime));
    filtermyRequest=d;
   }
  
    dispatch(filterVolunteer(filtermyRequest))
     console.log(u);
    
}


  const handleAddRequestClick = () => {
    setShowAddRequest(true);
  };

  const handleFilterChange = (color) => {
    setFilteredColor(color);
  };

  const handleToggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
    setCardSize(isFilterVisible ? 'regular' : 'small');
  };



  const r = myRequest;
  const [currentPage, setCurrentPage] = useState(1);

  // Cards to be displayed on the current page
  const cardsPerPage = 10;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = myRequest.slice(indexOfFirstCard, indexOfLastCard);

  // Function to handle page change
  // const handlePageChange = (event, value) => {
  //   setCurrentPage(value);
  // };

  return (
    <>
    <ScrollToTopOnMount/>
      {/* <Link
        to="/menu/addRequest"
        style={{
          textDecoration: 'none',
          fontSize: 17,
          backgroundColor: 'blue',
          color: 'white',
          padding: '10px 20px',
          position: 'fixed',
          top: '630px',
          left: '60px',
          zIndex: 999
        }}
      >
        Click to Add Request
      </Link> */}

<button onClick={cleanFilter} style={{
                textDecoration: 'none',
                fontSize: 17,
                // olor: 'red',
                color: 'black',
                height:'5%',
                width:'5%',
                position: 'fixed',
                top: '20%',
                left: '5%',
                zIndex: 999
              }}><FilterAltOffIcon/></button>
{myUser&&<button style={{
          textDecoration: 'none',
          fontSize: 17,
          backgroundColor: 'red',
          color: 'white',
          padding: '10px 20px',
          position: 'fixed',
          width:'10%',
          top: '29%',
          left: '0%',
          zIndex: 999
        }} onClick={allMyv}><AccountCircleIcon/>my request</button>} 
      
           <BasicModal  label={"add Requesr"} path={'/menu/addRequest'} prev={"volanteer"}/>
      <div>
        <FilterBar
          f={(data) => funcFilter(data)}
          onFilterChange={handleFilterChange}
          cardSize={cardSize}
          setCardSize={setCardSize}
          onToggleFilter={handleToggleFilter}
          style={{ display:'inline' }}
          c={false}
        />
        <div className={`cards-container ${isFilterVisible ? 'with-filter' : ''}`}>
          {currentCards.map((item, index) => (
            <div key={index} style={{ left: '50%' }}>
              <CardSingle pro={item} c={false} id={item.id}/>
            </div>
          ))}
        </div>
      </div>
      {/* <Pagination style={{left:'50%',width:'30%'}}
        count={Math.ceil(r.length / cardsPerPage)}
        page={{currentPage}-10}
        onChange={handlePageChange}
      /> */}
    </>
  );
}
