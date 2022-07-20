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

const RegionElement = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
`;

export default class ReportCanvas extends React.Component {

    render() {
        return (
            <>
                <Droppable droppableId="reportHeaderDroppable">
                    {provided => (
                        <ReportHeader ref={provided.innerRef} {...provided.droppableProps}>
                            <ReporteRegionName>Report Header</ReporteRegionName>
                            {this.props.reportHeader.map(reportHeader => {
                                return <RegionElement key={reportHeader.id}>{reportHeader.id}</RegionElement>
                            })}
                            {provided.placeholder}
                        </ReportHeader>
                    )}
                </Droppable>

                <Droppable droppableId="reportBodyDroppable">
                    {provided => (
                        <ReportBody ref={provided.innerRef} {...provided.droppableProps}>
                            <ReporteRegionName>Report Body</ReporteRegionName>
                            {this.props.reportBody.map(reportBody => {
                                return <RegionElement key={reportBody.id}>{reportBody.id}</RegionElement>
                            })}
                            {provided.placeholder}
                        </ReportBody>
                    )}
                </Droppable>

                <Droppable droppableId="reportFooterDroppable">
                    {provided => (
                        <ReportFooter ref={provided.innerRef} {...provided.droppableProps}>
                            <ReporteRegionName>Report Footer</ReporteRegionName>
                            {this.props.reportFooter.map(reportFooter => {
                                return <RegionElement key={reportFooter.id}>{reportFooter.id}</RegionElement>
                            })}
                            {provided.placeholder}
                        </ReportFooter>
                    )}
                </Droppable>
            </>
        )
    }
}