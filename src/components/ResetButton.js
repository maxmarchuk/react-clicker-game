import React, {Component } from 'react';
import PropTypes from 'prop-types';

import {Button} from "react-bootstrap";

class ResetButton extends Component {
    render() {
        return (
            <Button bsStyle="danger" onClick={this.props.onResetClick}>
                Reset
            </Button>
        );
    }
}

ResetButton.propTypes = {
    onResetClick: PropTypes.bool
};
ResetButton.defaultProps = {};

export default ResetButton;
