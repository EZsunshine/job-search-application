import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import PieChart from '@mui/icons-material/PieChart';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { Link } from "react-router-dom"

export default function Navigation() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sheet
        variant="solid"
        color="info"
        invertedColors
        sx={(theme) => ({
          p: 2,
          ml: -3,
          my: -3,
          background: `linear-gradient(to top, ${theme.vars.palette.info[700]}, ${theme.vars.palette.info[600]} 25%, ${theme.vars.palette.info[500]} 75%)`,
        })}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Avatar src="/static/images/avatar/2.jpg" size="lg" />
          <Typography sx={{ flex: 1 }}>Jerry Wilson</Typography>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
        <List
          sx={{
            '--List-item-radius': '8px',
            '--List-gap': '4px',
            flexGrow: 0,
            minWidth: 256,
          }}
        >
          <ListItemButton>
            <ListItemDecorator>
              <PieChart />
            </ListItemDecorator>
            <Link to={"/dashboard"}>Dashboard</Link>
          </ListItemButton>
          <ListItemButton>
            <ListItemDecorator />
            <Link to={"/dashboard/account"}>Account</Link>
          </ListItemButton>
          <ListItemButton>
            <ListItemDecorator>
              <PieChart />
            </ListItemDecorator>
            <Link to={"/"}>Logout</Link>
          </ListItemButton>
        </List>
        
        <Divider sx={{ mt: 'auto', mb: 80, mx: -2 }} />
      </Sheet>
    </Box>
  );
}
