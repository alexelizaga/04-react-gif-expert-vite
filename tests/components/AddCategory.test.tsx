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

    test('should call onNewCategory', () => {

        const inputValue: string = 'Saitama';
        const onNewCategory: jest.Mock = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input: HTMLInputElement = screen.getByRole('textbox');
        const form: HTMLFormElement = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);

    });

    test(' SHould not call onNewCategory', () => {

        const onNewCategory: jest.Mock = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const form: HTMLFormElement = screen.getByRole('form');

        fireEvent.submit( form );

        expect( onNewCategory ).not.toHaveBeenCalled();

    });

});