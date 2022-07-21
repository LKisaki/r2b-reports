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
                        {/* TODO organize this image reference */}
                        <img src='./data-source.png' height='20px' title={this.props.name} />
                    </div>
                )}
            </Draggable>
        );
    }
}