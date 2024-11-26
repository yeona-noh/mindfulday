import React, { useState, useEffect } from "react";
import axios from "axios";
import _navbar from "../components/_navbar";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "./yoga.css";

function Yoga() {
  const [yogaVideo, setYogaVideo] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const videosPerPage = 5;
  const pagesVisited = pageNumber * videosPerPage;

  const displayVideos = yogaVideo
    .slice(pagesVisited, pagesVisited + videosPerPage)
    .map((vid) => {
      return (


          <div
            className="content-card"
            key={vid.id}
            onMouseEnter={() => setYogaVideo((prevState) =>
              prevState.map((video) =>
                video.id === vid.id
                  ? { ...video, isHovered: true }
                  : video
              )
            )}
            onMouseLeave={() => setYogaVideo((prevState) =>
              prevState.map((video) =>
                video.id === vid.id
                  ? { ...video, isHovered: false }
                  : video
              )
            )}
          >
            <Link className="content-link" to={`/yoga/${vid.id}`}>
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

  const pageCount = Math.ceil(yogaVideo.length / videosPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }
  

  useEffect(() => {
    getYogaVideo();
  }, []);

  const getYogaVideo = async () => {
    try {
      let res = await axios.get("/yoga/");
      setYogaVideo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="yoga">
      <_navbar />
      <div className="content-wrapper">
      {displayVideos}
      {/* <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      /> */}
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
      {/* 
        {yogaVideo.map((vid) => (
          <div
            className="content-card"
            key={vid.id}
            onMouseEnter={() => setYogaVideo((prevState) =>
              prevState.map((video) =>
                video.id === vid.id
                  ? { ...video, isHovered: true }
                  : video
              )
            )}
            onMouseLeave={() => setYogaVideo((prevState) =>
              prevState.map((video) =>
                video.id === vid.id
                  ? { ...video, isHovered: false }
                  : video
              )
            )}
          >
            <Link className="content-link" to={`/yoga/${vid.id}`}>
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
        ))}
      </div> */}
      
    </div>
  );
}

export default Yoga;
