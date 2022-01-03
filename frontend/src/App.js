import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import IndexPage from "./pages/IndexPage";
import About from "./pages/About";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import Reviews from './pages/Reviews';
import ReviewDetail from './pages/ReviewDetail';
const App = () => {
  return (
    <div className='App'>
    <Router>
      <Layout>
     <Routes>
       <Route exact path="/" element={<IndexPage/>}/>
       <Route exact path="/about" element={<About/>}/>
       <Route exact path="/contact" element={<Contact/>}/>
       <Route exact path="/category" element={<Category/>}/>
       <Route exact path="/reviews/" element={<Reviews/>}/>
       <Route exact path="/reviewdetail/:id" element={<ReviewDetail/>}/>
     </Routes>
     </Layout>
    </Router>
    </div>
  );
}
export default App;
