# section05/chapter7

React `state`와 리렌더링 범위를 학습하는 테스트 챕터입니다.

## 학습 목표
- `useState`로 상태를 변경할 때만 화면이 다시 렌더링된다는 점 이해
- 하나의 상위 컴포넌트에 여러 state를 둘 때 렌더링 범위가 넓어지는 이유 파악
- 기능 단위로 컴포넌트를 분리해 상태 책임을 나누는 방법 익히기

## 현재 구성
- `App.jsx`: `Bulb`, `Counter`를 조합하고, 분리 이유를 주석으로 정리
- `components/Bulb.jsx`: ON/OFF 상태 토글 예제
- `components/Counter.jsx`: 숫자 증가 상태 변경 예제
- `components/Main.jsx`: JSX 문법 학습용 예시(현재 App에서는 미사용)

## 핵심 개념 요약
- state가 바뀌면 해당 state를 가진 컴포넌트가 리렌더링됩니다.
- state가 `App`에 있으면 `setState` 시 `App` 함수가 다시 실행되고 자식 JSX도 재평가됩니다.
- `props`는 읽기 전용이며, 자식이 직접 부모 state를 변경할 수 없습니다.
