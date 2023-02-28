'use client'
import {ListItemButton, ListItemIcon} from "@mui/material"
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import styled from "styled-components";


export const MainList = () => {

    const handleLocationChatting = () => {
        window.location.href = "/chat"
    }

    const handleLocationHome = () => {
        window.location.href = "/"
    }

    return(
        <>
            <ListItemButton onClick={handleLocationHome}>
                <ListItemIcon>
                    <HomeRoundedIcon fontSize={"large"}/>
                </ListItemIcon>
                <ItemText>홈</ItemText>
            </ListItemButton>

            <ListItemButton onClick={handleLocationChatting}>
                <ListItemIcon>
                    <ForumRoundedIcon fontSize={"large"}/>
                </ListItemIcon>
                <ItemText>채팅</ItemText>
            </ListItemButton>
        </>
    )
}

const ItemText = styled.p`
    color: #514f4f;
`;