import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import {Link} from 'react-router-dom';


export const IndexButtons = () => {
    return (
        <div className="space-x-4 mt-2 ml-4">
            <Link to="/new">
                <Button className="w-24 h-16 rounded-xl">New</Button>
            </Link>
        </div>
    )
}