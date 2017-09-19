import axios from 'axios'
import {BASEURL}  from '../config/base-url'
import {SHOW_TODOS} from '../config/actionTypes'


export function showList(dispatch){
    axios.get(BASEURL+'/todos',{ 'Access-Control-Allow-Origin':  "*" })
    .then(function (response) {
        console.log(response);
        dispatch({type: SHOW_TODOS, todos: response.data.response.data});
    })
    .catch(function (error) {
        dispatch({type: SHOW_TODOS, todos: []});
    });
        
}
