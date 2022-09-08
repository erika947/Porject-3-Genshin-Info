import axios from 'axios'

export const getTodos = () => {
    const URL = 'http://localhost:3001/todos'
    const response = axios.get(URL)
    return response
}
export const getTodo = (id) => {
    const URL = `http://localhost:3001/todos/${id}`
    const response = axios.get(URL)
    return response
}

export const deleteTodo = (id) => {
    const URL = `http://localhost:3001/todos/${id}`
    const response = axios.delete(URL)
    return response
}

export const editTodo = (id, updatedTodo) => {
    const URL = `http://localhost:3001/todos/${id}`
    const response = axios.put(URL, updatedTodo)
    return response
}

export const createTodo = (todo) => {
    const URL = 'http://localhost:3001/todos'
    const response = axios.post(URL, todo)
    return response
}

export const getWeapons = (weapons) => {
    const URL = 'http://localhost:3001/todos/weapons'
    const response = axios.get(URL, weapons)
    return response
}

export const getWeapon = (id) => {
    console.log('getweapon')
    const URL = `http://localhost:3001/weapons/${id}`
    console.log(URL)
    const response = axios.get(URL)
    return response
}