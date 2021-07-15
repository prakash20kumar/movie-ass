import React from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { hideFavoriteMovies, removeMovieFromFavorite, showFavoriteMovies } from "./favorite.action";
import styles from "./favorite.module.css";
import { NavLink } from "react-router-dom";

function Favorite() {
  const { favMovies, show_favorite } = useSelector((state) => state.favorite);

  const dispatch = useDispatch();
  const handleOpenFavorite = () => {
    dispatch(showFavoriteMovies());
  };

  const hideFavorite = () => {
    dispatch(hideFavoriteMovies());
  };

  const handleRemoveFavorite = (id) => {
    dispatch(removeMovieFromFavorite(id));
  };

  return (
    <div>
      <Button aria-controls="cart-menu" aria-haspopup="true" onClick={handleOpenFavorite} color="inherit">
        <i className={favMovies.length === 0 ? "far fa-heart" : "fa fa-heart"}></i>
      </Button>
      {favMovies && (
        <Modal show={show_favorite} onHide={hideFavorite} size="md">
          <Modal.Header closeButton>
            <Modal.Title className={styles.modal_title}>FAVORITE</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {favMovies.length === 0 && <h5 style={{ color: "black" }}>No Favorite Movie Found...</h5>}
            {favMovies.map((movie, i) => {
              return (
                <Container key={i}>
                  <Row>
                    <Col>
                      <p className={styles.content}>
                        <NavLink to={`/movie/${movie.id}`}>
                          <span onClick={hideFavorite} className={styles.fav_title}>
                            {movie.title}
                          </span>
                        </NavLink>
                        <span onClick={() => handleRemoveFavorite(movie.id)} className={styles.del_icon}>
                          <i className="fa fa-trash-o"></i>
                        </span>
                      </p>
                    </Col>
                  </Row>
                </Container>
              );
            })}
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
}

export default Favorite;
