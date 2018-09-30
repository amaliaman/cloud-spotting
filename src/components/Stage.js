import React, { Component } from 'react';
import Box from './Box';
import boxUtils from '../utils/boxUtils';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

class Stage extends Component {
  render() {
    const boxes = [];
    for (let i = 0; i < this.props.level; i++) {
      const size = boxUtils.getRandomSize();
      boxes.push(
        <Box
          key={i}
          icon={faCloud}
          size={size}
          position={boxUtils.getRandomPosition(size)}
          color={boxUtils.getRandomColor()}
          degrees={boxUtils.getRandomDegrees()}
        />
      );
    };

    return (
      <div className="stage">
        {boxes}
      </div>
    )
  }
}

export default Stage;
