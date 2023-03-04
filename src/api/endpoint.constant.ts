import dotenv from "dotenv";

dotenv.config();

export const Endpoint = {
    CHATTING: process.env.CHAT_ENDPOINT,
    MESSAGE: process.env.MESSAGE_ENDPOINT
}

export const WebSocketEndpoint = {
    MESSAGE: process.env.MESSAGE_WS_ENDPOINT
}