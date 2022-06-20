import { useState } from 'react';
const DiaryEditor = () => {
  const [state, setState] = useState({
    author: '',
    content: '',
  });

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          value={state.author}
          onChange={(e) => {
            setState({ ...state, author: e.target.value });
            //spread연산자 : author:원래 author의 값, content: 원래 content의 값. *순서는 바꾸면 안됨! 순서대로 업데이트되기 때문.
          }}
        />
        <div>
          <textarea
            value={state.content}
            onChange={(e) => {
              setState({ ...state, content: e.target.value });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DiaryEditor;
