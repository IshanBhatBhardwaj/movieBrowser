import './App.css';
import {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom' 
import NavBar from "./components/navbar"
import Home from "./components/home"
import AboutView from './components/aboutView';
import MovieView from './components/MovieView.js'
import errorPage from './components/404';
import NoResults from './components/noResults';


import Search from './components/search'

function App() {

  const [ searchResults, setSearchResults] = useState([]);
  const [ searchText, setSearchText] = useState('');

  useEffect(() => {
    if(searchText){

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=45e3e92747353d02484018a30548fa3d&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data => {

        if(data.results == undefined) {
          setSearchResults([])
        }

        else if(data.results.length) {
          setSearchResults(data.results)
        }
        
        else {
        
          setSearchResults([])
          
        }
        
      })
    }
  }, [searchText])

  return (
    <div>

      <NavBar searchText={searchText} setSearchText={setSearchText} />
  
      <Switch>

        <Route exact path="/" component={Home} />

        <Route path="/movies/:id" component={MovieView} />

        <Route path="/search">
            <Search searchWord={searchText} searchResults={searchResults} />
        </Route>

        <Route path="/about" component={AboutView} />

        <Route path="*" component={errorPage}/>

          

      </Switch>





    </div>


  );
}

export default App;
