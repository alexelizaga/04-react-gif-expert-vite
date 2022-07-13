import { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react';

export const AddCategory = () => {

    const [ inputValue, setInputValue ] = useState<string>('One Punch')

    const onInputChange = ( {target}: ChangeEvent<HTMLInputElement> ) => {
        setInputValue(target.value)
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e);
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Search gifs..."
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
        
    )
}
