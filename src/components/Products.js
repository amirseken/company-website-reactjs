import Card from "./Card";
function Products() {



    return (
      <>
  
  
        <div style={{marginTop:'5rem',width:'100%',height:'10px'}} className="about-scroll"></div>
   
    
        <div className="container about ">
          <div className="row appmodel">
            
              <h2 className="main-title about-h2">Approach Model</h2>
              <img alt="about" width="300px" height="100px" src={require("../public/img/Appmodel.png")} className="img-fluid1" />

         
          </div>
        </div>
  
        <div className="container about">
            <div className="col-md-9">
            <h2 className="main-title about-h2">Business Model Research</h2>
                <div className="row">

                    <div className="col-md-4 mb-2">
                      <Card title="Research" img="card3.png" text="We focus our research on technical market trends. " />
                    </div>
                    <div className="col-md-4 mb-2">
                      <Card title="Abstraction" img="card2.png" text="We believe that people need more products that add value to their existing need." />
                    </div>
                    <div className="col-md-4 mb-2">
                      <Card title="Constructing" img="card1.png" text="Easy to use." />
                    </div>
                </div>
            </div>
        </div>
  
        <div className="container about">
          <div className="row" style ={{display:"block"}}>
           
           
              <h2 className="main-title about-h2">Products</h2>
              <p className="main-p">
              <b>PADAUS</b> (PREDICTIVE ANALY TICAL DATA ACCESSIBILITY USER SYSTEM).
This project aim is to optimize the way we commute by making use of available technologies
on the market which we can harness to provide safer and more efficient commutes for
drivers and users of public and private transportation. The analyzing and collecting of data
relating to the vehicle, driver & passenger behaviors, is used in order to predict and prevent
dangerous situations. Along with a strong focus on rapid connectivity between the smart
system and emergency authorities, the goal is to be one step ahead of every potentially
dangerous event. Additionally, the extensive data gathered by our system will have the
potential to provide insightful statistics about the way we commute or traveling which can be
used for the good of public road safety and in many sectors.
Status: In development.
              </p>
            </div>
          
        </div>
        
        <div className="container about">
          <div className="row" style ={{display:"block"}}>
            
          
              <h2 className="main-title about-h2">SIPA Program Division</h2>
              <a className = "sipa" href="/documents/SIPA Program Division.pdf"
              target="_blank" download="SIPA.pdf" >Download document here.</a>
              <p className = "sipa">Interested in collaborating
               with us or in one of our positions at SIPA?</p>
              <p className = "sipa"> Please tell us about your 
               interest by sending an email to <a style = {{color:"black"}}href = "mailto:contact@systemiai.info"
                >contact@systemiai.info</a>.</p>
          </div>
        </div>
  
      </>
    );
  }
  export default Products;
  