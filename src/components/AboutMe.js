import React from "react";
import PropTypes from "prop-types";
//local import below this line
import styles from "../styles/AboutMe.module.css";
import myphoto from "../assets/20191012_160615.jpg";

function AboutMe({ name = "name here", food = "food here", number = 6 }) {
    return (
        <div className={styles.box}>
            <img className={styles.box__image} src={myphoto} />
            <h4> Name: {name}</h4>
            <h5> Favorite food: {food}</h5>
            <h5> Favorite number: {number}</h5>
        </div>
    );
}

AboutMe.propTypes = {
    name: PropTypes.string,
    food: PropTypes.string,
    number: PropTypes.number
};

export default AboutMe;
