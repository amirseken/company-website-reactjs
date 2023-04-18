import { Link, animateScroll as scroll } from 'react-scroll'

function Footer({changeState}) {

  function openBar(e) {
    if (e.target.innerHTML === 'SYSTEMIAI' || e.target.innerHTML === "Let's Think System."){
      changeState('Home');
    }else{
      changeState(e.target.innerHTML);
    }
    const bar = document.querySelector(".bar");

    bar.classList.toggle("opened");  
  }

  return (
    <footer>
      <div className="container">
        <div className="row" >
              <div className="col-md-3">
              <ul className="bar">
                <li>
                  <Link
                    className="footer-title"
                    onClick={openBar}
                    to="mainBody"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  
                  >
                  <h1 className="logo">SYSTEMIAI</h1>
                  <i className="footer-text">
                  Let's Think System.
                  </i>
                  </Link>
                </li>
                </ul>
              </div>
              <div className="col-md-3" >
              <ul className="bar">
                <li>
                  <Link
                    className="footer-title"
                    onClick={openBar}
                    to="mainBody"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  
                  >
                    Products
                  </Link>
                </li>
                </ul>
              </div>
              <div className="col-md-3">
              <ul className="bar">
                <li>
                  <Link
                    className="footer-title"
                    onClick={openBar}
                    to="mainBody"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  
                  >
                    Careers
                  </Link>
                </li>
                </ul>
              </div>
              <div className="col-md-3 contactFoot">
                <Link  className="footer-title"
                          onClick={openBar}
                          spy={true}
                          smooth={true}
                          duration={1000}
                          to="mainBody"
                    > Contact</Link>
                <a href = "mailto:contact@systemiai.info">contact@systemiai.info</a>
              </div>
            </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;
