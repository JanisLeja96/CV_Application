import React, { FC, useContext, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import {Link} from "react-router-dom";

type Props = {
    showModal: () => void
}

export const EditButtons: FC<Props> = (props) => {

    return (
        <div className="space-x-4 mt-2 ml-4">
            <Button type="button" onClick={props.showModal} className="w-24 h-16 rounded-xl">Save</Button>
            <Link to="/">
                <Button className="w-24 h-16 rounded-xl bg-red-700">Cancel</Button>
            </Link>
          </div>
    )
}