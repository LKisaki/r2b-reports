import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export default class DataSource extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.id} index={this.props.index}>
                {(provided) => (
                    <div className='toolbox-element'
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        {this.props.name}
                    </div>
                )}
            </Draggable>
        );
    }
}