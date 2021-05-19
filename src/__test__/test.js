import {render, screen, cleanup} from '@testing-library/react';
import Main from './main';

test( 'should render main component', () => 
{
    render (<Home />);
    const tests= screen.getByTestId('log');
    expect(tests).toBeInTheDocument();
    expect(tests).toHaveTextContent('Logout');
})