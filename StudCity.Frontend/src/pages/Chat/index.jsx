import React, { useEffect, useRef } from "react";
import HeaderChat from "../../components/HeaderChat";
import Sender from "../../components/Sender";
import Message from "../../components/Message";
import { useSelector, useDispatch } from "react-redux"
import { selectCurrentUserId } from "../../app/features/userSlice"
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { fetchChat, selectChat, selectChatLoading, selectHubConnection, selectTypingState } from "../../app/features/chatsSlice";

export default function Chat() {
	const { chatId } = useParams();
	const dispatch = useDispatch();

	const hubConnection = useSelector(selectHubConnection);
	const chat = useSelector(selectChat);
	const loading = useSelector(selectChatLoading);
	const id = useSelector(selectCurrentUserId);
	const { text, userId } = useSelector(selectTypingState);

	const scrollDown = useRef(null);

	useEffect(() => {
		chatId && dispatch(fetchChat(chatId));
	}, [chatId])

	useEffect(() => {
		handleScroll();
	}, [chat.messages])

	const sendMessage = (message) => {
		hubConnection.invoke("SendMessage", chatId, message);
	}

	const handleScroll = () => {
		scrollDown.current?.scrollIntoView({ behavior: 'smooth' })
	}

	return loading ? (
		<Spinner />
	) : (
		<div className="w-full h-full flex flex-col justify-between bg-elephantBone" >
			<HeaderChat
				title={chat.title}
				users={chat.users}
				avatar={chat.image}
			/>
			<div className="h-[calc(100%-10rem)] w-full overflow-y-auto scroll-none">
				{
					chat?.messages.map((message, index) => (
						<Message
							id={id}
							userId={message.user.id}
							fullName={message.user.fullName}
							image={message.user.image}
							content={message.content}
							when={message.when}
							key={index}
						/>
					))
				}
				{text && userId && id !== userId && (
					<div className="ml-10">
						<p className="text-black/40 ">{text}</p>
					</div>
				)}
				<div ref={scrollDown}></div>
			</div>
			<div className="h-fit w-full flex py-3">
				<Sender sendMessage={sendMessage} chatId={chatId} scrollDown={handleScroll} />
			</div>
		</div >
	)
}