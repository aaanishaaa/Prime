import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
  </BrowserRouter>
  );
};
export default App;
