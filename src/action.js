export function loadTodos() {
    return (dispatch) => {
        dispatch({type:'start'})
        
       fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: 'load',
                payload: json
            })
        })
    }
}

export const removeTodo = (id) => {
    return (dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        })
        .then((response) => response.json())
        .then((json) => {
            dispatch({
                type: 'delete',
                payload: id
            })
        })
    }
}