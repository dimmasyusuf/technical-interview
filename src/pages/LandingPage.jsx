import bgMie from "../assets/img/mieee.jpg";

const style = {
  backgroundImage: `url(${bgMie})`,
  width: "100vw",
  height: "100vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

function LandingPage() {
  return (
    <>
      <div style={style}>
        <h1 style={{ color: "white" }}>
          <span style={{ color: "red" }}>Indomie, </span>Flavor Favored by the
          World
        </h1>
      </div>
    </>
  );
}

export default LandingPage;
