import React, {
    Component,
    PropTypes,
} from 'react';

import {Button} from "react-bootstrap";

class ResetButton extends Component {
    render() {
        return (
            <Button bsStyle="danger">Reset</Button>
        );
    }
}

ResetButton.propTypes = {};
ResetButton.defaultProps = {};

export default ResetButton;
