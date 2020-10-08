import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

function AddMovie() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [
      ...prevMovies,
      { name: name, price: price, id: Math.random() * 1000 },
    ]);
    setName("");
    setPrice("");
  };

  return (
    <form className="form" onSubmit={addMovie}>
      <div className="input-form">
        <input
          type="text"
          name="name"
          value={name}
          onChange={updateName}
          placeholder="Enter the Name..."
        />
        <input
          type="text"
          name="price"
          value={price}
          onChange={updatePrice}
          placeholder="Enter the Price..."
        />
      </div>
      <button>Add</button>
    </form>
  );
}

export default AddMovie;
