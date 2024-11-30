import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Cards from './Cards';
import img from "./assets/react.svg"

function App(): JSX.Element {
  return (
    <Cards url={img}/>
  )
}

export default App;
