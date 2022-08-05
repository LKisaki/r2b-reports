import { TreeView } from '@mui/lab';
import { TreeItem } from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import '../component.css';
import './treeViewContainer.css';

function TreeViewContainerComponent(props) {
    if (!props.data || !props.data.firstLevelSet) {
        return <div>No data sources yet</div>
    } else if (props.data?.firstLevelSet) {
        return props.data?.firstLevelSet?.map((firstLevel) =>
            <TreeItem nodeId={firstLevel.id} label={firstLevel.label}>
                {props.data.secondLevelSet?.find(secondLevel => secondLevel.firstLevelId === firstLevel.id)?.columns.map((column) =>
                    <TreeItem nodeId={firstLevel.id.concat(column.id)} label={column.name} />
                )}
            </TreeItem>
        )
    }
}

export const TreeViewContainer = ({ data }) => {
    return (
        <>
            <div className='component-todo'>This should be a collapsable component</div>
            <TreeView
                className='toolbox'
                aria-label="file system navigator"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
            >
                <TreeViewContainerComponent data={data}></TreeViewContainerComponent>
            </TreeView>
        </>
    );
}