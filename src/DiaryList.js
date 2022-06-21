import DiaryItem from './DiaryItem';

const DiaryList = ({ diaryList }) => {
  console.log(diaryList);
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map(
          (
            it //여기서 it은 diaryList의 하나하나의 객체를 의미함.
          ) => (
            <DiaryItem key={it.id} {...it} /> //it이라는 모든 요소들이 DiaryItem의 props로 들어옴.
          )
        )}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
