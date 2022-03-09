import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Switch,Route } from 'react-router-dom/cjs/react-router-dom.min';
import Movies from "./pages/Movies";
import MoviesDetails from "./pages/MovieDetails";
import NotFound from "./pages/Notfound";
import Favorites from './pages/Favorites';
import { useSelector } from 'react-redux';
function App() {
  const language = useSelector((state) => state.language.lang);
  console.log(language)
  return (
     <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route path={"/"} exact component={Movies}/>
          <Route path={"/movie-details/:id"} exact component={MoviesDetails} />
          <Route path={"/favorites"} exact component={Favorites} />
          <Route path={"*"} component={NotFound} /> 
        </Switch>
</BrowserRouter>

  );
}

export default App;
