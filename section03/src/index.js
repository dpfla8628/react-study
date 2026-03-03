//commonjs module 가져오기
//1)
// const moduleData = require("./math.js");
// console.log(moduleData);
// console.log(moduleData.add(1,2));
// console.log(moduleData.sub(1,2));

//2)
// const {add,sub} = require("./math.js");
// console.log(add(1,2));
// console.log(sub(1,2));

// ====================================================

//ES module 가져오기
//package -> "type" : "module"
// default import: export default 값 1개를 가져옴 (이름 자유)
// named import: export { ... } 이름과 매칭됨
import mul, { add, sub, multi as multiByTen } from "./math.js";
// `multi as multiByTen`: named export multi를 로컬 이름으로 바꿔 받는 문법
// 같은 파일에 multiply/multi가 있어도 import 이름을 다르게 주면 충돌 없음
console.log(add(1,2));
console.log(sub(1,2));
console.log(mul(2,3));
console.log(multiByTen(2,3));
