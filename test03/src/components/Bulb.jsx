import { useState } from "react";

const Bulb = () => {
  // light state만 담당하도록 분리한 컴포넌트.
  // React는 state 값이 바뀔 때 컴포넌트를 다시 렌더링한다.
  const [light, setLight] = useState("OFF");

  console.log(light);
  return (
    <div>
      {/* state(light)가 바뀌면 조건부 렌더링 결과(ON/OFF UI)도 함께 갱신된다. */}
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}

      <button
        onClick={() => {
          // 일반 let 변수 변경만으로는 화면이 갱신되지 않지만,
          // setState(setLight)를 호출하면 리렌더링이 발생한다.
          setLight(light === "ON" ? "OFF" : "ON");
        }}
      >
        {light === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
  );
};

export default Bulb;
