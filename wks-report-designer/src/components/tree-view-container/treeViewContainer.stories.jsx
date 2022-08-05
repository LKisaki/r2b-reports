import React from "react";
import { TreeViewContainer } from "./treeViewContainer";

export default {
    title: 'TreeViewContainer',
    component: TreeViewContainer
}

const Template = (args) => <TreeViewContainer {...args} />;

export const EmptyData = Template.bind({});
EmptyData.args = {
};

export const EmptyFirstLevel = Template.bind({});
EmptyFirstLevel.args = {
    data: {

    }
};

export const SingleFirstLevelWithNoColumns = Template.bind({});
SingleFirstLevelWithNoColumns.args = {
    data: {
        firstLevelSet: [{ id: '1', label: 'First Level One' }]
    }
};

export const SingleFirstLevel = Template.bind({});
SingleFirstLevel.args = {
    data: {
        firstLevelSet: [{ id: '1', label: 'First Level One' }],
        secondLevelSet: [
            { firstLevelId: '1', columns: [{ id: '1.1', name: 'secondLevel1.1' }, { id: '1.2', name: 'secondLevel1.2' }, { id: '1.3', name: 'secondLevel1.3' }] }
        ]

    }
};

export const ManyDataSources = Template.bind({});
ManyDataSources.args = {
    data: {
        firstLevelSet: [{ id: '1', label: 'First Level 1' },
        { id: '2', label: 'First Level 2' },
        { id: '3', label: 'First Level 3' },
        { id: '4', label: 'First Level 4' },
        { id: '5', label: 'First Level 5' },
        { id: '6', label: 'First Level 6' },
        { id: '7', label: 'First Level 7' },
        { id: '8', label: 'First Level 8' },
        { id: '9', label: 'First Level 9' },
        { id: '10', label: 'First Level 10' },
        { id: '11', label: 'First Level 11' },
        { id: '12', label: 'First Level 12' },
        { id: '13', label: 'First Level 13' },
        { id: '14', label: 'First Level 14' },
        { id: '15', label: 'First Level 15' }
        ],
        secondLevelSet: [
            { firstLevelId: '1', columns: [{ id: '1.1', name: 'secondLevel1.1' }, { id: '1.2', name: 'secondLevel1.2' }, { id: '1.3', name: 'secondLevel1.3' }] },
            { firstLevelId: '2', columns: [{ id: '1.1', name: 'secondLevel1.1' }, { id: '1.2', name: 'secondLevel1.2' }, { id: '1.3', name: 'secondLevel1.3' }] },
            { firstLevelId: '3', columns: [{ id: '1.1', name: 'secondLevel1.1' }, { id: '1.2', name: 'secondLevel1.2' }, { id: '1.3', name: 'secondLevel1.3' }] },
            { firstLevelId: '4', columns: [{ id: '1.1', name: 'secondLevel1.1' }, { id: '1.2', name: 'secondLevel1.2' }, { id: '1.3', name: 'secondLevel1.3' }] },
            { firstLevelId: '5', columns: [{ id: '1.1', name: 'secondLevel1.1' }, { id: '1.2', name: 'secondLevel1.2' }, { id: '1.3', name: 'secondLevel1.3' }] },
            { firstLevelId: '6', columns: [{ id: '1.1', name: 'secondLevel1.1' }, { id: '1.2', name: 'secondLevel1.2' }, { id: '1.3', name: 'secondLevel1.3' }] },
            { firstLevelId: '7', columns: [{ id: '1.1', name: 'secondLevel1.1' }, { id: '1.2', name: 'secondLevel1.2' }, { id: '1.3', name: 'secondLevel1.3' }] },
            { firstLevelId: '8', columns: [{ id: '1.1', name: 'secondLevel1.1' }, { id: '1.2', name: 'secondLevel1.2' }, { id: '1.3', name: 'secondLevel1.3' }] },
            { firstLevelId: '9', columns: [{ id: '1.1', name: 'secondLevel1.1' }, { id: '1.2', name: 'secondLevel1.2' }, { id: '1.3', name: 'secondLevel1.3' }] },
            { firstLevelId: '10', columns: [{ id: '1.1', name: 'secondLevel1.1' }, { id: '1.2', name: 'secondLevel1.2' }, { id: '1.3', name: 'secondLevel1.3' }] },
            { firstLevelId: '11', columns: [{ id: '1.1', name: 'secondLevel1.1' }, { id: '1.2', name: 'secondLevel1.2' }, { id: '1.3', name: 'secondLevel1.3' }] },
            { firstLevelId: '12', columns: [{ id: '1.1', name: 'secondLevel1.1' }, { id: '1.2', name: 'secondLevel1.2' }, { id: '1.3', name: 'secondLevel1.3' }] },
            { firstLevelId: '13', columns: [{ id: '1.1', name: 'secondLevel1.1' }, { id: '1.2', name: 'secondLevel1.2' }, { id: '1.3', name: 'secondLevel1.3' }] },
            { firstLevelId: '14', columns: [{ id: '1.1', name: 'secondLevel1.1' }, { id: '1.2', name: 'secondLevel1.2' }, { id: '1.3', name: 'secondLevel1.3' }] },
            { firstLevelId: '15', columns: [{ id: '1.1', name: 'secondLevel1.1' }, { id: '1.2', name: 'secondLevel1.2' }, { id: '1.3', name: 'secondLevel1.3' }] }
        ]

    }
};