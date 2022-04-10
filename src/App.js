import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AddTable from "./components/pages/AddTable";

import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFount";
import SingleTable from "./components/pages/SingleTable";
import Footer from "./components/views/Footer";
import Header from "./components/views/Header";
import { fetchTables } from "./Redux/tablesRedux";


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => dispatch(fetchTables()), [dispatch])
  
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/table/:id" element={<SingleTable/>} />
        <Route path="*" element={<NotFound/>}/>
        <Route path="/table/add" element={<AddTable/>}></Route>
      </Routes>
      <Footer/>
    </Container>
  );
}

export default App;
