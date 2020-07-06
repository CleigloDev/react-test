import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './styles.css';

export default function MyDialog(props) {
    const aSortableFields = [
        {
            key: "ALPHASC",
            text: "Organization Name"
        },
        {
            key: "ALPHDESC",
            text: "Organization Name"
        },
        {
            key: "DATEASC",
            text: "Founding Date"
        },
        {
            key: "DATEDESC",
            text: "Founding Date"
        }
    ];

    const { onClose, selectedKey, open } = props;

    const _handleClose = () => {
        onClose(selectedKey);
    };

    const _handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={_handleClose} open={open}>
            <DialogTitle><b>Sort List</b></DialogTitle>
            <List>
                {aSortableFields.map((oSortableField) => (
                    <ListItem button onClick={() => _handleListItemClick(oSortableField.key)} key={oSortableField.key}>
                        <div style={{marginLeft: "0.2rem", marginRight: "0.5rem"}}>
                            {oSortableField.key.search("ASC") !== -1 ? <img src="https://img.icons8.com/fluent/48/000000/sort-up.png"/> :
                                <img src="https://img.icons8.com/fluent/48/000000/sort-down.png"/>}
                        </div>
                        <ListItemText primary={<p>{oSortableField.text}</p>} />
                    </ListItem>
                ))}
            </List>
        </Dialog>
    );
};



