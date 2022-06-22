import { set } from 'mongoose';
import { useEffect, useState } from 'react';

const UnmountTest = () => {
  return <div>Unmount Testing Component</div>;
};
const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest />}
      {/* 앞에 있는게 true냐 false냐에 따라서 뒤에 있는 것을 실행시킬지 안시킬지 간단하게 정할 수 있음! */}
    </div>
  );
};

export default Lifecycle;
