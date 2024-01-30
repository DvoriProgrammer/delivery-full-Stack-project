import React  from "react";
import  './side.css'
const BlogPost = ({ title, author, summary, tags, publishedDate, comments, shares }) => {
  return (
    <nav id="sidebar" style={{top:0,left:0}}>
    <ul className="dots">
      <li>
        <a href="#">
          <span className="glyphicon glyphicon-user">
            <mark>23</mark>
          </span>
        </a>
         <h4 style={{color:"white"}}>John D.</h4>
      </li>
      <li>
        <a href="#">
          <span className="glyphicon glyphicon-envelope">
            <mark className="big swing">7</mark>
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className="glyphicon glyphicon-time">
            <mark className="rubberBand">99</mark>
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className="glyphicon glyphicon-list-alt"></span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className="glyphicon glyphicon-calendar">
            <mark className="green wobble">99+</mark>
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className="glyphicon glyphicon-random">
            <mark className="blue tada">13</mark>
          </span>
        </a>
      </li>
    </ul>
  </nav>
  );
};

export default BlogPost;