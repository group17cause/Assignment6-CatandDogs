import './Components/SearchDogPicture'
import SearchDogPicture from './Components/SearchDogPicture';
import SearchCatPicture from './Components/SearchCatPicture'
import "./App.css"

function App () {
    return (
        <div className = "container">
            <SearchDogPicture/>
            <SearchCatPicture/>
        </div>
    );
  }
  
  export default App;