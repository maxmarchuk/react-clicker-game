import React, { Component } from 'react';
import { number, bool } from 'prop-types';
import { Button } from 'react-bootstrap';

class MinionButton extends Component {
  render() {
    const { amount, price, disabled } = this.props;
    return (
      <Button
        disabled={disabled}
        onClick={() => this.props.onClick(amount, price)}
      >
        Buy Minion ({price})
      </Button>
    );
  }
}

MinionButton.propTypes = {
  amount: number,
  price: number,
  disabled: bool
};

MinionButton.defaultProps = {
  amount: 0,
  price: 0,
  disabled: true
};

export default MinionButton;
