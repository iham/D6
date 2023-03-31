class TaskService {
    constructor() {
        this.taskList = [];
        this.sequence = 0;
    }

    getTaskList() {
        return this.taskList;
    }

    save(t) {
        if (t.id === null) {
            t.id = this.sequence++;
            t.createDate = new Date();
            t.modifiedDate = new Date();
            this.taskList.push(t);
        } else {
            t.modifiedDate = new Date();
        }
        return t;
    }

    getTask(id) {
        let optTaskResult = this.taskList.filter(task => task.id === id);
        if (optTaskResult && optTaskResult.length > 0) {
            return optTaskResult[0];
        }

    }

    setDone(id) {
        let t = this.getTask(id);
        if (t) {
            t.done = true;
            t.modifiedDate = new Date();
        }
    }

    getKategorien() {
        return ["Arbeit", "Privat", "Einkaufen", "Hobby"];
    }
}

export default TaskService;