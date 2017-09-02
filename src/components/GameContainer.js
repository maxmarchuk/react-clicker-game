import React, {Component} from 'react';

import Scoreboard from "./Scoreboard";
import Clicker from "./Clicker";
import ButtonSection from "./ButtonSection";
import PowerButton from "./PowerButton";
import MinionButton from "./MinionButton";


class GameContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            points: 0,
            power: 1,
            minions: 0
        };
    }

    onClickerClick() {
        const {points, power} = this.state;

        this.setState({points: points + power})
    }

    render() {
        const points = this.state.points;
        const power = this.state.power;
        const minions = this.state.minions;

        return (
            <div className='game-container'>
                <Scoreboard points={points} power={power} minions={minions}/>
                <Clicker onClick={this.onClickerClick.bind(this)}/>

                <ButtonSection title='Store'>
                    <PowerButton price={5} disabled={points < 5}/>
                    <MinionButton price={15} disabled={points < 15}/>
                </ButtonSection>
            </div>
        );
    }
}

export default GameContainer;
