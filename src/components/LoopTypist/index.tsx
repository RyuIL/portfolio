import * as React from 'react';
import Typist from 'react-typist';

interface LoopTypistProps {
    text: string;
}

export default (props: LoopTypistProps) => {
    console.log();
    return (
        <>
            <Typist></Typist>
        </>
    )
}
