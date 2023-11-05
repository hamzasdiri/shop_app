import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter as Router
import Commande from "./Commande/commande";

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <Router> {/* Use BrowserRouter instead of Router */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/commande" element={<Commande />} />
      </Routes>
    </Router>
  </QueryClientProvider>,
  document.getElementById("root")
);
