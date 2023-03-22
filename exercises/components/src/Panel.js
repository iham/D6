import React, { useState } from 'react';

import {BsCaretDown, BsCaretRight} from 'react-icons/bs';

const Panel = props => {
    const [collapsed, setCollapsed] = useState(props.collapsed || false);
    return (
        <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center" onClick={(evt) => setCollapsed(!collapsed)}>
                <h3>{props.title}</h3>
                {!collapsed ? <BsCaretDown /> : <BsCaretRight />}
            </div>
            {!collapsed &&
                <div className="card-body">
                    {props.children}
                </div>
            }
        </div>
    );
}

export default Panel;