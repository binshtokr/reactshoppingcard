import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import ProductList from "./pages/ProductList";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

const routes = [
  { path: "/store", element: <ProductList /> },
  { path: "/", element: <ProductList /> },
];

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
