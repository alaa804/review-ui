import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ReviewList from "./components/ReviewList";
import ReviewStats from "./components/ReviewStats";
import ReviewForm from "./components/ReviewForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import { ReviewProvider } from "./context/ReviewContext";

const App = () => {
  return (
    <ReviewProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <ReviewForm />
                  <ReviewStats />
                  <ReviewList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </ReviewProvider>
  );
};

export default App;
