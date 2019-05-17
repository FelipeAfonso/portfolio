import React, { PureComponent } from 'react'
import tile from '../CROWN_TILE.svg';
import './AnimatedLogo.scss';

export default class AnimatedLogo extends PureComponent {
  render() {
    return (
        <div className="animation-container">
            <img src={tile} className="animated-logo-back"/>
            <img src={tile} className="animated-logo"/>
        </div>
    )
  }
}
