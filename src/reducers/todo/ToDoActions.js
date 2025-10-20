import ACTION_TYPES from 'reducers/todo/ToDoActionTypes'

export const addTodo = (text) => {
    return {
        type: ACTION_TYPES.ADD_TODO,
        text
    }
}

export const filter = (text) => {
    return {
        type: ACTION_TYPES.FILTER,
        text
    }
}

export const toggleComplete = (item) => {
    return {
        type: ACTION_TYPES.TOGGLE_COMPLETE,
        item
    }
}