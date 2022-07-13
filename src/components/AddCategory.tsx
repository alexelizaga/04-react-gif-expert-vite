import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react';

interface AddCategoryProps {
    onNewCategory: (value: any) => void;
}

export const AddCategory = ({ onNewCategory }: AddCategoryProps) => {

    const [ inputValue, setInputValue ] = useState<string>('')

    const onInputChange = ( {target}: ChangeEvent<HTMLInputElement> ) => {
        setInputValue(target.value)
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if ( inputValue.trim().length <= 1 ) return;
    
        onNewCategory( inputValue.trim() );
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
