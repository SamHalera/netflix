import "./App.css";
import Category from "./components/Category";
import logo from "./images/netflix.png";
import moviesData from "./assets/movies";

function App() {
  return (
    <div className="container">
      <header>
        <img className="logo" src={logo} alt="" />
      </header>
      <div className="movies-container">
        {moviesData.map((movie, index) => {
          return (
            <Category key={index} name={movie.category} images={movie.images} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
