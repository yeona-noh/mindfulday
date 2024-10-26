import React, { useState, useEffect } from "react";
import axios from "axios";
import _navbar from "../components/_navbar";
import "./home.css";
import { Link } from "react-router-dom";
function Home() {
  const [yogaVideos, setYogaVideos] = useState([]);
  const [meditateVideos, setMeditateVideos] = useState([]);
  useEffect(() => {
    getYogaVideos();
  }, []);
  useEffect(() => {
    getMeditateVideos();
  }, []);

  const getYogaVideos = async () => {
    try {
      let res = await axios.get("http://localhost:8000/yoga/");
      setYogaVideos(res.data.slice(-3));
    } catch (error) {
      console.log(error, "getYogavideos failed");
    }
  };

  const getMeditateVideos = async () => {
    try {
      let res = await axios.get("http://localhost:8000/meditations/");
      setMeditateVideos(res.data.slice(-3));
    } catch (error) {
      console.log(error, "getMeditateVideo failed");
    }
  };
  return (
    <div className="home">
      <div className="home-intro">
        <_navbar />
        <div className="welcome-box">
          <p className="welcoming">Welcome to</p>
          <h1 className="intro-title">MINDFULDAY</h1>

          <div className="slogan-wrapper">
            <span className="intro-slogan-box"></span>
            <h2 className="intro-slogan">
              Mindfulday is an online library of yoga, mindfulness and fitness
              classes combined with a vibrant online community.
            </h2>
          </div>
          <div className="register-btn-link-box">
            <Link className="register-btn" to="/Register">
              I'm ready!
            </Link>
          </div>
        </div>
      </div>

      <div className="yoga-vid-container">
        <h1 className="section-header">Find The Practice That Works For You</h1>
        <h2 className="section-title">Yoga For All</h2>
        <p className="section-description">
          Help provide accessible, consistent, high quality free yoga available
          for all.
        </p>
        <div className="detail">
          <p>Recent Highlights</p>
          <Link className="view-all-btn-link" to="/yoga">
            <p className="view-all-btn">VIEW ALL</p>
          </Link>
        </div>
        <div className="vid-section">
          {yogaVideos.map((yogaVideo) => (
            <div className="yoga-vid" key={yogaVideo.id}>
              <Link to={`/yoga/${yogaVideo.id}`}>
                <figure className="thumbnail-container">
                  <img
                    className="thumbnail-img"
                    alt="default"
                    src={`${yogaVideo.thumbnails}`}
                  />
                  <div className="playbtn-title-wrapper">
                    <span className="playbtn"></span>
                    <span className="thumbnail-title">{yogaVideo.title}</span>
                  </div>
                </figure>
              </Link>
            </div>
          ))}
        </div>

        <h2 className="section-title">Meditation for All</h2>
        <p className="section-description">
          Explore a variety of guided meditation and mindfulness videos designed
          to help bring you back to you.
        </p>
        <div className="detail">
          <p>Recent Highlights</p>
          <Link className="view-all-btn-link" to="/meditate">
            <p className="view-all-btn">VIEW ALL</p>
          </Link>
        </div>
        <div className="vid-section">
          {meditateVideos.map((meditateVideo) => (
            <div className="yoga-vid" key={meditateVideo.id}>
              <Link to={`/meditations/${meditateVideo.id}`}>
                <figure className="thumbnail-container">
                  <img
                    className="thumbnail-img"
                    alt="meditate"
                    src={`${meditateVideo.thumbnails}`}
                  />
                  <div className="playbtn-title-wrapper">
                    <span className="playbtn"></span>
                    <span className="thumbnail-title">
                      {meditateVideo.title}
                    </span>
                  </div>
                </figure>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
