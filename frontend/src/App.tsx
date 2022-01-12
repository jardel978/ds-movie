import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Listing } from "pages/Listing";
import { Form } from "pages/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path=":movieId" element={<Form />} />
        <Navbar />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
