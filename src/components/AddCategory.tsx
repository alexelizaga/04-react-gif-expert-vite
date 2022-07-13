import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react';

interface AddCategoryProps {
    setCategories: Dispatch<SetStateAction<string[]>>
}

export const AddCategory = ({ setCategories }: AddCategoryProps) => {

    const [ inputValue, setInputValue ] = useState<string>('')

    const onInputChange = ( {target}: ChangeEvent<HTMLInputElement> ) => {
        setInputValue(target.value)
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if ( inputValue.trim().length <= 1 ) return;
        setCategories( cat => [inputValue, ...cat] );
        setInputValue('');
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
