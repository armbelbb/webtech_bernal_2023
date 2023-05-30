import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import './About.css';

const AboutMe = () => {
  const [textContent, setTextContent] = useState("");

  useEffect(() => {
    fetchTextContent();
  }, []);

  const fetchTextContent = async () => {
    try {
      const response = await fetch(process.env.PUBLIC_URL + "/About.txt");
      const text = await response.text();
      setTextContent(text);
    } catch (error) {
      console.error("Error fetching text content:", error);
    }
  };

  return (
    <>
        <div className="container margin-50">
            <Card>
                <h1 className="card-header d-flex align-items-center">About Me</h1>
                <div className="card-body">
                    <div className="row">
                        <div className="col-3">
                            <img className="about-image" src={process.env.PUBLIC_URL + "/ambe.jpg"} alt="Profile" />
                        </div>
                        <div className="col d-flex align-items-center justify-content-center">
                            <p className="about-text">&nbsp;&nbsp;&nbsp;&nbsp;
                              &nbsp;&nbsp;&nbsp;&nbsp;
                              {textContent}
                            </p>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    </>
  );
};

export default AboutMe;
