import { BsFillCalendar2CheckFill, BsFillCalendarXFill } from "react-icons/bs";

function TaskItem(props) {
    const { value } = props;
    const doneStateIcon = value.done ? <BsFillCalendar2CheckFill /> : <BsFillCalendarXFill />;
    return (
        <div className="card mb-2" >
            <div className="card-body">
                <h5 className="card-title">{value.title} {`(${value.kategorie} | ${value.dueDate ? value.dueDate.toLocaleDateString('de-DE') : ''})`}</h5>
                <p className="card-text">{value.text}</p>
                {doneStateIcon}
                {!value.done &&
                    <button onClick={() => props.onDone(value.id)}>Auf Erledigt setzen</button>
                }
            </div>
        </div>);
}

export default TaskItem;