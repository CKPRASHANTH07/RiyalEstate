import { BrowserRouter,Routes,Route } from "react-router-dom"
import Signin from "./pages/Signin"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"
import About from "./pages/About"
import Header from "./components/Header"
import Home from "./pages/Home";
const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/About" element={<About />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App