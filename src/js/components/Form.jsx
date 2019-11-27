import React from 'react';
import { connect } from 'react-redux';
import { resetForm, setName } from '../actionCreators';

const Form = ({name, reset, updateName}) => (
    <>
        <label>name<input value={name} onChange={e => updateName(e.target.value)} /></label>
        <button type='button' onClick={reset}>reset</button>
    </>
);

const mapStateToProps = (state) => ({
    name: state.name,
});

const mapDispatchToProps = { reset: resetForm, updateName: setName };

export const ConnectedForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);
