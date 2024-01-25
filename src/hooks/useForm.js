import {useState} from 'react';

export const useForm = (initialValue) => {
    const [form, setForm] = useState(initialValue)

    const onChange = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }

    const clear = () => {
        setForm(initialValue)
    }

    return [form, onChange, clear]
}

