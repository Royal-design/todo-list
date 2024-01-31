import "./taskcontrol.style.scss";

export const TaskControl = ({ iscompleted, setiscompleted }) => {
  return (
    <div className="task">
      <button
        className={`iscompleted ${iscompleted === false && "active"}`}
        onClick={() => {
          setiscompleted(false);
        }}
        type="button"
      >
        To do
      </button>
      <button
        className={`iscompleted ${iscompleted === true && "active"}`}
        onClick={() => {
          setiscompleted(true);
        }}
        type="button"
      >
        Completed
      </button>
    </div>
  );
};
