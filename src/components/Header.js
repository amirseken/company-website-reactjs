function Header() {
  return (
    <header>
      <link rel="stylesheet" href="../index.css"/>

      <video src={require("../public/video.mp4")} loop autoPlay muted></video>

      <img className= "companyImage" width = "800px" height = "300px"
      src={require("../public/img/Systemiai cover (2).png")}></img>
      <div className="row slogan">
        <i>Let's Think System.</i>
      </div>

    </header>
  );
}
export default Header;
