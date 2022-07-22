import React from 'react';
import data from './data'

import SplitPane from 'react-split-pane';
import "./split-pane.css"

import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';

import DataSource from './dataSource';
import ReportCanvas from './reportCanvas';

export default class App extends React.Component {
    state = data;

    arrayMove(arr, fromIndex, toIndex) {
        var element = arr[fromIndex];
        arr.splice(fromIndex, 1);
        arr.splice(toIndex, 0, element);
    }

    arrayMoveArrays(toIndex, element, toArray) {
        toArray.splice(toIndex, 0, element);
    }

    arrayContains(element, array) {
        for (let index = 0; index < array.length; index++) {
            array[index];
            if (element.id === array[index].id) {
                return true;
            }
        }
    }

    onDragEnd = result => {

        const newDataSources = Array.from(this.state.dataSources);
        let newReportHeader = Array.from(this.state.reportHeader);
        let newReportBody = Array.from(this.state.reportBody);
        let newReportFooter = Array.from(this.state.reportFooter);

        const { destination, source, draggableId } = result;

        if (!destination) {
            if (source.droppableId === 'dataSourceDroppable') {
                return;
            } else {
                let srcArray;
                switch (source.droppableId) {
                    case 'reportHeaderDroppable':
                        srcArray = newReportHeader;
                        break;
                    case 'reportBodyDroppable':
                        srcArray = newReportBody;
                        break;
                    case 'reportFooterDroppable':
                        srcArray = newReportFooter;
                }
                srcArray.splice(source.index, 1);
            }
        } else if (destination) {

            let destArray;
            switch (destination.droppableId) {
                case 'reportHeaderDroppable':
                    destArray = newReportHeader;
                    break;
                case 'reportBodyDroppable':
                    destArray = newReportBody;
                    break;
                case 'reportFooterDroppable':
                    destArray = newReportFooter;
            }

            if (destination.droppableId !== source.droppableId) {
                if (destArray && !this.arrayContains(newDataSources[source.index], destArray)) {
                    this.arrayMoveArrays(destination.index, newDataSources[source.index], destArray);
                }
            } else if (destination.droppableId === source.droppableId) {
                this.arrayMove(destArray, source.index, destination.index);
            }
        }

        const newState = {
            dataSources: newDataSources,
            reportHeader: newReportHeader,
            reportBody: newReportBody,
            reportFooter: newReportFooter
        }
        this.setState(newState);
    }

    render() {
        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}
            >
                <SplitPane split="vertical">
                    <Droppable droppableId="dataSourceDroppable" isDropDisabled={true}>
                        {provided => (
                            <div
                                id='main-container'
                                ref={provided.innerRef}
                                {...provided.droppableProps}>
                                <div
                                    id='toolbox-container'>
                                    {this.state.dataSources.map((dataSource, index) =>
                                        <DataSource
                                            key={dataSource.id}
                                            id={dataSource.id}
                                            name={dataSource.name}
                                            index={index} />
                                    )}
                                </div>
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>

                    <div id='report-canvas-container' className='shadow-lg'>
                        <ReportCanvas
                            reportHeader={this.state.reportHeader}
                            reportBody={this.state.reportBody}
                            reportFooter={this.state.reportFooter} />
                    </div>
                </SplitPane>
            </DragDropContext>
        );
    }
}