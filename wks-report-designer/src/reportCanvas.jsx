import React from "react";
import styled from "styled-components";
import { Droppable } from 'react-beautiful-dnd';

const ReportHeader = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    text-align: center;
`;

const ReportBody = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    text-align: center;
`;

const ReportFooter = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    text-align: center;
`;

const ReporteRegionName = styled.h5`
    color: gray;
`;

export default class ReportCanvas extends React.Component {

    render() {
        return (
            <>
                <Droppable droppableId="reportHeaderDroppable">
                    {provided => (
                        <ReportHeader ref={provided.innerRef} {...provided.droppableProps}>
                            <ReporteRegionName>Report Header</ReporteRegionName>
                            {provided.placeholder}
                        </ReportHeader>
                    )}
                </Droppable>

                <Droppable droppableId="reportBodyDroppable">
                    {provided => (
                        <ReportBody ref={provided.innerRef} {...provided.droppableProps}>
                            <ReporteRegionName>Report Body</ReporteRegionName>
                            {provided.placeholder}
                        </ReportBody>
                    )}
                </Droppable>

                <Droppable droppableId="reportFooterDroppable">
                    {provided => (
                        <ReportFooter ref={provided.innerRef} {...provided.droppableProps}>
                            <ReporteRegionName>Report Footer</ReporteRegionName>
                            {provided.placeholder}
                        </ReportFooter>
                    )}
                </Droppable>
            </>
        )
    }
}