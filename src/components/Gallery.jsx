import React from "react";
import styles from "./Gallery.module.css"; // Import the CSS module
import firstImage from "../assets/August_2024.jpg";
import secondImage from "../assets/le_grand_october_2024.jpeg";
import thirdImage from "../assets/may_2024.jpeg";
import fourthImage from "../assets/fourth.jpeg";
import fifthImage from "../assets/fifth.jpeg";
import sixthImage from "../assets/sixth.png";
import seventhImage from "../assets/seventh.png";
import eithImage from "../assets/eigth.jpeg";

const images = [
    { src: firstImage, alt: "August 2024 Memory" },
    { src: secondImage, alt: "October 2024 Memory" },
    { src: thirdImage, alt: "May 2024 Memory" },
    { src: fourthImage},
    { src: fifthImage },
    { src: sixthImage },
    { src: seventhImage },
    { src: eithImage},
];

const Gallery = () => {
    return (
        <div className={styles.gallery}>
            <input type="checkbox" className={styles.input} />
            {images.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} className={styles.image} />
            ))}
        </div>
    );
};

export default Gallery;
