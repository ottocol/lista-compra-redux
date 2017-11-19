class Store {
    constructor() {
        this.estado = undefined
    }

    get state() {
        return this.estado
    }

    set state(newState) {
        this.estado = newState
    }
}

export default new Store