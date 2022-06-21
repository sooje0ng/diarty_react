import { useRef, useState } from 'react'; // useRef라는 훅(hook)은 DOM노드나 리액트 엘리먼트에 접근할 수 있게 해줌.

const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef(); //authorInput에 접근! 36째 줄 확인
  const contentInput = useRef(); //contentInput에 접근! 44째 줄 확인

  const [state, setState] = useState({
    author: '',
    content: '',
    emotion: 1,
  });
  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus(); //입력창에 포커스를 줌
      return;
    }

    if (state.content.length < 5) {
      contentInput.current.focus(); //입력창에 포커스를 줌
      return;
    }

    onCreate(state.author, state.content, state.emotion);
    alert('저장 완료');
    setState({
      author: '',
      content: '',
      emotion: 1,
    });
  };
  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput} //useRef import해와서 이렇게 사용할 수 있는거임
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          ref={contentInput} //여기도!
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        오늘의 점수 :{' '}
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>저장</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
