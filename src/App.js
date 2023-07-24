import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import home from "./components/Home";
import login from "./components/Login";
import register from "./components/Register";
import NoPage from "./components/NoPage";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </> 
  )
}
export default App;