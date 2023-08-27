import React, { useState } from 'react';
import TaskCard from './TaskCard';
import AddTaskCardButton from './button/AddTaskCardButton';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Reorder = (taskCardsList, startIndex, EndIndex) => {
  // タスクを並び替える
  const remove = taskCardsList.splice(startIndex, 1);
  taskCardsList.splice(EndIndex, 0, remove[0]);
};

const TaskCards = () => {
  const [taskCardsList, setTaskCardList] = useState([
    { id: '0', draggableId: 'item0' },
  ]);

  const handleDragEnd = (result) => {
    if (result.destination) {
      // Check if drag ended inside droppable area
      Reorder(taskCardsList, result.source.index, result.destination.index);
    }
    setTaskCardList(taskCardsList);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div
            className="TaskCardsArea"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCardsList.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                index={index}
                taskCardsList={taskCardsList}
                setTaskCardList={setTaskCardList}
                taskCard={taskCard}
              />
            ))}
            {provided.placeholder}
            <AddTaskCardButton
              taskCardList={taskCardsList}
              setTaskCardList={setTaskCardList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskCards;
