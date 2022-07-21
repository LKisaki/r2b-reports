import React from "react";
import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from "react-beautiful-dnd";

export default class ReportCanvas extends React.Component {

    render() {
        return (
            <>
                <Droppable droppableId="reportHeaderDroppable">
                    {provided => (
                        <div id="report-header" ref={provided.innerRef} {...provided.droppableProps}>
                            <div className="report-region-name">Report Header</div>
                            {this.props.reportHeader.map((reportHeader, index) =>
                                <Draggable draggableId={'reportHeaderDroppable' + reportHeader.id} index={index} key={'reportHeaderDroppable' + reportHeader.id}>
                                    {(provided) => (
                                        <div className="report-region-element"
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}>
                                            {reportHeader.name}
                                        </div>
                                    )}
                                </Draggable>
                            )}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>

                <Droppable droppableId="reportBodyDroppable">
                    {provided => (
                        <div id="report-body" ref={provided.innerRef} {...provided.droppableProps}>
                            <div className="report-region-name">Report Body</div>
                            {this.props.reportBody.map((reportBody, index) =>
                                <Draggable draggableId={'reportBodyDroppable' + reportBody.id} index={index} key={'reportBodyDroppable' + reportBody.id}>
                                    {(provided) => (
                                        <div className="report-region-element"
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}>
                                            {reportBody.name}
                                        </div>
                                    )}
                                </Draggable>
                            )}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>

                <Droppable droppableId="reportFooterDroppable">
                    {provided => (
                        <div id="report-footer" ref={provided.innerRef} {...provided.droppableProps}>
                            <div className="report-region-name">Report Footer</div>
                            {this.props.reportFooter.map((reportFooter, index) =>
                                <Draggable draggableId={'reportFooterDroppable' + reportFooter.id} index={index} key={'reportFooterDroppable' + reportFooter.id}>
                                    {(provided) => (
                                        <div className="report-region-element"
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}>
                                            {reportFooter.name}
                                        </div>
                                    )}
                                </Draggable>
                            )}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </>
        )
    }
}