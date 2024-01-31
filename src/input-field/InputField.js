import "./input.style.scss";

export const InputField = ({
  title,
  description,
  settitle,
  setdescription,
  inputTitleRef,
  handleClick
}) => {
  return (
    <form action="" className="todo-list">
      <input
        onChange={(e) => settitle(e.target.value)}
        value={title}
        type="text"
        className="input-task"
        ref={inputTitleRef}
        placeholder="Enter task title"
      />
      <input
        onChange={(e) => setdescription(e.target.value)}
        value={description}
        type="text"
        className="input-description"
        placeholder="Enter task description"
      />
      <button
        onClick={(e) => handleClick(e)}
        type="button "
        className="add-btn"
      >
        Add
      </button>
    </form>
  );
};
