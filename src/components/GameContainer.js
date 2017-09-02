import React, {Component} from 'react';

import Scoreboard from "./Scoreboard";
import Clicker from "./Clicker";
import ButtonSection from "./ButtonSection";
import PowerButton from "./PowerButton";
import MinionButton from "./MinionButton";
import ResetButton from "./ResetButton";


const DEFAULT_STATE = {
    points: 0,
    power: 1,
    minions: 0
};

class GameContainer extends Component {
    constructor(props) {
        super(props);

        this.state = DEFAULT_STATE;

        setInterval(() => this.onTick(), 1000);
    }

    onTick() {
        const { points, minions } = this.state;
        if(minions > 0) {
            this.setState({
                points: points + minions
            });
        }

    }

    onClickerClick() {
        const {points, power} = this.state;

        this.setState({points: points + power})
    }

    addPower(powerToAdd, cost) {
        const {points, power}= this.state;

        this.setState({
            power: power + powerToAdd,
            points: points - cost
        });
    }

    addMinions(minionsToAdd, cost) {
        const {minions, points}= this.state;

        this.setState({
            minions: minions + minionsToAdd,
            points: points - cost
        });
    }

    resetGame() {
        this.setState(DEFAULT_STATE);
    }

    render() {
        const points = this.state.points;
        const power = this.state.power;
        const minions = this.state.minions;

        return (
            <div className='game-container'>
                <Scoreboard points={points} power={power} minions={minions}/>
                <Clicker onClick={ () => this.onClickerClick() }/>

                <ButtonSection title='Store'>
                    <PowerButton
                        amount={3}
                        price={5}
                        disabled={points < 5}
                        onClick={this.addPower.bind(this)}
                    />
                    <MinionButton
                        amount={1}
                        price={15}
                        disabled={points < 15}
                        onClick={this.addMinions.bind(this)}
                    />
                </ButtonSection>
                <ButtonSection title='Other'>
                    <ResetButton onResetClick={this.resetGame.bind(this)}/>
                </ButtonSection>
            </div>
        );
    }
}

export default GameContainer;
