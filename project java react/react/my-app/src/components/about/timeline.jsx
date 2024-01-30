import React from "react";
import './timeline.css'; // Make sure to import your CSS file

const Timeline = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="main-timeline">
            <div className="timeline">
              <a href="#" className="timeline-content">
                <span className="timeline-year">2018</span>
                <div className="timeline-icon">
                  <i className="fa fa-rocket" aria-hidden="true"></i>
                </div>
                <div className="content">
                  <h3 className="title">Web Development</h3>
                  <p className="description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                </div>
              </a>
            </div>
            <div className="timeline">
              <a href="#" className="timeline-content">
                <span className="timeline-year">2017</span>
                <div className="timeline-icon">
                  <i className="fa fa-users" aria-hidden="true"></i>
                </div>
                <div className="content">
                  <h3 className="title">JavaScript</h3>
                  <p className="description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                </div>
              </a>
            </div>
            <div className="timeline">
              <a href="#" className="timeline-content">
                <span className="timeline-year">2017</span>
                <div className="timeline-icon">
                  <i className="fa fa-cog" aria-hidden="true"></i>
                </div>
                <div className="content">
                  <h3 className="title">Mongo DB</h3>
                  <p className="description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                </div>
              </a>
            </div>
            <div class="timeline">
          <a href="#" class="timeline-content">
            <span class="timeline-year">2017</span>
            <div class="timeline-icon">
              <i class="fa fa-globe" aria-hidden="true"></i>
            </div>
            <div class="content">
              <h3 class="title">Angular</h3>
              <p class="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
            </div>
          </a>
        </div>

        <div class="timeline">
          <a href="#" class="timeline-content">
            <span class="timeline-year">2017</span>
            <div class="timeline-icon">
              <i class="fa fa-apple" aria-hidden="true"></i>
            </div>
            <div class="content">
              <h3 class="title">Laravel</h3>
              <p class="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
            </div>
          </a>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
