import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import _navbar from "../components/_navbar";
import { ACCESS_TOKEN } from "../constants";
function MeditateDetail() {
  const { id } = useParams();
  const [meditateVideo, setMeditateVideo] = useState([]);

  // 로컬스토리지 엑세스토큰 변수 설정
  const token = localStorage.getItem(ACCESS_TOKEN);

  useEffect(() => {
    getMeditateVideo();
  }, [id]);

  const getMeditateVideo = async () => {
    try {
      let res = await axios.get(`http://localhost:8000/meditations/${id}`);
      setMeditateVideo(res.data);
    } catch (error) {
      console.log(error, "getMeditateVideo detail failed");
    }
  };

  return (
    <div className="single-vid-container">
      <_navbar />
      <div className="single-vid">
        <img className="thumbnail" src={`${meditateVideo.thumbnails}`} />
        <div className="vid-detail-wrapper">
          <h1 className="current-vid-title">{meditateVideo.title}</h1>
          <p className="current-vid-description">{meditateVideo.description}</p>
          <p className="current-vid-length">Length: {meditateVideo.length}</p>
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

export default MeditateDetail;
