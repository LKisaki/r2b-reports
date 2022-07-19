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
    padding: 8px;
`;

const DataSourceList = styled.div`
    padding: 8px;
`;

const ReportCanvasContainer = styled.div`
    padding: 8px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
`;

export default class App extends React.Component {
    state = data;

    onDragEnd = result => {

        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }
        console.log(destination);
    }

    render() {
        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}
            >
                <Droppable droppableId="dataSourceDroppable">
                    {provided => (
                        <Container ref={provided.innerRef} {...provided.droppableProps}>
                            <DataSourceList>
                                {this.state.dataSources.map((dataSource, index) =>
                                    <DataSource key={dataSource.id} id={dataSource.id} name={dataSource.name} index={index} />
                                )}
                            </DataSourceList>
                            {provided.placeholder}
                            <ReportCanvasContainer><ReportCanvas /></ReportCanvasContainer>

                        </Container>
                    )}
                </Droppable>

            </DragDropContext>
        );
    }
}