import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Task from "./data/Task";
import TaskService from "./service/TaskService";
import TaskForm from "./component/TaskForm";
import TaskItem from "./component/TaskItem";
import { Link, Outlet } from "react-router-dom";


import CatPanel from "./component/CatPanel";
import KPIPanel from "./component/KPIPanel";

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.taskService = new TaskService();
    this.tmp = this.taskService.getTaskList();
    this.state = {
      showTaskForm: false,
      tasks: this.tmp,
      displayTasks: this.tmp,
      filterMethod: "Alle"
    };


    for (let pos = 0; pos < 50; pos++) {
      let t = new Task();
      t.title = `Aufgabe ${pos + 1}`;
      let cs = this.taskService.getKategorien()
      t.kategorie = cs[Math.floor(Math.random()*cs.length)];
      this.taskService.save(t);
      if (pos % 3 === 0) {
        this.taskService.setDone(t.id);
      }
    }

    this.handleViewTaskForm = this.handleViewTaskForm.bind(this);
    this.handleSaveTask = this.handleSaveTask.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filterMethod) {
    const { tasks } = this.state;
    let displayTasks;
    if (filterMethod === "Offenen") {
      displayTasks = tasks.filter(t => t.done === false);
    }
    else {
      displayTasks = tasks;
    }
    this.setState({ filterMethod, displayTasks })
  }

  handleViewTaskForm() {
    this.setState({ showTaskForm: !this.state.showTaskForm });
  }

  handleSaveTask(task) {
    this.taskService.save(task);
    this.setState({ tasks: this.taskService.getTaskList(), showTaskForm: false }, () => {
      this.handleFilter(this.state.filterMethod);
    });
  }

  render() {
    const { showTaskForm, displayTasks, filterMethod } = this.state;

    const btnShowTaskFormLabel = showTaskForm ? "Abbrechen" : "Hinzufügen";

    return (
      <div className="container">

        <header>
          ToDos
          <Link to={"/info"}>Infoseite</Link>
          <Link to={"/copyright"}>Copyright</Link>
        </header>

        <main>

          <button className="btn btn-primary btn-sm"
            onClick={this.handleViewTaskForm}>{btnShowTaskFormLabel}</button>

          <TaskForm className={showTaskForm ? "" : "visually-hidden"}
            onSave={this.handleSaveTask}
            taskService={this.taskService}
            onClose={() => this.setState({ showTaskForm: false })} />

          <KPIPanel taskService={this.taskService}/>
          <CatPanel taskService={this.taskService}/>

          <div className="mb-3">
            <select name="filterMethod" className="form-select" onChange={evt => this.handleFilter(evt.target.value)}
              value={filterMethod}>
              <option value="Alle">Alle</option>
              <option value="Offenen">Offenen</option>
            </select>
          </div>

          {displayTasks.map((t, index) => <TaskItem
            key={"task-item-" + index}
            value={t}
            onDone={(tId) => {
              this.taskService.setDone(tId);
              this.setState({ tasks: this.taskService.getTaskList() }
                , () => {
                  this.handleFilter(this.state.filterMethod);
                });
            }
            } />)}

        </main>
      </div>
    );
  }
}

export default App;
