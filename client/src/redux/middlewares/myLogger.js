const myLogger = (store) => (next) => (action) => {
  console.log(action); // 먼저 액션을 출력합니다.
  const result = next(action); // 다음 미들웨어 (또는 리듀서) 에게 액션을 전달합니다.
  return result; // 여기서 반환하는 값은 dispatch(action)의 결과물이 됩니다. 기본: undefined
}; // 지금은 단순히 전달받은 액션을 출력하고 다음으로 넘기는 작업을 구현.

export default myLogger;