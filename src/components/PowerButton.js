import React, {
    Component,
    PropTypes,
} from 'react';

import {Button} from 'react-bootstrap';

class PowerButton extends Component {
    render() {
        const {amount, price, disabled} = this.props;
        return (
            <Button disabled={disabled} onClick={() => this.props.onClick(amount, price) }>
                Power + {amount} ({price})
            </Button>
        );
    }
}

PowerButton.propTypes = {
    amount: 0,
    price: PropTypes.number,
    disabled: PropTypes.bool
};

PowerButton.defaultProps = {
    amount: 0,
    price: 0,
    disabled: true
};

export default PowerButton;
