import './App.scss';
import Header from './Components/Header/Header';
import Admin from './Pages/Admin/Admin';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Admin />
    </div>
  )
}

export default App;