import "./App.css";
import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        
          <Route exact path="/" element={<Home></Home>} />
          <Route path="/cart" element={<CartPage></CartPage>} />
        
      </Routes>
    </div>
  );
}

export default App;
