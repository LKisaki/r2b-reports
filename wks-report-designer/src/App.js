import React from 'react';
import data from './data'

import { Allotment } from "allotment";
import { DragDropContext } from 'react-beautiful-dnd';

import AppMenu from './menu/menu';
import ToolBoxPanel from './toolboxPanel/toolbox';
import ReportCanvas from './reportCanvas/reportCanvas';
import PropertiesPanel from './propertiesPanel/propertiesPanel';
import StatusBar from './statusBar/statusBar';

import { dropElementIn, dropElementOut } from './dragAndDrop/dragAndDrop';

export default class App extends React.Component {
    state = data;

    onDragEnd = result => {
        let fields = Array.from(this.state.fields);
        let newReportHeader = Array.from(this.state.reportHeader);
        let newReportBody = Array.from(this.state.reportBody);
        let newReportFooter = Array.from(this.state.reportFooter);

        const { destination, source, draggableId } = result;

        if (!destination) {
            if (source.droppableId === 'dataSourceDroppable') {
                return;
            } else {
                dropElementOut(source, newReportHeader, newReportBody, newReportFooter);
            }
        } else if (destination) {
            dropElementIn(destination, newReportHeader, newReportBody, newReportFooter, source, fields);
        }

        const newState = {
            reportHeader: newReportHeader,
            reportBody: newReportBody,
            reportFooter: newReportFooter
        }
        this.setState(newState);
    }

    render() {
        return (
            <div id='main-container'>
                {/* Menu */}
                <AppMenu />

                <div id='internal-container'>
                    <Allotment>
                        <DragDropContext onDragEnd={this.onDragEnd}>
                            <Allotment>

                                {/* Toolbox */}
                                <Allotment.Pane maxSize={100}>
                                    <ToolBoxPanel elements={this.state.fields} />
                                </Allotment.Pane>

                                {/*  Canvas */}
                                <Allotment.Pane minSize={400}>
                                    <ReportCanvas
                                        reportHeader={this.state.reportHeader}
                                        reportBody={this.state.reportBody}
                                        reportFooter={this.state.reportFooter} />
                                </Allotment.Pane>

                                {/* Properties */}
                                <Allotment.Pane maxSize={200}>
                                    <PropertiesPanel />
                                </Allotment.Pane>

                            </Allotment>
                        </DragDropContext>
                    </Allotment>
                </div>

                {/* Status Bar */}
                <StatusBar />
            </div >
        );
    }
}