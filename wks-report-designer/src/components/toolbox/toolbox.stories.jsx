import { Toolbox } from './toolbox'

export default {
    title: 'Toolbox',
    component: Toolbox
}

const Template = (args) => <Toolbox {...args} />;

export const EmptyData = Template.bind({});
EmptyData.args = {
};
