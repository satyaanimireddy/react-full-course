import React from "react";
import "./practice2.css";

const Practice2 = () => {
  return (
    <section className="movie-container">
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
    </section>
  );
};
const Movie = () => {
  return (
    <article className="each-movie">
      <Image />
      <Title />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://www.shutterstock.com/image-photo/babby-sleep-600w-192743075.jpg"
      style={{ width: "400px" }}
      alt="baby"
    />
  );
};
const Title = () => {
  const styles = {
    heading: {
      color: "blue",
      fontSize: "30px",
    },
    small: {
      color: "red",
      fontSize: "20px",
    },
  };
  return (
    <section>
      <h3 className="heading">
        hello baby
        {/* <span style={styles.small}>small</span> */}
      </h3>
    </section>
  );
};

export default Practice2;
