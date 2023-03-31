import React from "react";
import Task from "../data/Task";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import de from 'date-fns/locale/de';
registerLocale('de', de);
setDefaultLocale('de');

class TaskForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // Eingabefelder als State Variablen
            title: "",
            text: "",
            kategorie: "Arbeit",
            dueDate: new Date()
        };
        this.handleSave = this.handleSave.bind(this);
        this.handleInput = this.handleInput.bind(this);

    }

    handleInput(evt) {
        //console.log(evt);
        this.setState({ [[evt.target.name]]: evt.target.value });
    }

    handleSave() {
        // Aufbau des Task Objekts
        const { title, text, kategorie } = this.state;
        let task = new Task();
        task.title = title;
        task.text = text;
        task.kategorie = kategorie;
        this.props.onSave(task);

    }

    render() {
        const { className } = this.props;
        const { title, text, dueDate } = this.state;
        return (
            <div className={className}>
                <div className="mb-3">
                    <label htmlFor="txtTitle" className="form-label">Titel</label>
                    <input id="txtTitle" name="title" onChange={this.handleInput} value={title} placeholder="Titel eingeben..." className="form-control" />
                </div>

                <div className="mb-3">
                    <label htmlFor="txtText" className="form-label">Beschreibung</label>
                    <textarea htmlFor="txtText" name="text" onChange={this.handleInput} placeholder="Titel eingeben..." className="form-control" value={text}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="txtKategorie" className="form-label">Kategorie</label>
                    <select id="txtKategorie" name="kategorie" className="form-select" onChange={this.handleInput}>
                        {this.props.taskService.getKategorien().map((kategorie, index) => <option key={`kategorie-item-${index}`} value={kategorie}>{kategorie}</option>)}
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="txtdueDate" className="form-label">Erledigt bis</label>
                    <DatePicker id="txtdueDate" 
                    selected={dueDate}
                     onChange={date => this.setState({dueDate:date})}
                     dateFormat="dd.MM.yyyy"
                     className="form-control"/>
                </div>

                
                <button onClick={this.handleSave} className="btn btn-primary">Speichern</button>
                <button onClick={this.props.onClose} className="btn btn-secondary">Abbrechen</button>


            </div>
        );
    }
}

export default TaskForm;