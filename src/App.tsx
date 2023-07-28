import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import Quotes from "@/containers/Quotes/Quotes";
import AddQuote from "@/containers/AddQuote/AddQuote";
import EditQuote from "./containers/EditQuote/EditQoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Quotes />} />
          <Route path="quotes" element={<Quotes />} />
          <Route path="quotes/:category" element={<Quotes />} />
          <Route path="quotes/add" element={<AddQuote />} />
          <Route path="quotes/:id/edit" element={<EditQuote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
