import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import _navBar from "../components/_navbar";
import _Footer from "../components/_Footer";
import "./yogadetail.css";
import { ACCESS_TOKEN } from "../constants";
function YogaDetail() {
  const { id } = useParams();
  const [yogaVideo, setYogaVideo] = useState([]);
  // 로컬스토리지 엑세스코드 변수설정
  const token = localStorage.getItem(ACCESS_TOKEN);

  useEffect(() => {
    getYogaVideo();
  }, [id]);

  const getYogaVideo = async () => {
    try {
      let res = await axios.get(`http://localhost:8000/yoga/${id}`);
      setYogaVideo(res.data);


    } catch (error) {
      console.log(error, "getYogaVideo detail failed");
    }
  };

  return (
    <div className="single-vid-container">
      <_navBar />
      <div className="single-vid">
        <img className="thumbnail" src={`${yogaVideo.thumbnails}`} />
        <div className="vid-detail-wrapper">
          <h1 className="current-vid-title">{yogaVideo.title}</h1>
          <p className="current-vid-description">{yogaVideo.description}</p>
          <p className="current-vid-length">Length: {yogaVideo.length}</p>

          {/* tenery statement를 써서 localstorage에 access코드가 저장되어 있으면 그냥 play button 뜨도록 설정 */}
          {token ? (
            <button className="reg-play-btn">PLAY</button>
          ) : (
            <Link to="/register">
              <button className="reg-play-btn">Register to watch</button>
            </Link>
          )}
          {/* <Link to="/register">
            <button className="reg-play-btn">Register to watch</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default YogaDetail;
