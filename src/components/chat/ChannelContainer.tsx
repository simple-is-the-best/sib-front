'use client';

import {Client} from "@stomp/stompjs";
import {WebSocketEndpoint} from "../../api/endpoint.constant";
import {useEffect, useState} from "react";
import {Button, ButtonGroup} from "@mui/material";
import {ChannelPath} from "../../app/chat/chat.constant";

interface IProps {
    //JavaScript not supported "Long" type
    channelId: string;
}

export const ChannelContainer = ({channelId}: IProps) => {
    const [client] = useState<Client>(new Client({
        brokerURL: `${WebSocketEndpoint.MESSAGE}/connect`,
        onConnect: () => console.log("connect!! web socket")
    }));

    useEffect(() => {
        client.activate();
    })

    const handleConnect = () => {
        client.activate();
    }

    const handleCheckedConnect = () => {
        alert(client.connected);
    }

    const handleDisconnect = async () => {
        if (client.connected) {
            await client.deactivate();
        }
    }

    const handlePublish = () => {
        const message = {
            type: "TEXT",
            senderId: 10001,
            sendAt: "2023-02-12T12:11:50.248",
            content: "내용"
        }
        client.publish({
            destination: `${ChannelPath.DESTINATION_PREFIX}/${channelId}`,
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(message)
        });
    }

    return (
        <>
            <div>
                채팅룸
            </div>
            <ButtonGroup variant={"outlined"} sx={{mt: 2}}>
                <Button onClick={handleConnect} color={"primary"}>
                    채팅 연결
                </Button>

                <Button onClick={handleCheckedConnect} color={"warning"}>
                    연결 확인
                </Button>

                <Button onClick={handleDisconnect} color={"error"}>
                    연결 종료
                </Button>
            </ButtonGroup>

            <Button onClick={handlePublish}>
                메세지 전송
            </Button>
        </>
    )
}