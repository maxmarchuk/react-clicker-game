import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GameHeader extends Component {
    render() {
        const { points, power, minions } = this.props;
        return (
            <div>
                <h1>{points}</h1>
                <p>Power: <span>{power}</span> | Auto: <span>{minions}</span></p>
            </div>
        );
    }
}

GameHeader.propTypes = {
    points: PropTypes.number,
    power: PropTypes.number,
    minions: PropTypes.number
};

GameHeader.defaultProps = {
    points: 0,
    power: 0,
    minions: 0
};

export default GameHeader;
