import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  const [clickState, setClickState] = useState('Home');
  const clickStateChanger = (state) => {
    setClickState(state)
;  }
  return (
    <> 
      
      <Navbar 
        changeState={clickStateChanger}
      />
      
      <Header />
     
      <Main 
        clickState={clickState}
      />
      <Footer 
        changeState={clickStateChanger}
      />
     
    </>
  );
}

export default App;
