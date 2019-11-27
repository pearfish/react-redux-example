import React from 'react';
import { connect } from 'react-redux'
import { ConnectedDisplay } from './components/Display.jsx';
import { ConnectedForm } from './components/Form.jsx';

export const App = () => (
    <>
        <h4>blarp</h4>
        <ConnectedForm />
        <hr />
        <ConnectedDisplay />
    </>
);