import {ChannelContainer} from "../../components/chat/ChannelContainer";

export default function Chat() {
    return(
        <>
            <div>
                채팅 페이지
                <ChannelContainer channelId={1}/>
            </div>
        </>
    )
}