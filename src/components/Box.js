import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Box extends Component {
    render() {
        const { icon, color, size, position, degrees } = this.props;

        return (
            <div
                className="box"
                style={{
                    color: color,
                    fontSize: size,
                    left: position.x,
                    top: position.y,
                    transform: `rotate(${degrees})`
                }}
            >
                <FontAwesomeIcon icon={icon} />
            </div>
        )
    }
}

export default Box
