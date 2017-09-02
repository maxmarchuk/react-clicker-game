import React, {
    Component,
    PropTypes,
} from 'react';

import {Button} from 'react-bootstrap';

class MinionButton extends Component {
    render() {
        const {price, disabled} = this.props;
        return (
            <Button disabled={disabled}>Buy Minion ({price})</Button>
        );
    }
}

MinionButton.propTypes = {
    price: PropTypes.number
};

MinionButton.defaultProps = {
    price: 0
};

export default MinionButton;
