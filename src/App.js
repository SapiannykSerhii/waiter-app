import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFount";
import SingleTable from "./components/pages/SingleTable";
import Footer from "./components/views/Footer";
import Header from "./components/views/Header";


const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/table/:id" element={<SingleTable/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Container>
  );
}

export default App;
