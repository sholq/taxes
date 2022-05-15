import {memo} from 'react';
import './App.css';

import Header from "./Header";
import SwitchMain from "./SwitchMain";
import Footer from "./Footer";

const App = memo(() => {
  return (
    <div className="page">
      <Header />
      <SwitchMain />
      <Footer />
    </div>
  );
});

export default App;
