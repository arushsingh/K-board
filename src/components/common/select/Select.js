import React from 'react';
import './select.css';


class SelectPage extends React.Component {
    render() {
        return (
            <div id="select-drop">
                <select className="drop-menu">
                    <option> Select Sub-Topic</option>
                    <option>one</option>
                    <option>Two</option>
                    <option>Three</option>
                    <option>Four</option>
                    <option>Five</option>
                </select>
            </div>
        )
    }
}
export default SelectPage;