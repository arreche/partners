import React from 'react';
import Search from '../search/search';
import style from './style.css';

const Toolbar = (props) => {
    const { onSearch, onEdit, onNew } = props;

    return (
        <div className={style.toolbar}>
            <Search onChange={onSearch} wait={200}></Search>
            <button type="button" onClick={onEdit}>Edit</button>
            <button type="button" onClick={onNew}>New</button>
        </div>
    )
}

Toolbar.propTypes = {
    onSearch: React.PropTypes.func.isRequired,
    onEdit: React.PropTypes.func.isRequired,
    onNew: React.PropTypes.func.isRequired
}

export default Toolbar;
