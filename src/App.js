import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [movieTitle, setMovieTitle] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleInputChange = (evt) => {
    setMovieTitle(evt.target.value);
  };


  useEffect(() => {
    // No api calls if input is emppty or less than 3 characters.
    if (movieTitle.length > 3) {
      axios
        .get(
          `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}&s=${movieTitle}&type=movie`
        )
        .then((res) => {
          setSearchResult(res.data.Search)
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
            placeholder="Type movie title to search. At least 3 characters..."
            type="text"
            value={movieTitle}
            onChange={(e) => handleInputChange(e)}
            className="searchBox"
          />
        </form>

        <section>
          <article>
            <h2>Results for "{movieTitle}"</h2>
            <div>
            {
              searchResult.data
            }
            </div>
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
