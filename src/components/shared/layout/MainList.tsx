'use client'
import {ListItemText, ListItemButton, ListItemIcon} from "@mui/material"
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import {fontWeight} from "@mui/system";

export const MainList = () => {
    return(
        <>
            <ListItemButton >
                <ListItemIcon>
                    <ForumRoundedIcon/>
                </ListItemIcon>
                <ListItemText style={{fontWeight: "bold"}} primary="대화하기"/>
            </ListItemButton>
        </>
    )
}