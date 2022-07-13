import { useState } from 'react';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState<string[]>([ 'One Punch', 'Dragon Ball' ]);

    const onAddCategory = () => {
        // setCategories([ 'Valorant', ...categories]);
        setCategories( cat => [ 'Valorant', ...cat ]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <button onClick={ onAddCategory }>Add</button>
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
