const Background = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(24, 24, 24, 1)",
        position: "absolute", // 👈 변경
        width: "100%",
        height: "100vh",
        zIndex:-1, // 👈 콘텐츠 뒤로 보내기
        overflow: "hidden",
      }}
    >
      <img
        src="/img/img-background1.webp"
        alt="Intro background"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
        }}
      />
      <img
        src="/img/paint.webp"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
        }}
      />
      <img
        src="/img/001.webp"
        alt="Overlay graphic"
        style={{
          position: "absolute",
          top: "50%",
          right: "0%",
          transform: "translate(-50%, -50%) rotate(-20deg)",
          width: "300px",
        }}
      />
      <img
        src="/img/002.webp"
        style={{
          position: "absolute",
          top: "20%",
          right: "15%",
          transform: "translate(-50%, -50%) rotate(10deg)",
          width: "300px",
        }}
      />
    </div>
  );
};


export default Background