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