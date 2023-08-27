import React from 'react';
import { v4 as uuid } from 'uuid';

const AddTaskCardButton = ({ taskCardList, setTaskCardList }) => {
  const taskCardId = uuid();

  const addTaskCard = () => {
    /* タスクカードを追加する */
    setTaskCardList([
      ...taskCardList,
      { id: taskCardId, draggableId: `item1${taskCardId}` },
    ]);
  };

  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>
        +
      </button>
    </div>
  );
};

export default AddTaskCardButton;
