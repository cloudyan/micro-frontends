import React, { useState } from 'react';
import { Button, Modal } from 'antd';

export default function() {
  // const [visible, setVisible] = useState(false);
  const [count, addCount] = useState(0);
  return (
    <>
      {/* <Button onClick={() => setVisible(true)}>CLICK ME</Button> */}
      <Button onClick={() => addCount(c => c+1)}>CLICK ME {count}</Button>
      {/* <Modal visible={visible} onOk={() => setVisible(false)} onCancel={() => setVisible(false)} title="qiankun">
        Probably the most complete micro-frontends solution you ever met
      </Modal> */}
    </>
  );
}
