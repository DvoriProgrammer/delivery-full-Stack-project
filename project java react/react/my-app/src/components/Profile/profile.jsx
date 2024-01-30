import React from "react";
import './profile1.css'; // Make sure to import your CSS file

export default function profile1() {
  console.log("Profile");
  return (
    
    <div className="row">
      {/* <nav className="menu">
        <ul className="items">
          <li className="item">
            <i className="fa fa-home" aria-hidden="true"></i>
          </li>
          <li className="item">
            <i className="fa fa-user" aria-hidden="true"></i>
          </li>
          <li className="item">
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </li>
          <li className="item item-active">
            <i className="fa fa-commenting" aria-hidden="true"></i>
          </li>
          <li className="item">
            <i className="fa fa-file" aria-hidden="true"></i>
          </li>
          <li className="item">
            <i className="fa fa-cog" aria-hidden="true"></i>
          </li>
        </ul>
      </nav> */}

      <section className="discussions" >
        <div className="discussion search">
          <div className="searchbar">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input type="text" placeholder="Search..."></input>
          </div>
        </div>

        <div className="discussion message-active">
          <div
            className="photo"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)',
            }}
          >
            <div className="online"></div>
          </div>
          <div className="desc-contact">
            <p className="name">Megan Leib</p>
            <p className="message">9 pm at the bar if possible 😳</p>
          </div>
          <div className="timer">12 sec</div>
        </div>

        <div className="discussion message-active">
          <div
            className="photo"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)',
            }}
          >
            <div className="online"></div>
          </div>
          <div className="desc-contact">
            <p className="name">Megan Leib</p>
            <p className="message">9 pm at the bar if possible 😳</p>
          </div>
          <div className="timer">12 sec</div>
        </div>
        {/* ... Other discussion items */}
      </section>

      <section className="chat">
        <div className="header-chat">
          <i className="icon fa fa-user-o" aria-hidden="true"></i>
          <p className="name">Megan Leib</p>
          <i className="icon clickable fa fa-ellipsis-h right" aria-hidden="true"></i>
        </div>

        <div className="messages-chat">
          {/* ... Your message content */}
        </div>

        {/* <div className="footer-chat">
          <i className="icon fa fa-smile-o clickable" style={{ fontSize: '25pt' }} aria-hidden="true"></i>
          <textarea className="write-message" placeholder="Type your message here"></textarea>
          <i className="icon send fa fa-paper-plane-o clickable" aria-hidden="true"></i>
        </div> */}
      </section>
    </div>
 
);
 
}
