import "./App.css";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

function App() {
  // state가 바뀌면 해당 state를 가진 컴포넌트가 리렌더링된다.
  // light/count를 App에 함께 두면, 둘 중 하나만 바뀌어도 App 전체가 다시 렌더링된다.
  // 이유: state가 App에 있으므로 setState 호출 시 App 함수가 다시 실행되고 자식 JSX도 재평가된다.
  // 참고: props는 읽기 전용이라 자식이 props를 직접 바꿔 부모 state를 변경할 수는 없다.
  // 그래서 Bulb와 Counter를 분리해 각 state의 렌더링 범위를 나눴다.
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
