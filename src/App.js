import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [movieTitle, setMovieTitle] = useState("");

  const handleInputChange = (evt) => {
    setMovieTitle(evt.target.value);
  };


  useEffect(() => {
    // No api calls if input is empty, either by initial state, or on deletion.
    if (movieTitle !== "") {
      axios
        .get(
          `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}&s=${movieTitle}&type=movie`
        )
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [movieTitle]);

  return (
    <div className="App">
      <header>
        <h1>The Shoppies</h1>
      </header>
      <main>
        <form>
          <label htmlFor="title">Movie Title:</label>
          <input
            name="title"
            placeholder="Type movie title to search..."
            type="text"
            value={movieTitle}
            onChange={(e) => handleInputChange(e)}
          />
        </form>

        <section>
          <article>
            <h2>Results for "{movieTitle}"</h2>
          </article>

          <article>
            <h2>Nominations</h2>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
