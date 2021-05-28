import {
    AppBar,
    CssBaseline,
    Drawer,
    IconButton,
    List,
    ListItemIcon,
    withStyles,
    Toolbar,
    Typography,
} from '@material-ui/core'
import React, { Component } from 'react'
import './Dashboard.css'
import Keep from "../../Component/Assets/keep.png";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import RefreshIcon from '@material-ui/icons/Refresh';
import ViewStreamIcon from '@material-ui/icons/ViewAgendaOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import GetNote from '../../Component/GetNote/GetNote'
import { Route, Router, Switch } from 'react-router';
import Appbar from '../../Component/Appbar/Appbar';
import DrawerPart from '../../Component/Drawer/DrawerPart';
const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
        marginTop: "100px",
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        marginTop: "80px",
    },
    drawerClose: {
        width: drawerWidth-180,
        flexShrink: 0,
        marginTop: "80px",
    },
    drawerPaper: {
        width: drawerWidth,
        marginTop: "70px",
    },
    drawerPaperClose: {
        width: drawerWidth-180,
        marginTop: "70px",
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    listItems: {
        letterSpacing: '.01785714em',
        fontFamily: 'Google Sans, Roboto, Arial, sans-serif',
        fontSize: '.875rem',
        fontWeight:'500',
        lineHeight:'1.25rem',
        paddingleft: '24px',
        color: '#202124',
        borderRadius: '0 25px 25px 0',
      
      '&:focus':{
        backgroundColor: '#feefc3',
        borderRadius: '0 25px 25px 0',
      },
    },
})

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            profile: false,
        }
    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
        console.log("open the Drawer", this.state.open);
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
        console.log("in close button");
    };

    handleProfile = () => {
        console.log("profile button");
        this.setState({ profile: !this.state.profile })
        
    }

    signout = () => {
        localStorage.removeItem('Token')
        localStorage.removeItem('userDetails')
        localStorage.removeItem('Email')
        localStorage.removeItem('LastName')
        localStorage.removeItem('FirstName')
        this.props.history.push("/login")
    }

    change = () => {
        this.setState({ open: !this.state.open });
    };

    notes = () => {
        // window.location.href = 'http://localhost:3000/dashboard'
    }


    render() {
        const { classes } = this.props;
        console.log(this.state.open);
        return (
            <div className="root">
                <CssBaseline />
                <Appbar/>
                {/* <DrawerPart/> */}
                <GetNote/>
            </div>
        )
    }
}

export default withStyles(styles)(Dashboard)