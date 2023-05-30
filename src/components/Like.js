import React from "react";
import { Card } from "react-bootstrap";
import './Like.css';

const AboutMe = () => {
  return (
    <>
      <div className="container">
        <div className="container-left mwidth-400 margin-50"> {/*container is 400px*/}
          <Card>
            <h3 className="card-header">Likes</h3>
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <ul>
                    <li>Mushroom Farming</li>
                    <li>Woodworking</li>
                    <li>Fishing</li>
                    <li>Watching Animation</li>
                    <li>Watching Movies</li>
                    <li>Badminton</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
