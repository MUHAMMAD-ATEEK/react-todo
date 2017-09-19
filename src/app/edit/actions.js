import axios from 'axios'
import {BASEURL}  from '../config/base-url'
import {EDIT_TODOS} from '../config/actionTypes'


export function showList(todoId, dispatch){
    axios.get(BASEURL+'/todos/'+todoId,{ 'Access-Control-Allow-Origin':  "*" })
    .then(function (response) {
        console.log(response);
        dispatch({type: EDIT_TODOS, todos: response.data.response.data});
    })
    .catch(function (error) {
        dispatch({type: EDIT_TODOS, todos: []});
    });
        
}
