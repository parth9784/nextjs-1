"use client";
import React, { useState } from 'react';

export default function Divide() {
    const [input1, setInput1] = useState<number | undefined>(undefined);
    const [input2, setInput2] = useState<number | undefined>(undefined);
    const [ans, setAns] = useState<number | undefined>(undefined);

    function handleClick() {
        if (input1 !== undefined && input2 !== undefined) {
            setAns(input1 / input2);
        }
    }

    return (
        <div className="flex flex-col justify-center items-center mt-4">
            <input
                value={input1 ?? ''}
                className="border border-1 border-black p-1"
                placeholder="Input 1st number"
                onChange={(e) => setInput1(Number(e.target.value))}
            />
            <input
                value={input2 ?? ''}
                className="border border-1 border-black p-1 mt-4"
                placeholder="Input 2nd number"
                onChange={(e) => setInput2(Number(e.target.value))}
            />
            <button
                className="p-2 border border-1 border-black rounded-lg mt-3"
                onClick={handleClick}
            >
                Submit
            </button>
            {ans !== undefined && <h1 className='mt-3 text-xl'>{`Division is ${ans}`}</h1>}
        </div>
    );
}
