import { Link } from "react-scroll";

function Navbar({changeState}) {
 
  function openBar(e) {
    changeState(e.target.innerHTML);
    const bar = document.querySelector(".bar");

    bar.classList.toggle("opened");
  }

  return (
    <nav className="navbar" background-color="black"> 
      <div className="container">
      <div className="row">

          <ul className="bar">
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                to="mainBody"
              >
                Home
              </Link>
            </li>
            
            <li>
              <Link
                onClick={openBar}
                to="mainBody"
                spy={true}
                smooth={true}
                duration={1000}
               
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                to="mainBody"
                spy={true}
                smooth={true}
                duration={1000}
               
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                Contact
              </Link>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
