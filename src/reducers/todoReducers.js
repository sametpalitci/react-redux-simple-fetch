const todoReducers = (state = [], { payload, type }) => {
    switch (type) {
        case "ADD_DATA":
            return payload.todo;
        default:
            return state;
    }
}


export default todoReducers;