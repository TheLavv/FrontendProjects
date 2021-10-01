import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReturnBtn from './ReturnBtn';
import {Provider} from "react-redux";
import {store} from "../../store";

export default {
    title: 'UI-Kit/ReturnBtn',
    component: ReturnBtn,
} as ComponentMeta<typeof ReturnBtn>;

const Template: ComponentStory<typeof ReturnBtn> = (args) => {
    return (
        <Provider store={store}>
            <ReturnBtn {...args} />
        </Provider>
        )
}

export const Primary = Template.bind({});

Primary.args = {
    url: '/'
};
