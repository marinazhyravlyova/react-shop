let state = {
    
};

export default class Store {
    static getState() {
        return state;
    }
    
    static setState(newState) {
        state = newState;
    }
}