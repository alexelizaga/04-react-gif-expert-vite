import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { AddCategory } from '../../src/components/AddCategory';

describe('Test <AddCategory />', () => {
    
    test('should change text box value', () => {
        
        render( <AddCategory onNewCategory={ () => {} } /> );

        const input: HTMLInputElement = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'Saitama' } } );
        // fireEvent.change(input, { target: { value: 'Saitama' } });

        expect( input.value ).toBe('Saitama');

    });

});