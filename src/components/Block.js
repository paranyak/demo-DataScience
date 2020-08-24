import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions'

const changeVisibility = (e, setVisibilityFilter, visibilityFilter) => {
    e.preventDefault();
    setVisibilityFilter(!visibilityFilter)
}

function Block(props) {
    const { id, text } = props.content;
    console.log(props, props.state)
    return (
        <div>
            <p>{ text }</p>
            <button type="button" onClick={e => changeVisibility(e, props.setVisibilityFilter, props.state.visibilityFilter)}>Edit Comment</button>
        </div>
    )
}

// Object of action creators
const mapDispatchToProps = {
    setVisibilityFilter: setVisibilityFilter
}

const mapStateToProps = state => {
    console.log('STATE', state);
    return {state}
};

export default connect(mapStateToProps, mapDispatchToProps)(Block);