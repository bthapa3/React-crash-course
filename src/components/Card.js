import React from "react";
import PropTypes, { func } from "prop-types";
///separating local imports from dependencies
import styles from "../styles/Card.module.css";
import AboutMe from "./AboutMe";
import QuoteBox from "../components/QuoteBox";

function Card({ ronism, getQuote }) {
    return (
        <div className={styles.card}>
            <AboutMe name="Bishal Thapa" food="momo" number={11} />
            <QuoteBox ronism={ronism} getQuote={getQuote} />
        </div>
    );
}

Card.propTypes = {
    ronism: PropTypes.string,
    getQuote: PropTypes.func.isRequired
};

export default Card;
