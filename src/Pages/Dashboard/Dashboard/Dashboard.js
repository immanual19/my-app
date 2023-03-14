import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Navigate, useNavigate } from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import LogoutIcon from '@mui/icons-material/Logout';
import AttachmentIcon from '@mui/icons-material/Attachment';
import ListItemIcon from '@mui/material/ListItemIcon';
import LineWeightIcon from '@mui/icons-material/LineWeight';
import GridOnIcon from '@mui/icons-material/GridOn';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import MainSetup from '../MainSetup/MainSetup';
import Table1 from '../Tables/Table1';
import Tables from '../Tables/Tables';

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}



export default function Dashboard(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [table,setTable]=React.useState(false);
  const navigate = useNavigate();
  const [mainSetup, setMainSetup]=React.useState(true);
  const [login,setLogin]=React.useState(true);
  const [fileInfo,setFileInfo]=React.useState({});
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  

  const logout = () => {
    //("logout");
    let cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf('=');
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }
    navigate('/');
  };

  const ListData=[
   {
      name: "Option1",
      icon: <AttachmentIcon></AttachmentIcon>
   },
   {
      name: "Option2",
      icon: <MailIcon></MailIcon>
   },
   {
      name: "Option3",
      icon: <GridOnIcon></GridOnIcon>
   },
   {
      name: "Option4",
      icon: <LineWeightIcon></LineWeightIcon>
   },
   {
      name: "Logout",
      icon: <LogoutIcon></LogoutIcon>
   }
  ]

  const handleClick=(index)=>{
   if(index===0)
   {
      setTable(false);
      setMainSetup(true);
       //console.log("Clicked ",index);
   }
   else if(index===1){
      setTable(true);
      setMainSetup(false);
      //console.log("Clicked ",index);
   }
   else if(index===2){
      setTable(false);
      setMainSetup(false);
      //console.log("Clicked ",index);
   }
   else if(index===3){
    setTable(false);
      setMainSetup(false);
      //console.log("Clicked ",index);
   }
   else if(index===4){
    setTable(false);
      setMainSetup(false);
     //  console.log("logout clicked");
      logout();
   }
   else{

   }
}

  const drawer = (

    <div>
      <Toolbar />
      <Divider />
      <List>
      {ListData.map((list, index) => (
         <ListItem
         onClick={()=>handleClick(index)}
         key={list.name} disablePadding>
           <ListItemButton>
             <ListItemIcon>
             {list.icon}
             </ListItemIcon>
             <ListItemText primary={list.name} />
           </ListItemButton>
         </ListItem>
       ))}
      

        
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Example Application
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {
          mainSetup && <MainSetup fileInfo={fileInfo} setFileInfo={setFileInfo}></MainSetup>
        }
        
        {
          table && <Tables fileInfo={fileInfo}></Tables>
          
        }
        
      </Box>
    </Box>
  );
}