import { useState } from 'react';

import { AddCategory } from './components/AddCategory';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState<string[]>([ 'One Punch', 'Dragon Ball' ]);

    const onAddCategory = ( newCategory: string ) => {
        if( categories.includes(newCategory) ) return;
    
        setCategories( cat => [ newCategory, ...cat ]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={ (value) => onAddCategory(value) }
            />

            <ol>
                {
                    categories.map((category) => (
                        <li key={category}>{category}</li>
                    ))
                }
            </ol>
        </>
    )
}
