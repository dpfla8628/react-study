
## 1) 함수 인자 패턴: Callback / Rest / Spread / 구조분해

### 1-1. 콜백 함수 (Callback)

* **개념:** “나중에 실행할 로직”을 함수로 만들어 **인자로 전달**해두고, 특정 시점(이벤트/완료 시점)에 **호출되는 함수**.

**예시**

```js
function doTask(callback) {
  // ...작업 처리
  callback("done"); // 작업 완료 시점에 실행
}

doTask((result) => console.log(result));
```

---

### 1-2. Rest 매개변수 (`...args`)

* **개념:** 여러 인자를 **배열로 모아** 받는 문법(가변 인자 처리).

**예시**

```js
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}

sum(1, 2, 3); // 6
```

---

### 1-3. Spread 연산자 (`...`)

* **개념:** 배열/객체를 **펼쳐서** 복사, 병합, 함수 인자 전달에 사용.

**예시**

```js
// 배열 병합/복사
const a = [1, 2];
const b = [...a, 3]; // [1,2,3]

// 객체 병합/복사
const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // {a:1,b:2}

// 함수 인자 전달
Math.max(...[3, 7, 2]); // 7
```

---

### 1-4. 구조분해할당 (Destructuring)

* **개념:** 배열/객체에서 값을 **한 번에 꺼내** 변수에 바인딩하는 문법.

**예시**

```js
// 배열
const [x, y = 2] = [1]; // y 기본값 2

// 객체
const user = { id: 1, name: "yerim" };
const { id, name: nick, age = 0 } = user; // rename + default
```

---

## 2) 타입/비교/복사: 원시 vs 객체, 얕은/깊은 비교, 얕은/깊은 복사

### 2-1. 원시 타입(Primitive) vs 객체 타입(Object)

* **원시 타입:** 값 자체가 복사됨(독립).
* **객체 타입:** 참조(주소)가 복사됨(공유).

**예시**

```js
let a = 1;
let b = a;
b = 2; // a는 1 그대로

const o1 = { n: 1 };
const o2 = o1;
o2.n = 9; // o1.n도 9 (참조 공유)
```

---

### 2-2. 얕은 비교(Shallow Compare) / 깊은 비교(Deep Compare)

* **얕은 비교:** `===`로 비교. 객체는 “내용”이 아니라 **참조**를 비교.
* **깊은 비교:** 중첩 포함 “내용”까지 비교(직접 구현/라이브러리 사용).

**예시**

```js
({ a: 1 } === { a: 1 }); // false (서로 다른 참조)

const r = { a: 1 };
r === r; // true
```

**간단 깊은 비교(제약 많음)**

```js
// Date/undefined/함수/순환참조/키순서 등에서 깨질 수 있음
JSON.stringify({ a: 1, b: 2 }) === JSON.stringify({ a: 1, b: 2 });
```

---

### 2-3. 얕은 복사(Shallow Copy) / 깊은 복사(Deep Copy)

* **얕은 복사:** 최상위만 복사, **중첩 객체는 참조 공유**.

  * 대표: `{...obj}`, `Object.assign`, `Array.slice`, `concat`
* **깊은 복사:** 중첩까지 모두 새로 복사, **완전 분리**.

  * 대표: `structuredClone`(권장, 지원 환경에서)

**얕은 복사 예시**

```js
const origin = { a: 1, nested: { x: 10 } };
const copy = { ...origin }; // 얕은 복사

copy.nested.x = 99;
origin.nested.x; // 99 (중첩은 공유)
```

**깊은 복사 예시**

```js
const origin = { a: 1, nested: { x: 10 } };
const deep = structuredClone(origin);

deep.nested.x = 99;
origin.nested.x; // 10 (완전 분리)
```

---

## 3) 객체 다루기: key/value 추출

* **keys:** key 목록
* **values:** value 목록
* **entries:** [key, value] 쌍 목록

**예시**

```js
const obj = { a: 1, b: 2 };

Object.keys(obj);   // ["a","b"]
Object.values(obj); // [1,2]
Object.entries(obj);// [["a",1],["b",2]]

for (const [k, v] of Object.entries(obj)) {
  console.log(k, v);
}
```

---

## 4) 배열 메서드: 변경/비변경 + 탐색/변환

### 4-1. 원본 변경 메서드

* `push`, `pop`, `sort` (사이드이펙트 주의)

**예시**

```js
const arr = [1, 2];
arr.push(3); // [1,2,3]
arr.pop();   // [1,2]
```

---

### 4-2. 원본 유지 메서드

* `slice`, `concat`, `map`, `filter`, `toSorted` (불변성에 유리)

**slice / concat 예시**

```js
const arr = [1, 2, 3];
arr.slice(0, 2);        // [1,2]
arr.concat([4, 5]);     // [1,2,3,4,5]
```

---

### 4-3. forEach

* **개념:** 순회 전용(반환값 없음, `break` 어려움)

**예시**

```js
[1, 2, 3].forEach((n, i) => console.log(i, n));
```

---

### 4-4. includes

* **개념:** 포함 여부 boolean. `NaN`도 찾을 수 있음.

**예시**

```js
[1, 2, 3].includes(2); // true
[NaN].includes(NaN);   // true
```

---

### 4-5. indexOf vs findIndex

