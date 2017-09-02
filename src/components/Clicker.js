import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style/Clicker.css'

class ClickerButton extends Component {
    render() {
        return (
            <input onClick={this.props.onClick} type="button" class="btn btn-clear btn-primary" id="clicker" value="Add Point" />
        );
    }
}

ClickerButton.propTypes = {
    onClick: PropTypes.func
};

ClickerButton.defaultProps = {
    onClick: () => {}
};

export default ClickerButton;
