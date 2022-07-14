/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';

import { GifItem } from '../../src/components';


describe('Test <GifItem />', () => {

    const title: string = 'Saitama';
    const url: string = 'https://one-punch.com/saitama.jpg';
    
    test('should match snapshot', () => {
        const { container } = render( <GifItem id='testId' title={title} url={url} /> );
        expect( container ).toMatchSnapshot();
    });

    test('should show image with indicated url and alt', () => {
        render( <GifItem id='testId' title={title} url={url} /> );
        // screen.debug();
        const { src, alt }: HTMLImageElement = screen.getByRole('img');
        expect( src ).toBe(url);
        expect( alt ).toBe(title);

    });

    test('should show title in the component', () => {
        render( <GifItem id='testId' title={title} url={url} /> );
        expect( screen.getByText( title ) ).toBeTruthy();
    });

});