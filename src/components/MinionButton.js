import React, {
    Component,
    PropTypes,
} from 'react';

import {Button} from 'react-bootstrap';

class MinionButton extends Component {
    render() {
        const {amount, price, disabled} = this.props;
        return (
            <Button disabled={disabled} onClick={() => this.props.onClick(amount, price)}>
                Buy Minion ({price})
            </Button>
        );
    }
}

MinionButton.propTypes = {
    amount: PropTypes.number,
    price: PropTypes.number,
    disabled: PropTypes.bool
};

MinionButton.defaultProps = {
    amount: 0,
    price: 0,
    disabled: true
};

export default MinionButton;
