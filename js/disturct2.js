//객체 해체 할당:동일한 키로 매핑
const {a,b, c=30} = {a:18, b:28, c:30, d:40, e:50};
console.log(a,b, c);