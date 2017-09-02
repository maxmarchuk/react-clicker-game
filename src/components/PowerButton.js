import React, {
    Component,
    PropTypes,
} from 'react';

class PowerButton extends Component {
    render() {
        const { price } = this.props;
        return (
            <button>Power Boost ({price})</button>
        );
    }
}

PowerButton.propTypes = {
    power: PropTypes.number,
    price: PropTypes.number
};

PowerButton.defaultProps = {
    power: 0,
    price: 0
};

export default PowerButton;
