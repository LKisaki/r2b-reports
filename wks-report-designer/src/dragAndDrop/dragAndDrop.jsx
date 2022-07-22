export const dropElementIn = (destination, newReportHeader, newReportBody, newReportFooter, source, fields) => {
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
        if (destArray && !arrayContains(fields[source.index], destArray)) {
            transferArrayElement(destination.index, fields[source.index], destArray);
        }
    } else if (destination.droppableId === source.droppableId) {
        reorderArray(destArray, source.index, destination.index);
    }
}

export const dropElementOut = (source, newReportHeader, newReportBody, newReportFooter) => {
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

const reorderArray = (arr, fromIndex, toIndex) => {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
}

const transferArrayElement = (toIndex, element, toArray) => {
    toArray.splice(toIndex, 0, element);
}

const arrayContains = (element, array) => {
    for (let index = 0; index < array.length; index++) {
        array[index];
        if (element.id === array[index].id) {
            return true;
        }
    }
}