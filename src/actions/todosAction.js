
const todosAction = (todoText) => {
    return {
        type: "ADD_DATA",
        payload: {
            todo:todoText
        }
    }
}

export default todosAction;