import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ProductList from './pages/ProductList';
import { Navbar } from './components/Navbar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { useDealerIdentifikation } from './hooks/useDealerIdentifikations';
type AppProps = {
  dealers?: string[];
};

const routes = [
  { path: '/store', element: <ProductList /> },
  { path: '/', element: <ProductList /> },
];

function App({ dealers = [] }: AppProps) {
  const { dealers: fetchedDealers, loading, error } = useDealerIdentifikation();
  const [activeDealers, setActiveDealers] = useState<string[] | null>(null);

  useEffect(() => {
    if (dealers.length > 0) {
      setActiveDealers(dealers);
    } else {
      setActiveDealers(fetchedDealers.map(dealer => dealer.id));
    }
  }, [dealers, fetchedDealers]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
