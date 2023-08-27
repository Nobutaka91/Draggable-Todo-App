import React from 'react';
import { v4 as uuid } from 'uuid';

const TaskAddInput = ({ inputText, setInputText, taskList, setTaskList }) => {
  const handleSubmit = (e) => {
    const taskId = uuid();

    e.preventDefault();
    /*下記のif文は、未入力でエンターを押したときにリストにならないようにするための処理です*/
    if (inputText === '') {
      return;
    }
    // カードを追加する。
    setTaskList([
      ...taskList,
      {
        id: taskId,
        draggableId: `task-${taskId}`,
        text: inputText,
      },
    ]);
    setInputText('');
  };

  // ↑でのdraggableIdはドラッグアンドドロップさせるために必要なIdで、整数ではなく文字列で指定すること

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a task"
          className="taskAddInput"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};

export default TaskAddInput;