* **indexOf(value):** 값이 “완전히 같은지”로 찾음(`NaN`은 못 찾음)
* **findIndex(fn):** 조건 함수로 찾음(객체/복합 조건에 적합)

**예시**

```js
[1, 2, 3].indexOf(2); // 1
[NaN].indexOf(NaN);   // -1

const users = [{ id: 1 }, { id: 2 }];
users.findIndex((u) => u.id === 2); // 1
```

---

### 4-6. find / filter / map

* **find:** 조건 만족 “첫 요소” 반환
* **filter:** 조건 만족 “여러 요소”로 새 배열
* **map:** 요소를 변환해 새 배열

**예시**

```js
const users = [{ id: 1 }, { id: 2 }, { id: 3 }];

users.find((u) => u.id === 2);   // {id:2}
users.filter((u) => u.id >= 2);  // [{id:2},{id:3}]
users.map((u) => u.id);          // [1,2,3]
```

---

### 4-7. sort / toSorted

* **sort:** 원본 변경 + 기본 문자열 정렬 → 비교함수 거의 필수
* **toSorted:** 원본 유지(ES2023)

**예시**

```js
const nums = [10, 2, 5];

nums.sort(); // [10,2,5] (문자열처럼 정렬)
nums.sort((a, b) => a - b); // [2,5,10] (원본 변경)

const nums2 = [10, 2, 5];
const sorted = nums2.toSorted((a, b) => a - b);
nums2;   // [10,2,5]
sorted;  // [2,5,10]
```

---

### 4-8. join

* **개념:** 배열을 구분자로 이어 문자열로 변환

**예시**

```js
["a", "b", "c"].join("-"); // "a-b-c"
```

---

## 5) Date 객체: 생성/추출/포맷

* **타임스탬프(ms):** `Date.now()`, `getTime()`
* **표준 포맷:** `toISOString()` (서버/로그에 안정적)
* **표시용 로컬:** `toLocaleString()`
* **부품 추출:** `getFullYear`, `getMonth()+1`, `getDate`, `getHours` 등
* **커스텀 포맷:** `Intl.DateTimeFormat` 권장

**예시**

```js
const d = new Date();

Date.now();     // 현재 타임스탬프(ms)
d.getTime();    // d의 타임스탬프(ms)

d.toISOString();          // "2026-03-03T...Z"
d.toLocaleString("ko-KR"); // 로컬 표시

d.getFullYear();
d.getMonth() + 1;
d.getDate();
d.getHours();
d.getMinutes();

const fmt = new Intl.DateTimeFormat("ko-KR", {
  year: "numeric", month: "2-digit", day: "2-digit",
  hour: "2-digit", minute: "2-digit",
});
fmt.format(d);
```

---

## 6) 비동기 처리 방식: Callback → Promise → async/await

### 6-1. Callback 방식

* **특징:** 단순하지만 단계가 늘면 중첩이 깊어져 가독성과 에러처리가 어려움.

**예시(콜백 체인)**

```js
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
```

---

### 6-2. Promise 방식

* **특징:** `.then()` 체인으로 흐름을 평탄화, `.catch()`로 에러 처리 일원화.

**new Promise executor 매개변수 사용법**

* `new Promise((resolve, reject) => { ... })`
* executor는 **즉시 실행**
* 성공: `resolve(value)`
* 실패: `reject(error)`

**예시(executor 구조)**

```js
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    const ok = true;

    if (ok) resolve("성공 값");
    else reject(new Error("실패"));
  }, 1000);
});

p.then((v) => console.log(v))
 .catch((e) => console.error(e))
 .finally(() => console.log("정리"));
```

**예시(콜백 체인 → Promise 체인)**

```js
function orderFoodP() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("떡볶이"), 3000);
  });
}

function cooldownFoodP(food) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`식은 ${food}`), 2000);
  });
}

function freezeFoodP(food) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`냉동된 ${food}`), 1500);
  });
}

orderFoodP()
  .then((food) => {
    console.log(food);
    return cooldownFoodP(food);
  })
  .then((cool) => {
    console.log(cool);
    return freezeFoodP(cool);
  })
  .then((frozen) => console.log(frozen))
  .catch(console.error);
```

---

### 6-3. async/await 방식

* **특징:** Promise를 동기 코드처럼 읽게 해줌. 에러는 `try/catch`.

**예시**

```js
async function runFood() {
  try {
    const food = await orderFoodP();
    console.log(food);

    const cool = await cooldownFoodP(food);
    console.log(cool);

    const frozen = await freezeFoodP(cool);
    console.log(frozen);
  } catch (e) {
    console.error(e);
  }
}

runFood();
```

---

## 7) 추가로 같이 알아두면 좋은 내용

### 7-1. 불변성 유지 패턴(사이드이펙트 방지)

* 정렬 같은 원본 변경이 필요한 경우 **복사 후 변경**이 안전.

**예시**

```js
const arr = [3, 1, 2];
const sorted = [...arr].sort((a, b) => a - b); // 원본 유지
```

### 7-2. 콜백 에러 처리 패턴(참고)

* Node 스타일: `callback(err, result)`

**예시**

```js
function read(callback) {
  const ok = false;

  if (!ok) return callback(new Error("fail"));
  callback(null, "data");
}

read((err, data) => {
  if (err) return console.error(err);
  console.log(data);
});
```
