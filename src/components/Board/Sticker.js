import React from 'react';
import PropTypes from 'prop-types';
import styles from './Board';

export const Sticker = props => {
    const { text, isDragging, connectDragSource, connectDropTarget } = props;
    return (
        <div className={styles.sticker + ' ' + isDragging ? styles.dragging: ''} draggable="true">
            <h3>{text}</h3>
        </div>
    );
};

Sticker.propTypes = {
    text: PropTypes.string,
    isDragging: PropTypes.bool,
    connectDragSource: PropTypes.object,
    connectDropTarget: PropTypes.object
};
