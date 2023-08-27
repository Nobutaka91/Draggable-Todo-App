import React from 'react';

import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

const TaskCardDeleteButton = ({ taskCardsList, setTaskCardList, taskCard }) => {
  const taskCardDeleteButton = (id) => {
    /* タスクカードを削除する */
    setTaskCardList(taskCardsList.filter((e) => e.id !== id));
  };

  return (
    <div>
      <button
        className="taskCardDeleteButton"
        onClick={() => taskCardDeleteButton(taskCard.id)}
      >
        <ClearRoundedIcon />
      </button>
    </div>
  );
};

export default TaskCardDeleteButton;
