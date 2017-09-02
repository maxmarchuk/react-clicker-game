import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style/Clicker.css'

import { Button } from 'react-bootstrap';

class ClickerButton extends Component {
    render() {
        return (
            <Button
                bsStyle="primary"
                onClick={this.props.onClick}
            >
                Add Point
            </Button>
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
