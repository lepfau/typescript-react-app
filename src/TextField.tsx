import React from "react";

interface Props {
    text: string;
}

export const TextField: React.FC<Props> = ({text}) => {
    return (
        <div>
            <h1>hello im textfield</h1>
            <h2>{text}</h2>
        </div>
    )
}