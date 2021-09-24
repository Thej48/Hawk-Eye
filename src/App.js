import './App.css';
import Header from './Components/Header/Header';
import SimpleBottomNavigation from './Components/MainNav';
import { BrowserRouter } from "react-router-dom";
import { Container } from '@mui/material';
import { Route, Switch } from 'react-router';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';

import ScrollToTop from './Components/ScrollToTop/ScrollToTop';


function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />

      <Header />
      <div className="App">
        <Container>
          <Switch>
            <Route path='/' component={ Trending } exact/>
            <Route path='/movies' component={ Movies }/>
            <Route path='/series' component={ Series }/>
            <Route path='/search' component={ Search }/>
          </Switch>
        </Container>
      </div>

      <SimpleBottomNavigation />

    </BrowserRouter>
  );
}

export default App;
