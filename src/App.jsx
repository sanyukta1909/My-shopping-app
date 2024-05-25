import Components from "./commonComponents/Components"
import { BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Header from "./commonComponents/header/Header"
import Navbar from "./commonComponents/header/Navbar"
import Homepage from "./commonComponents/components/Homepage"

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </Router>
 
    </>
  )
}

export default App
