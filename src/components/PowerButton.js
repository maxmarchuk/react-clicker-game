import React, {
    Component,
    PropTypes,
} from 'react';

import {Button} from 'react-bootstrap';

class PowerButton extends Component {
    render() {
        const {price, disabled} = this.props;
        return (
            <Button disabled={disabled}>
                Power Boost ({price})
            </Button>
        );
    }
}

PowerButton.propTypes = {
    price: PropTypes.number
};

PowerButton.defaultProps = {
    price: 0
};

export default PowerButton;
