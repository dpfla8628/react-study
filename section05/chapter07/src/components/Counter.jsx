import { useState } from "react";

const Counter = () => {
  // count state만 담당하도록 분리한 컴포넌트.
  // 리렌더링 조건 요약:
  // 1) 내 state가 바뀔 때
  // 2) 부모가 내려준 props가 바뀔 때
  // 3) 부모 컴포넌트가 리렌더링될 때
  // 참고: "자식 state 변경 => props 자동 변경"은 아님( props는 부모가 내려주는 값 ).
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          // setCount로 state를 바꿔야 화면 숫자도 동기화된다.
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
