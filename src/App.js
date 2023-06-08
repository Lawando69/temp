import './App.css';
import Home from './Pages/Home.js'
import About from './Pages/About.js'
import Contact from './Pages/Contact.js'
import Women from './Pages/Women.js'
import Kids from './Pages/Kids.js'
import Men from './Pages/Men.js'
import CostumeDesign from './Pages/Costume-design.js' 

function App() {
  const { isAdmin } = useSelector((state) => state.user);

  return (
    <Router>
      {
        <Switch>
          {isAdmin ? (
            <>
              <Topbar />
              <div className="container">
                
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/About">
                  <About />
                </Route>
                <Route path="/Contact">
                  <Contact />
                </Route>
                <Route path="/Women">
                  <Women />
                </Route>
                <Route path="/Kids">
                  <Kids />
                </Route>
                <Route path="/Kids">
                  <Kids />
                </Route>
                <Route path="/newproduct">
                  <NewProduct />
                </Route>
              </div>
            </>
          ) : (
            <Redirect to="/login" />
          )}
        </Switch>
      }
    </Router>
  );
}

export default App;




