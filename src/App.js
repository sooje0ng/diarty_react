import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import './App.css';

const dummyList = [
  {
    id: 1,
    author: '한수정',
    content: 'hi 1',
    emotion: 5,
    created_date: new Date().getTime(), //현재시간을 기준으로 생성됨. miliseconds로 변환해서 반환해줌
  },
  {
    id: 2,
    author: '홍길동',
    content: 'hi 2',
    emotion: 1,
    created_date: new Date().getTime(), //현재시간을 기준으로 생성됨. miliseconds로 변환해서 반환해줌
  },
  {
    id: 3,
    author: '아무개',
    content: 'hi 3',
    emotion: 2,
    created_date: new Date().getTime(), //현재시간을 기준으로 생성됨. miliseconds로 변환해서 반환해줌
  },
];
function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
