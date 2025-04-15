const IntroPage = () => {
    return (
      <div
        style={{
          backgroundColor: "rgba(24, 24, 24, 1)",
          position: "relative",
          width: "100vw",
          height: "100vh",
        }}
      >
        <img
          src="/img/img-background1.png"
          alt="Intro background"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <img
          src="/img/001.png"
          alt="Overlay graphic"
          style={{
            position: "absolute",
            top: "50%",
            right: "0%",
            transform: "translate(-50%, -50%) rotate(-20deg)",
            width: "300px", // adjust as needed
          }}
        />
        <img
        src="/img/002.png"
        style={{
            position: "absolute",
            top: "20%",
            right: "25%",
            transform: "translate(-50%, -50%) rotate(10deg)",
            width: "300px", // adjust as needed
          }}/>
      </div>
    );
  };
  
  export default IntroPage;
  