import axios from 'axios'

export function TodoColor(){
    return(dispatch)=>{
        return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            dispatch(changeColor(response.data.title))
        })
    }
}

export function changeColor(color){
    return{
        type:'CHANGE_COLOR',
        color:color
    }
}