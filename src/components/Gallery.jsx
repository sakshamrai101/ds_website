import React from "react";
import styles from "./Gallery.module.css"; // Import the CSS module
import firstImage from "../assets/August_2024.jpg";
import secondImage from "../assets/le_grand_october_2024.jpeg";
import thirdImage from "../assets/may_2024.jpeg";

const images = [
    { src: firstImage, alt: "August 2024 Memory" },
    { src: secondImage, alt: "October 2024 Memory" },
    { src: thirdImage, alt: "May 2024 Memory" },
    { src: "https://picsum.photos/id/106/300/300", alt: "Some pink flowers" },
    { src: "https://picsum.photos/id/136/300/300", alt: "Big rocks with some trees" },
    { src: "https://picsum.photos/id/1039/300/300", alt: "A waterfall, lots of trees, and a great view" },
    { src: "https://picsum.photos/id/110/300/300", alt: "A cool landscape" },
    { src: "https://picsum.photos/id/1047/300/300", alt: "Inside a town between two big buildings" },
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
