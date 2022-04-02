import React from 'react';

const Task = ({task}) => {
    return (
        <div className='border rounded bg-primary container py-2 mx-2'>
            <h4 className='my-2'>Task UUID:{task.UUID}</h4>
            <p className='text-break'>Title:{task.title}</p>
        </div>
    );
};

export default Task;