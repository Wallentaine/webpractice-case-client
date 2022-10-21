import Navbar from "./components/Nav/Navbar/Navbar";
import AppRouter from "./components/AppRouter/AppRouter";
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>

    </div>
  )
}

export default App;
