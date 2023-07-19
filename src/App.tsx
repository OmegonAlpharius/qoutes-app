import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import Quotes from "@/containers/Quotes";
import AddQuotes from "@/containers/AddQuotes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Quotes />} />
          <Route path="quotes" element={<Quotes />} />
          <Route path="quotes/:category" element={<Quotes />} />
          <Route path="quotes/add" element={<AddQuotes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
