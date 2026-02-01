import React from 'react';

const Title = ({children}) => {
    return (
        <div>
            <div className="text-2xl bg-linear-90 from-sky-200 p-5 text-center">{children}</div>

        </div>
    );
};

export default Title;