import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import TechList from '~/components/TechList';
import { addTech } from '~/store/modules/techs/actions';

jest.mock('react-redux');

describe('TechList component', () => {

  it('Should render tech list', () => {
    useSelector.mockImplementation(cb => cb({
      techs: ['Node.js', 'ReactJS']
    }));
    const { getByText, getByTestId } = render(<TechList />)
    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    expect(getByTestId('tech-list')).toContainElement(getByText('ReactJS'));
    
  })

  it('Should be able to add new Tech', () => {
    const { getByTestId , getByLabelText} = render(<TechList />)

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    fireEvent.change(getByLabelText('Tech'), {target: { value: 'Node.js'} } );
    fireEvent.submit(getByTestId('tech-form'));

    expect(dispatch).toHaveBeenCalledWith(addTech('Node.js'));
  })
})






















/* Teste do local storage
describe('TechList component', () => {

  beforeEach(() => {
    localStorage.clear();
  });

  it('should be able to add new tech', () => {
    const { getByText, getByTestId , getByLabelText} = render(<TechList />)

    fireEvent.change(getByLabelText('Tech'), {target: { value: 'Node.js'} } );
    fireEvent.submit(getByTestId('tech-form'));

    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    expect(getByLabelText('Tech')).toHaveValue('');
  });

  it('should store techs in storage', () => {
    let { getByTestId , getByLabelText, getByText} = render(<TechList />)

    fireEvent.change(getByLabelText('Tech'), {target: { value: 'Node.js'} } );
    fireEvent.submit(getByTestId('tech-form'));

    cleanup();

    ({ getByTestId , getByLabelText, getByText} = render(<TechList />))

    expect(localStorage.setItem).toHaveBeenCalledWith('techs', JSON.stringify(['Node.js']))
    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));

  })
});

*/