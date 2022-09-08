import axios from 'axios'

export const getTodos = () => {
    const URL = 'https://genshin-api-erika.herokuapp.com/todos'
    const response = axios.get(URL)
    return response
}
export const getTodo = (id) => {
    const URL = `https://genshin-api-erika.herokuapp.com/todos/${id}`
    const response = axios.get(URL)
    return response
}

export const deleteTodo = (id) => {
    const URL = `https://genshin-api-erika.herokuapp.com/todos/${id}`
    const response = axios.delete(URL)
    return response
}

export const editTodo = (id, updatedTodo) => {
    const URL = `https://genshin-api-erika.herokuapp.com/todos/${id}`
    const response = axios.put(URL, updatedTodo)
    return response
}

export const createTodo = (todo) => {
    const URL = 'https://genshin-api-erika.herokuapp.com/todos/'
    const response = axios.post(URL, todo)
    return response
}

export const getWeapons = (weapons) => {
    const URL = 'https://genshin-api-erika.herokuapp.com/todos/weapons'
    const response = axios.get(URL, weapons)
    return response
}

export const getWeapon = (id) => {
    console.log('getweapon')
    const URL = `https://genshin-api-erika.herokuapp.com/todos/weapons/${id}`
    console.log(URL)
    const response = axios.get(URL)
    return response
}