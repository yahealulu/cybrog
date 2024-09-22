import "./App.css"
import { BrowserRouter as Router ,Route,Routes} from "react-router-dom"
import {Container} from './Components/index'
import {Header,Footer,Hero,Mostpopular,GamingLibrary} from './sections/index'
import {Home,Profile} from "./pages/index"
const App=()=>
    {
        return( <>
        <Router basename="/">
        <Header/>
          <Container>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/profile" element={<Profile/>}/>
            </Routes>
            </Container>
            <Footer/>
        </Router>
      
          </> 
    
        );
    }
export default App