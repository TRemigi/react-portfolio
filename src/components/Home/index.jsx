import React, { useState, useEffect } from "react";

function Home() {
  const titles = [
    "creative",
    "efficient",
    "user-friendly",
    "agile",
    "memorable",
    "performant",
  ];

  const [title, setTitle] = useState("creative");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index + 1);
      if (index > 4) {
        setIndex(0);
      }
      setTitle(titles[index]);
    }, 800);
    return () => clearInterval(interval);
  }, [title, index]);

  return (
    <section id="home" className="container-fluid fill-screen">
      <div className="row justify-content-center align-items-center jumbo">
        <div className="col-12 col-lg-8 col-xlg-6 mt-5">
          <h2 className="text-center opaque" style={{ color: "white" }}>
            {title}
          </h2>
          <h2 className="text-center pt-0 opaque" style={{ color: "#96999C" }}>
            Full Stack Web Development
          </h2>
        </div>
      </div>
    </section>
  );
}
export default Home;