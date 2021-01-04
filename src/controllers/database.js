import todosAction from '../actions/todosAction';

export const fetchData = () => {
    return dispatch => {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "GET",
            headers: {
                accept: "application/json",
                contentType: "application/json"
            }
        }).then(res => res.json()).then((res) => { dispatch(todosAction(res)) });
    }
}