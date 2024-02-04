import React, { useEffect, useState } from 'react';
import CardSingle from './card.jsx';
import './cards.css';
import FilterBar from './filter.jsx';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardContent, Pagination } from '@mui/material';
import { Category } from '@mui/icons-material';
import BasicModal from './modal.jsx'
import {filterRequest,clearFilter} from '../../redux/reducers/requestSlice.js'
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ScrollToTopOnMount from '../scroll.jsx';
const share = [
  {
    name: "dvori",
    from: "pt",
    to: "jerusalem",
    color: "red"
  },
  // ... (other share items)
];

export default function Cards() {
  const currentDate = new Date();

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
let listData = useSelector((state) => state.request.listFromData);
console.log(listData);
const myUser=useSelector((state)=>state.user.currentUser)
  useEffect(() => {
    dispatch({ type: 'GET_REQUESTS', id:1 });
    // setCurrentRequest(myRequest)
    // console.log(myRequest);
  }, []);



const r = listData;
const [currentPage, setCurrentPage] = useState(1);
// Cards to be displayed on the current page
const cardsPerPage = 10;
const indexOfLastCard = currentPage * cardsPerPage;
const indexOfFirstCard = indexOfLastCard - cardsPerPage;
const currentCards = r.slice(indexOfFirstCard, indexOfLastCard);
console.log("😥");

const cleanFilter=()=>{
  dispatch(clearFilter())
}
const myRequest=()=>{
 let UserRequest= listData.filter((e)=>e.userId.id===myUser.id)
  dispatch(filterRequest(UserRequest))
}
const funcFilter=(data)=>{
  console.log(data);
  setSlc(data)
  let filtermyRequest=listData;
  if(data.fromWhere!=null){
    const a = filtermyRequest.filter((e) => (e.fromWhere.includes(data.fromWhere)||data.fromWhere.includes(e.fromWhere))&&e.fromWhere!="")
            filtermyRequest=a;
    }
   if(data.ToWhere!=null){
    const b = filtermyRequest.filter((e) => (e.ToWhere.includes(data.ToWhere)||data.ToWhere.includes(e.ToWhere))&&e.ToWhere!="");
    filtermyRequest=b;
    }
   if(data.price!="0"){
    const c = filtermyRequest.filter((e) => e.price>(data.price));
    filtermyRequest=c;
   }
   if(data.size!=0 &&data.size<=3){
    const d = filtermyRequest.filter((e) => e.size<=(data.size));
    filtermyRequest=d;
   }
   
      // if(data.dateTime!=null){
    // const d= filtermyRequest.filter((e) => e.dateTime>(data.dateTime));
  //   const d = filtermyRequest.filter((e) => new Date(e.dateTime) > new Date(data.dateTime));

  //   filtermyRequest=d;
  //  }
  //  if(data.size!=null){
  //   const d= filtermyRequest.filter((e) => e.size=(data.dateTime));
  //   filtermyRequest=d;
  //  }
  console.log(filtermyRequest)
  dispatch(filterRequest(filtermyRequest))
//  u=filtermyRequest;
  console.log(listData);

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




  // Function to handle page change
  // const handlePageChange = (event, value) => {
  //   setCurrentPage(value);
  // };
  const filteredItems = r
    .filter(item => new Date(item.dateTime) < currentDate)
    .reverse();
  return (
    <>
   
      {/* <Link
        to="/menu/addRequest"
        style={{
          textDecoration: 'none',
          fontSize: 17,
          backgroundColor: 'blue',
          color: 'white',
          padding: '10px 20px',
          position: 'fixed',
          top: '600px',
          left: '60px',
          zIndex: 999
        }}
      >  */}
      <ScrollToTopOnMount/>
       <BasicModal  label={"add Requesr"} path={'/menu/addRequest'} prev={'cards'}/>
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
        {/* Click to Add Request
      </Link> */}
   
      <div>
        <FilterBar
          f={(data) => funcFilter(data)}
          onFilterChange={handleFilterChange}
          cardSize={cardSize}
          setCardSize={setCardSize}
          onToggleFilter={handleToggleFilter}
          style={{ display:'inline' }}
          c={true}
        />
   {myUser&&<button style={{
          textDecoration:'none',
          fontSize: 17,
          backgroundColor:'red',
          color: 'white',
          padding: '10px 20px',
          position: 'fixed',
          width:'10%',
          top: '29%',
          left: '0%',
          zIndex: 999
        }} onClick={myRequest}><AccountCircleIcon/>my request</button>} 
        <div className={`cards-container ${isFilterVisible?'with-filter' : ''}`}>      
          {r.slice(0)
           .reverse().map((item, index)=>(       
            <div key={index} style={{left:'50%'}}>
              <CardSingle pro={item} c={true}  idcard={item.id}/>
            </div>
          ))} 
          
             {/* {r.slice(0)
  .reverse().filter((item) => (       
            <div style={{ left: '50%' }}>
              <CardSingle pro={item} c={true}  idcard={item.id}/>
            </div>
          ))}  */}
        </div>
      </div>
      <Pagination
  sx={{ left: '80px', width: '30%' }}
  count={Math.ceil(r.length/cardsPerPage)}
  page={currentPage}
  onChange={handlePageChange}
/>



    </>
  );
}
