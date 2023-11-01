import "./App.css";
import Header from "./components/Header";
import Category from "./components/Category";
import logo from "./images/netflix.png";
import moviesData from "./assets/movies";

function App() {
  return (
    <div className="container">
      <Header logo={logo} />
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
