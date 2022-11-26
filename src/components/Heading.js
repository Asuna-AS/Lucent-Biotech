import React from 'react';
import Bounce from 'react-reveal/Bounce';

const Heading = ({title}) => {
    return (
        <Bounce left>
            <div className="flex flex-row items-center space-x-2 pb-4">
                <div className="bg-green-500 flex items-center justify-center w-1 h-20"></div>
                <h1 className="flex flex-col text-gray-700 poppins text-5xl">Our <span className="text-green-500 font-semibold select-none">{title}</span></h1>
            </div>
        </Bounce>
    )
}

export default Heading
