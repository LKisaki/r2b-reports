import React from "react";
import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from "react-beautiful-dnd";

export default class ReportCanvas extends React.Component {

    render() {
        return (
            <>
                <Droppable droppableId="reportHeaderDroppable" direction='horizontal'>
                    {provided => (
                        <>
                            <div className="report-region-name">Report Header</div>

                            <div
                                id="report-header"
                                className='shadow'
                                ref={provided.innerRef}
                                {...provided.droppableProps}>
                                {this.props.reportHeader.map((reportHeader, index) =>

                                    <Draggable
                                        draggableId={'reportHeaderDroppable' + reportHeader.id}
                                        index={index} key={'reportHeaderDroppable' + reportHeader.id}
                                        disableInteractiveElementBlocking>
                                        {(provided) => (
                                            <div
                                                className="report-region-element"
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
                        </>
                    )}
                </Droppable>

                <Droppable droppableId="reportBodyDroppable" direction='horizontal'>
                    {provided => (
                        <>
                            <div className="report-region-name">Report Body</div>

                            <div
                                id="report-body"
                                className='shadow'
                                ref={provided.innerRef}
                                {...provided.droppableProps}>
                                {this.props.reportBody.map((reportBody, index) =>
                                    <Draggable
                                        draggableId={'reportBodyDroppable' + reportBody.id}
                                        index={index}
                                        key={'reportBodyDroppable' + reportBody.id}>
                                        {(provided) => (
                                            <div
                                                className="report-region-element"
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
                        </>
                    )}
                </Droppable>

                <Droppable droppableId="reportFooterDroppable" direction='horizontal'>
                    {provided => (
                        <>
                            <div className="report-region-name">Report Footer</div>

                            <div 
                                id="report-footer"
                                className='shadow'
                                ref={provided.innerRef}
                                {...provided.droppableProps}>
                                {this.props.reportFooter.map((reportFooter, index) =>

                                    <Draggable
                                        draggableId={'reportFooterDroppable' + reportFooter.id}
                                        index={index}
                                        key={'reportFooterDroppable' + reportFooter.id}>

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
                        </>
                    )}
                </Droppable>
            </>
        )
    }
}