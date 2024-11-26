import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import _navbar from "../components/_navbar";
import ReactPaginate from "react-paginate";
import './meditate.css'

function Meditate() {
  const [meditateVideo, setMeditateVideo] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const videosPerPage = 5;
  const pagesVisited = pageNumber * videosPerPage;

  const displayVideos = meditateVideo
  .slice(pagesVisited, pagesVisited + videosPerPage)
  .map((vid) => {
    return (


        <div
          className="content-card"
          key={vid.id}
          onMouseEnter={() => setMeditateVideo((prevState) =>
            prevState.map((video) =>
              video.id === vid.id
                ? { ...video, isHovered: true }
                : video
            )
          )}
          onMouseLeave={() => setMeditateVideo((prevState) =>
            prevState.map((video) =>
              video.id === vid.id
                ? { ...video, isHovered: false }
                : video
            )
          )}
        >
          <Link className="content-link" to={`/meditations/${vid.id}`}>
            <h2 className="content-title">{vid.title}</h2>
            <img
              className="content-thumbnail"
              src={`${vid.thumbnails}`}
              alt={`${vid.title} thumbnail`}
            />
            <div
              className={`description ${
                vid.isHovered ? "visible" : ""
              }`}
            >
              <p>{vid.description}</p>
            </div>
            <p className="content-length">{vid.length}</p>
          </Link>
        </div>


    )
  })

const pageCount = Math.ceil(meditateVideo.length / videosPerPage);

const changePage = ({ selected }) => {
  setPageNumber(selected);
}


  useEffect(() => {
    getMeditateVideo();
  }, []);

  const getMeditateVideo = async () => {
    try {
      let res = await axios.get("/meditations/");
      setMeditateVideo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="meditate">
      <_navbar />
      <div className="content-wrapper">
        {/* {meditateVideo.map((vid) => (
          <div
            className="content-card"
            key={vid.id}
            onMouseEnter={() =>
              setMeditateVideo((prevState) =>
                prevState.map((video) =>
                  video.id === vid.id ? { ...video, isHovered: true } : video
                )
              )
            }
            onMouseLeave={() =>
              setMeditateVideo((prevState) =>
                prevState.map((video) =>
                  video.id === vid.id ? { ...video, isHovered: false } : video
                )
              )
            }
          >
            <Link className="content-link" to={`/meditations/${vid.id}`}>
              <h2 className="content-title">{vid.title}</h2>
              <img
                className="content-thumbnail"
                src={`${vid.thumbnails}`}
                alt={`${vid.title} thumbnail`}
              />
              <div className={`description ${vid.isHovered ? "visible" : ""}`}>
                <p>{vid.description}</p>
              </div>
              <p className="content-length">{vid.length}</p>
            </Link>
          </div>
        ))} */}
        {displayVideos}
      </div>
      <div className="pagination-wrapper">
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      </div>
    </div>
  );
}

export default Meditate;
