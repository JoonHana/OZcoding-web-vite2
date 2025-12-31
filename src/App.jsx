import { useState } from "react";
import "./App.css";
import img111 from "./img/img.png";
function App() {
  return (
    <>
      <div>
        <a
          href="https://www.sac.or.kr/site/main/show/show_view?SN=78576"
          target="_blank"
        >
          <img src={img111} alt="리사이틀" />
        </a>
      </div>
      <h3> 문예진 & 최이란 듀오 리사이틀</h3>
      <h4> 2026. 02. 12 (목) 19:30 </h4>
      <h4> 예술의 전당 인춘아트홀 </h4>
    </>
  );
}

export default App;
