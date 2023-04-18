import About from '../components/About';

import Contact from '../components/Contact';
import Products from '../components/Products';
import Careers from '../components/Careers';

function Main({clickState}) {
  console.log("Current click state:"+clickState);
  return (
    <>
      <main className="mainBody">
        {clickState === 'Home' &&
          <About />
        }
        {clickState === 'Products' &&
          <Products />
        }
        {clickState === 'Careers' &&
          <Careers />
        }
        
        <Contact />
        
      </main>
    </>
  );
}
export default Main;
