import { useEffect, useState } from 'react';
import './App.css';
import Header from './MyComponent/Header';
import Home from './MyComponent/Home';
import AboutUs from './MyComponent/AboutUs';
import Services from './MyComponent/Services';
import LifeAt from './MyComponent/LifeAt';
import Careers from './MyComponent/Careers';
import Contact from './MyComponent/Contact';
import Login from "./Admin/Login";
import Dashboard from "./Admin/Dashboard";

const routes = {
  "/": Home,
  "/about-us": AboutUs,
  "/services": Services,
  "/life-at": LifeAt,
  "/careers": Careers,
  "/contact-us": Contact,

  "/admin": Login,
  "/administration": Dashboard,
};

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to) => {
    if (to !== window.location.pathname) {
      window.history.pushState({}, '', to);
      setPath(to);
      window.scrollTo(0, 0);
    }
  };

  const normalizedPath = path.toLowerCase().replace(/\/+$/, '') || '/';
  const Page = routes[normalizedPath] || Home;

  const isAdminRoute =
  normalizedPath.startsWith("/admin") ||
  normalizedPath.startsWith("/administration");
  return (
  <>
    {!isAdminRoute && (
      <Header
        currentPath={path}
        navigate={navigate}
      />
    )}

    <Page navigate={navigate} />
  </>
);
}

export default App;






