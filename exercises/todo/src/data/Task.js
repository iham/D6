class Task {

    constructor(id = null,
        title = '',
        text = '',
        done = false,
        dueDate = null,
        createDate = null,
        modifiedDate = null,
        kategorie = 'Arbeit') {

        this.id = id;
        this._title = title;
        this._text = text;
        this._done = done;
        this._dueDate = dueDate;
        this._createDate = createDate;
        this._modifiedDate = modifiedDate;
        this._kategorie = kategorie;
    }

    // getTitle() {
    //     return this.title;
    // }

    // setTitle(title) {
    //     this.title = title;
    // }


    set title(title) {
        this._title = title;
    }

    get title() {
        return this._title;
    }

    set id(id) {
        this._id = id;
    }

    get id() {
        return this._id;
    }

    set text(text) {
        this._text = text;
    }

    get text() {
        return this._text;
    }

    set done(done) {
        this._done = done;
    }

    get done() {
        return this._done;
    }

    set dueDate(dueDate) {
        this._dueDate = dueDate;
    }

    get dueDate() {
        return this._dueDate;
    }

    set createDate(createDate) {
        this._createDate = createDate;
    }

    get createDate() {
        return this._createDate;
    }

    set modifiedDate(modifiedDate) {
        this._modifiedDate = modifiedDate;
    }

    get modifiedDate() {
        return this._modifiedDate;
    }

    set kategorie(kategorie) {
        this._kategorie = kategorie;
    }

    get kategorie() {
        return this._kategorie;
    }
    
}

export default Task;