import React from 'react';
import { render, screen } from '@testing-library/react';

import { GifGrid } from '../../src/components/GifGrid';


describe('Test <GifGrid />', () => {

    const category: string = 'One Punch';
    
    test('should show loading first', () => {

        render( <GifGrid category={category} /> );
        expect( screen.getByText('Loading...') );
        expect( screen.getByText( category ) );

    });

    test('should show images after loading', () => {
        
    });

});