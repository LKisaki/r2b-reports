import React from "react";

import { Allotment } from "allotment";

import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from "react-beautiful-dnd";

export default class ReportCanvas extends React.Component {

    render() {
        return (
            <div id='report-canvas-container' className='shadow-lg'>

                {/* Header */}
                <div className="report-region-name">Report Header</div>
                <Droppable droppableId="reportHeaderDroppable" direction='horizontal'>
                    {provided => (
                        <div
                            id="report-header"
                            ref={provided.innerRef}
                            {...provided.droppableProps}>
                            {this.props.reportHeader.map((reportHeader, index) =>
                                <Draggable
                                    draggableId={'reportHeaderDroppable' + reportHeader.id}
                                    index={index}
                                    key={'reportHeaderDroppable' + reportHeader.id}
                                    disableInteractiveElementBlocking>
                                    {(provided) => (
                                        <input
                                            className="report-region-element"
                                            disabled={true}
                                            value={reportHeader.name}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef} />
                                    )}
                                </Draggable>
                            )}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>

                {/* Body */}
                <div className="report-region-name">Report Body</div>
                <Droppable droppableId="reportBodyDroppable" direction='horizontal'>
                    {provided => (
                        <div
                            id="report-body"
                            ref={provided.innerRef}
                            {...provided.droppableProps}>
                            {this.props.reportBody.map((reportBody, index) =>
                                <Draggable
                                    draggableId={'reportBodyDroppable' + reportBody.id}
                                    index={index}
                                    key={'reportBodyDroppable' + reportBody.id}
                                    disableInteractiveElementBlocking>
                                    {(provided) => (
                                        <input
                                            className="report-region-element"
                                            disabled={true}
                                            value={reportBody.name}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef} />
                                    )}
                                </Draggable>
                            )}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>

                {/* Footer */}
                <div className="report-region-name">Report Footer</div>
                <Droppable droppableId="reportFooterDroppable" direction='horizontal'>
                    {provided => (
                        <div
                            id="report-footer"
                            ref={provided.innerRef}
                            {...provided.droppableProps}>
                            {this.props.reportFooter.map((reportFooter, index) =>
                                <Draggable
                                    draggableId={'reportFooterDroppable' + reportFooter.id}
                                    index={index}
                                    key={'reportFooterDroppable' + reportFooter.id}
                                    disableInteractiveElementBlocking>
                                    {(provided) => (
                                        <input
                                            className="report-region-element"
                                            disabled={true}
                                            value={reportFooter.name}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef} />
                                    )}
                                </Draggable>
                            )}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        )
    }
}