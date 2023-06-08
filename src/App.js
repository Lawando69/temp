import './App.css';
import Contact from '../Contact/Contact.js'


function App() {
  return (
    <div className="App">
      <header className='application-header'>
        <button>
            <img alt="Logo"/>
        </button>
        <div>
          <nav>
            <button>Home</button>
            <button>Offers</button>
            <button>Mens</button>
            <button>Womens</button>
            <button>Kids</button>
            <button>Costume design</button>
            <button>About</button>
            <button>Contact</button>

          </nav>
        </div>
        <input placeholder='Search...'/>
      </header>
    </div>
  );
}

export default App;



