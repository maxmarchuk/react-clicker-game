import React, { Component } from 'react';
import { number, bool } from 'prop-types';
import { Button } from 'react-bootstrap';

class PowerButton extends Component {
  render() {
    const { amount, price, disabled } = this.props;
    return (
      <Button
        disabled={disabled}
        onClick={() => this.props.onClick(amount, price)}
      >
        Power + {amount} ({price})
      </Button>
    );
  }
}

PowerButton.propTypes = {
  amount: number,
  price: number,
  disabled: bool
};

PowerButton.defaultProps = {
  amount: 0,
  price: 0,
  disabled: true
};

export default PowerButton;
