import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Task from './input/Task';

const Reorder = (taskList, startIndex, EndIndex) => {
  // タスクを並び替える
  const remove = taskList.splice(startIndex, 1);
  taskList.splice(EndIndex, 0, remove[0]);
};

const Tasks = ({ taskList, setTaskList }) => {
  const handleDragEnd = (result) => {
    if (result.destination) {
      // Check if drag ended inside droppable area
      Reorder(taskList, result.source.index, result.destination.index);
    }
    setTaskList(taskList);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    index={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Tasks;
