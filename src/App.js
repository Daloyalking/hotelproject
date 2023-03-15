import './App.css';
import City from './components/city';
import Footer from './components/footer';
import Header from './components/Header';
import Reservation from './components/relaxing';
import Resort from './components/resort';
import Vacation from './components/vacation';

function App() {
  return (
    <div className="App">
      <Header/>
      <Vacation/>
      <City/>
      <Resort/>
      <Reservation/>
      <Footer/>  
    </div>
  );
}

export default App;
