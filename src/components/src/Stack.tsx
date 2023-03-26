import React from 'react';
import Stack from '@mui/material/Stack';

import { StackProps } from '@mui/material/Stack';

const defaultVerticalDims = {
    width: 100,
    height: 300,
};
const defaultHorizontalDims = {
    width: 300,
    height: 100,
};


const OurlitStack = ({
    direction, spacing, justifyContent, alignItems,
    divider, style, children 
}: { direction: 'row' | 'column' } & StackProps) => {

    const spacingInUse = spacing ? spacing : 2;
    const justifyContentInUse = justifyContent ? justifyContent : 'center';
    const alignItemsInUse = alignItems ? alignItems : 'center';

    return (
        <Stack
            direction={direction}
            spacing={spacingInUse}
            justifyContent={justifyContentInUse}
            alignItems={alignItemsInUse}
            divider={divider}
            sx={style}>
                {children}
        </Stack>
    );
};


export const VerticalStack = ({
    spacing, justifyContent, alignItems,
    divider, style, children 
}: StackProps) => {

    const styleInUse = style ? { ...defaultVerticalDims, ...style } : defaultVerticalDims; 
    return (
        <OurlitStack
        direction="column"
        spacing={spacing}
        justifyContent={justifyContent}
        alignItems={alignItems}
        divider={divider}
        style={styleInUse}
        >
        {children}
        </OurlitStack>
    );
};


export const HorizontalStack = ({
    spacing, justifyContent, alignItems,
    divider, style, children 
}: StackProps) => {

    const styleInUse = style ? { ...defaultHorizontalDims, ...style } : defaultHorizontalDims; 
    return (
        <OurlitStack
        direction="row"
        spacing={spacing}
        justifyContent={justifyContent}
        alignItems={alignItems}
        divider={divider}
        style={styleInUse}
        >
        {children}
        </OurlitStack>
    );
};
