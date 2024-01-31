export const TodoCheckMenu = ({
  iscompleted,
  completedTodo,
  handleDeleteCompleted,
  AiOutlineDelete
}) => {
  return (
    <div>
      {iscompleted === true &&
        completedTodo.map((todo, index) => (
          <div key={index} className="task-menu">
            <div className="task-item">
              <h2 className="task-name">{todo.title}</h2>
              <p className="task-description">{todo.description}</p>
              <small className="task-complete">{todo.completedTime}</small>
            </div>
            <div className="task-control">
              <AiOutlineDelete
                onClick={() => handleDeleteCompleted(index)}
                className="icons"
              />
            </div>
          </div>
        ))}
    </div>
  );
};
