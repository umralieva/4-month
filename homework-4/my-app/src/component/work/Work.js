import React from 'react';

function Work({status}) {
    return (
        <ul>
            {
                status.map((works, index) =>
                    <li key={index}>{works}</li>)
            }
        </ul>
    );
}

export default Work;