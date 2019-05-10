import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import GenKeyForm from "./GenKeyForm"
import ShowKeys from "./ShowKeys"

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});


function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

function ScrollableTabsButtonAuto() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const tabs = [
        { label: "create key", component: GenKeyForm },
        { label: "show keys", component: ShowKeys }
    ]

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    {tabs.map((t, k) => <Tab label={t.label} key={'tabs-' + k} />)}
                </Tabs>
            </AppBar>
            {tabs.map((t, k) => {
                if (value === k) return <TabContainer><t.component /></TabContainer>
            })}
        </div>
    );
}

export default ScrollableTabsButtonAuto;