import { useRef, useState } from 'react';

const DiaryItem = ({
  onEdit,
  onRemove,
  author,
  content,
  created_date,
  emotion,
  id,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();

  //삭제버튼 누를 시
  const onRemoveClick = () => {
    if (window.confirm(`${id + 1}번째 일기를 삭제하시겠습니까?`)) onRemove(id);
  };

  //수정취소버튼 누를 시
  const onQuitEditClick = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  //수정버튼 누를 시
  const onEditClick = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`${id + 1}번째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit ? (
          <textarea
            ref={localContentInput}
            value={localContent}
            onChange={(e) => setLocalContent(e.target.value)}
          />
        ) : (
          <>{content}</>
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={onQuitEditClick}>수정 취소</button>
          <button onClick={onEditClick}>수정 완료</button>
        </>
      ) : (
        <></>
      )}
      <button onClick={onRemoveClick}>삭제</button>
      <button onClick={toggleIsEdit}>수정</button>
    </div>
  );
};

export default DiaryItem;
