import uuid from 'uuid'
import ACTION_TYPES from 'reducers/todo/ToDoActionTypes'
const defaultState = [{
    id: uuid.v1(),
    text: 'Gots to buy me some food!'
}, {
    id: uuid.v1(),
    text: 'Gots to buy me some flowers!'
}]
const todos = (state = defaultState, action) => {
    switch (action.type) {
        case ACTION_TYPES.TOGGLE_COMPLETE:
            return state.map(next => {
                if (next.id === action.item.id) {
                    return {
                        ...next,
                        completed: !next.completed                        
                    }
                }
                return next
            })
        case ACTION_TYPES.ADD_TODO:
            return [...state, { text: action.text, id: uuid.v1(), completed: false }]
        default:
            return state;
    }
}

const todoFilter = (state = '', action) => {
    switch (action.type) {
        case ACTION_TYPES.FILTER:
            return action.text
        default:
            return state;
    }
}

const todoReducer = (state = {}, action) => {
    return {
        items: todos(state.items, action),
        filter: todoFilter(state.filter, action)
    }
}

export const filteredItems = (store) => {
    const search = store.todo.filter
    return store.todo.items.filter(next => {
        const text = next.text || ''
        return text.toLowerCase().includes(search.toLowerCase())
    })
}

export default todoReducer