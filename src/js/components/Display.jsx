import React from 'react';
import { connect } from 'react-redux'

const Display = ({name}) => (
    <strong>name: {name}</strong>
);

const mapStateToProps = (state) => ({
    name: state.name,
});

export const ConnectedDisplay = connect(
    mapStateToProps,
)(Display);
