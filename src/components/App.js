import {useState, useEffect} from 'react';
import '../App.css';

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import {throttle} from "../utils/throttle";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  function disableLinks() {
    const links = document.querySelectorAll('a');
    links.forEach(item => {
      item.addEventListener('click', (evt) => {
        evt.preventDefault();
      });
    });
  }

  function handleFooterResize() {
    throttle(() => {
      if (window.innerWidth < 475) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
      disableLinks();
    }, 150);
  }

  window.addEventListener('resize', handleFooterResize);

  useEffect(() => {
    handleFooterResize();
  }, [])

  return (
    <div className="page">
      <Header />
      <Main />
      <Footer isMobile={isMobile}/>
    </div>
  );
}

export default App;
