import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Board.css';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import List from './List';

class Board extends React.Component {

    render() {
        let lists = this.props.lists.lists.map((list, i) => {
            return (
                <List key={i} {...list}></List>
            );
        });
        return (
            <div className={styles.wrapper}>
                {lists}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lists: state.lists,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

Board = DragDropContext(HTML5Backend)(Board);
export default connect(mapStateToProps, mapDispatchToProps)(Board);

Board.propTypes = {
    lists: PropTypes.object,
};
