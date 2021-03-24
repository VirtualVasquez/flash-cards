import {useState} from 'react';

export const useForm = (callback, initialState = {}) => {
    const [values, setValues] = useState(initialState)
    const onChange = (event) =>{
        setValues({...values,[event.target.name]:event.target.value})
    }
    //"callback" is a generic argument
    //it does something different depending on the page.
    //it technically doesn't for login and register, but conceptually sound
    const onSubmit = (event) => {
        event.preventDefault();
        callback();
    }
    return{
        onChange,
        onSubmit,
        values
    }
}