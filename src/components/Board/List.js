import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Board.css';
import { Sticker } from './Sticker';
import { addToList } from '../../actions/listActions';
import ItemTypes from '../../constants/itemTypes';
import { DragSource } from 'react-dnd';

const itemSource = {
    beginDrag(props) {

    },
    endDrag(props) {

    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
};



class List extends React.Component {
    render() {
        const { isDragging, connectDragSource, src, name } = this.props;

        let stickers = this.props.stickers
            .filter(sticker => sticker.listId === this.props.id)
            .map((sticker, i) => {
                return <Sticker key={i} {...sticker} />;
            });

        return (
            <div className={styles.list}>
                {name}
                {stickers}
            </div>

        );
    }
};

const mapStateToProps = (state) => {
    return {
        stickers: state.lists.stickers
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToList: (sticker) => {
            dispatch(addToList(sticker));
        }
    };
};

List = DragSource(ItemTypes.LIST, itemSource, collect)(List);
export default connect(mapStateToProps, mapDispatchToProps)(List);

List.propTypes = {
    name: PropTypes.string,
    stickers: PropTypes.array,
    id: PropTypes.number,
    isDragging: PropTypes.bool,
    connectDragSource: PropTypes.object,
    src: PropTypes.object
};
