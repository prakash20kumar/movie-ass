import { Modal } from "bootstrap";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import React from "react";

const MoviePlayerModal = (props) => {
  const { videos } = useSelector((state) => state.movieDetails);

  if (videos) {
    console.log(videos.results[0].key);
  }
  const youtubeUrl = "https://www.youtube.com/watch?v=";
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{ color: "#000000", fontWeight: "bolder" }}>
          {/* {detail.title} */}GH
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#000000" }}>
        <ReactPlayer className="container-fluid" url={youtubeUrl + videos.results[0].key} playing width="100%" />
      </Modal.Body>
    </Modal>
  );
};

export default MoviePlayerModal;
