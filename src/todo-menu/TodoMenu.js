export const TodoMenu = ({
  iscompleted,
  handleDelete,
  handleCompletedClick,
  todo,
  AiOutlineDelete,
  BsCheckLg
}) => {
  return (
    <div>
      {iscompleted === false &&
        todo.map((todo, index) => (
          <div key={index} className="task-menu">
            <div className="task-item">
              <h2 className="task-name">{todo.title}</h2>
              <p className="task-description">{todo.description}</p>
            </div>
            <div className="task-control">
              <AiOutlineDelete
                onClick={() => handleDelete(index)}
                className="icons"
              />
              <BsCheckLg
                onClick={() => handleCompletedClick(index)}
                className="check-icon"
              />
            </div>
          </div>
        ))}
    </div>
  );
};
