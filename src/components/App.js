import React from "react";
import ProductsList from "./products-list/ProductsList";
import NotFound from "./not-found/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
