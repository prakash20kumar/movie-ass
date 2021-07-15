import React from "react";
import ReactStars from "react-rating-stars-component";
import { useSelector } from "react-redux";
import styles from "./overview.module.css";

const Overview = () => {
  const { detail } = useSelector((state) => state.movieDetails);

  return (
    <>
      {detail && (
        <div className="row mt-3">
          <div className="col">
            <div className="text-center">
              <ReactStars
                count={10}
                value={detail.vote_average}
                size={22}
                edit={false}
                activeColor={"#f4c10f"}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
              ></ReactStars>
            </div>
            <div className="mt-3">
              <p className={styles.overview_heading}>OVERVIEW</p>
              {detail.overview}
            </div>
          </div>
        </div>
      )}

      {detail && (
        <div className="row mt-3">
          <div className="col-md-3">
            <p className={styles["overview_info-heading"]}>RELEASE DATE</p>
            <p className={styles["overview_info-text"]}>{detail.release_date}</p>
          </div>
          <div className="col-md-3">
            <p className={styles["overview_info-heading"]}>RUN TIME</p>
            <p className={styles["overview_info-text"]}>{detail.runtime} minutes</p>
          </div>
          <div className="col-md-3">
            <p className={styles["overview_info-heading"]}>BUDGET</p>
            <p className={styles["overview_info-text"]}>{detail.budget} $</p>
          </div>
          <div className="col-md-3">
            <p className={styles["overview_info-heading"]}>HOMEPAGE</p>
            <p className={styles["overview_info-text"]}>{detail.homepage}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Overview;
