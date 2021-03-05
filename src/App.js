import React from 'react';

//여기서./는 현재 파일이 있는 폴더를 지칭
//그리고 ../는 현재파일이 있는 상위폴더 지칭


function Food(props){
  console.log(props);
  return <h1>I like potato</h1>;
}
// App.js파일 안에 Potato 컴포넌트를 만들고 
// Potato 컴포넌트를 App 컴포넌트 안에서 사용했다.

// 함수의 반환값이 많아지면 소괄호로 ()감싸야 한다
// 리액트에서 function은 컴포넌트를 선언해주는 함수

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Food fav="kimchi" />
      {/* 요 위에 fav 값을 props라구 해욤 */}
      {/* props에 있는 데이터는 문자열인 경우를 제외하면 모두 중괄호{}로 값을 감싸야 한다. */}
    </div>
  );
}
export default App;

