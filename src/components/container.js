import React, { useState } from 'react';
import ComponentWithState from './componentWithState';
import DumbComponent from './dumbComponent';
import { StateProvider } from '../context/stateExample';

const initialState = { test: false, count: 0 };

const exampleReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SOMETHING':
            return {
                ...state,
                test: true
            };
        case 'ADD':
            return {
                ...state,
                count: state.count+1
            };
        default:
            return state;
    }
};

const Container = () => {
    return (
        <StateProvider initialState={initialState} reducer={exampleReducer}>
            <ComponentWithState />
            <DumbComponent />
        </StateProvider>
    );
}

export default Container;