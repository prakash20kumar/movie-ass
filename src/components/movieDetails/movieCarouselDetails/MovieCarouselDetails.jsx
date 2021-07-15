import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import styles from "./movieCarouselDetails.module.css";

const MovieCarouselDetails = () => {
  const { detail } = useSelector((state) => state.movieDetails);
  const { videos } = useSelector((state) => state.movieDetails);
  const [isOpen, setIsOpen] = useState(false);

  const MoviePlayerModal = (props) => {
    const youtubeUrl = "https://www.youtube.com/watch?v=";
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className={styles.modal_title}>
            {detail.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modal_body}>
          <ReactPlayer className="container-fluid" url={youtubeUrl + videos.results[0].key} playing width="100%" />
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <>
      {detail && (
        <div className="row">
          <MoviePlayerModal
            show={isOpen}
            onHide={() => {
              setIsOpen(false);
            }}
          ></MoviePlayerModal>
          <div className={`col text-center ${styles.carousel}`}>
            <img
              className="img-fluid"
              src={`http://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
              alt={detail.title}
            />
            <div className="carousel-center">
              <i onClick={() => setIsOpen(true)} className={`far fa-play-circle ${styles.carousel_icon}`} />
            </div>
            <div className={`carousel-caption ${styles.carousel_caption}`}>{detail.title}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCarouselDetails;
