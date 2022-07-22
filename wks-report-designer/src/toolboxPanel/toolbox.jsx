import React from "react";
import ToolboxElement from "./toolboxElement";
import { Droppable } from "react-beautiful-dnd";

export default class ToolBoxPanel extends React.Component {

    render() {

        return (
            <Droppable droppableId="dataSourceDroppable" isDropDisabled={true}>
                {provided => (
                    <div
                        id='toolbox-container'
                        ref={provided.innerRef}
                        {...provided.droppableProps}>
                        {this.props.elements.map((element, index) =>
                            <ToolboxElement
                                key={element.id}
                                id={element.id}
                                name={element.name}
                                index={index} />
                        )}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        );

    }
}