import React from 'react';
import data from './data'
import styled from 'styled-components';

import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';

import DataSource from './dataSource';
import ReportCanvas from './reportCanvas';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
`;

const DataSourceList = styled.div`
    padding: 8px;
`;

const ReportCanvasContainer = styled.div`
    padding: 8px;
`;

export default class App extends React.Component {
    state = data;

    arrayMove(arr, fromIndex, toIndex) {
        var element = arr[fromIndex];
        arr.splice(fromIndex, 1);
        arr.splice(toIndex, 0, element);
    }

    arrayMoveArrays(index, fromArray, toArray) {
        toArray.push(fromArray[index]);
        fromArray.slice(index, 1);
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

        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        let newDataSources = Array.from(this.state.dataSources);
        let newReportHeader = Array.from(this.state.reportHeader);
        let newReportBody = Array.from(this.state.reportBody);
        let newReportFooter = Array.from(this.state.reportFooter);

        //this.arrayMove(newDataSources, source.index, destination.index);
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

        if (destArray && !this.arrayContains(newDataSources[source.index], destArray)) {
            this.arrayMoveArrays(source.index, newDataSources, destArray);
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
                <Droppable droppableId="dataSourceDroppable" isDropDisabled={true} >
                    {provided => (
                        <Container ref={provided.innerRef} {...provided.droppableProps}>
                            <DataSourceList>
                                {this.state.dataSources.map((dataSource, index) =>
                                    <DataSource key={dataSource.id} id={dataSource.id} name={dataSource.name} index={index} />
                                )}
                            </DataSourceList>
                            {provided.placeholder}
                            <ReportCanvasContainer><ReportCanvas reportHeader={this.state.reportHeader} reportBody={this.state.reportBody} reportFooter={this.state.reportFooter} /></ReportCanvasContainer>

                        </Container>
                    )}
                </Droppable>

            </DragDropContext>
        );
    }
}