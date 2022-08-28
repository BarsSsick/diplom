import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { LoginPage } from "./pages/login-page/login";
import { RegisterPage } from "./pages/register-page/register";
import { SingInPage } from "./pages/singin-page/singin";
import { LikePage } from "./pages/like-page";
import { BookPage } from "./pages/book-page";
import { SearchPage } from "./pages/search-page/search-page";
import { OrderPage } from "./pages/order-page";
import { HomePage } from "./pages/home-page";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/singin" element={<SingInPage />} />
            <Route path="/like" element={<LikePage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/:title" element={<BookPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
