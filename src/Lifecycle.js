import { useEffect, useState } from 'react';

const UnmountTest = () => {
  useEffect(() => {
    console.log('Mount!');

    return () => {
      //unmount시점에 실행되게 됨.
      console.log('Unmount!');
    };
  });
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
