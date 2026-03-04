function add(a,b) {
    return a+b;
}
function sub(a,b) {
    return a-b;
}
function multi(a,b) {
    return a*b*10;
}

// commonjs module 내보내기
// module.exports = {
//     add,
//     sub
// }

// ES module 내보내기
export { add, sub, multi };
// named export: 선언한 이름(add/sub/multi)으로 내보냄
// import 시 `as`로 원하는 로컬 이름으로 바꿔 받을 수 있음

// default export: "이 모듈의 대표 1개"
// 가져올 때 이름은 import 쪽에서 자유롭게 정함
export default function multiply(a,b) {
    return a*b;
}
