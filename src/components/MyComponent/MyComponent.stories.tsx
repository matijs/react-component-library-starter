import React from 'react';
import { MyComponent } from './MyComponent';

export default {
    title: 'UI/Headers',
    component: MyComponent,
};

export const Header1 = (): JSX.Element => <MyComponent name="you" />;
