'use client'
import {ListItemButton, ListItemIcon} from "@mui/material"
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import {Noto_Sans_KR} from "next/font/google";
import styled from "styled-components";

const sansKR = Noto_Sans_KR({subsets: ['latin'], weight: '500'});

export const MainList = () => {

    const handleLocationChatting = () => {
        window.location.href = "/chat"
    }

    const handleLocationHome = () => {
        window.location.href = "/"
    }

    return(
        <>
            <ListItemButton className={sansKR.className} onClick={handleLocationHome}>
                <ListItemIcon>
                    <HomeRoundedIcon fontSize={"large"}/>
                </ListItemIcon>
                <ItemText>홈</ItemText>
            </ListItemButton>

            <ListItemButton className={sansKR.className} onClick={handleLocationChatting}>
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