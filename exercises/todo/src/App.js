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
      filterMethod: "Alle",
      sortMethod: ""
    };

    const NOW = new Date();
    for (let pos = 0; pos < 50; pos++) {
      let t = new Task();
      t.title = `Aufgabe ${pos + 1}`;
      
      // set random category
      let cs = this.taskService.getKategorien()
      t.kategorie = cs[Math.floor(Math.random() * cs.length)];

      // set some dueDates
      if(pos % 5 === 0) {
        const timestamp = Math.floor(Math.random() * NOW);
        t.dueDate = new Date(timestamp);
      }

      // save task to service
      this.taskService.save(t);

      // mark every third as done
      if (pos % 3 === 0) {
        this.taskService.setDone(t.id);
      }
    }

    this.handleViewTaskForm = this.handleViewTaskForm.bind(this);
    this.handleSaveTask = this.handleSaveTask.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleSort = this.handleSort.bind(this);
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

  handleSort(sortMethod) {
    const { tasks } = this.state;
    let displayTasks;
    switch (sortMethod) {
      case "dueDate":
        displayTasks = tasks.sort((a, b) => a.dueDate - b.dueDate);
        break;
      case "kategorie":
        displayTasks = tasks.sort((a, b) => a.kategorie.localeCompare(b.kategorie, 'de', { sensitivity: 'base' }));
        break;
      default:
        displayTasks = tasks;
    }
    this.setState({ sortMethod, displayTasks });
  }

  render() {
    const { showTaskForm, displayTasks, filterMethod, sortMethod } = this.state;

    const btnShowTaskFormLabel = showTaskForm ? "Abbrechen" : "Hinzufügen";

    return (
      <div className="container">

        <header>
          ToDos
          <Link to={"/info"}>Infoseite</Link>
          <Link to={"/copyright"}>Copyright</Link>
        </header>

        <main>
          <Outlet />

          <button className="btn btn-primary btn-sm"
            onClick={this.handleViewTaskForm}>{btnShowTaskFormLabel}</button>

          <TaskForm className={showTaskForm ? "" : "visually-hidden"}
            onSave={this.handleSaveTask}
            taskService={this.taskService}
            onClose={() => this.setState({ showTaskForm: false })} />

          <div className="container mt-5">
            <div className="row">
              <div className="col">
                <KPIPanel taskService={this.taskService} />
              </div>
              <div className="col">
                <CatPanel taskService={this.taskService} />
              </div>
            </div>

          </div>

          <div className="container mb-3">
            <div className="row">
              <div className="col">
                <select name="filterMethod" className="form-select" onChange={evt => this.handleFilter(evt.target.value)}
                  value={filterMethod}>
                  <option value="Alle">Alle</option>
                  <option value="Offenen">Offenen</option>
                </select>
              </div>
              <div className="col">
                <select name="sortMethod" className="form-select" onChange={evt => this.handleSort(evt.target.value)}
                  value={sortMethod}>
                  <option value="">Keine</option>
                  <option value="dueDate">Fälligkeit</option>
                  <option value="kategorie">Kategorie</option>
                </select>
              </div>
            </div>
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
