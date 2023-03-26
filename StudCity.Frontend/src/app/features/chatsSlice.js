import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HubService } from "../../services/hubService";
import { RoomService } from "../../services/roomService";

const service = new RoomService();
const hubService = new HubService();

export const fetchChat = createAsyncThunk(
	"chats/fetchChats",
	async (id, { rejectWithValue, fulfillWithValue }) => {
		try {
			const data = await service.getChatById(id);
			return fulfillWithValue(data);
		}
		catch (error) {
			return rejectWithValue(error.response.data.error);
		}
	}
)

export const connectToChatHub = createAsyncThunk(
	"chats/connectToHub",
	async (_, { rejectWithValue, fulfillWithValue }) => {
		try {
			hubService.configure();
			const connection = await hubService.startConnection();

			return fulfillWithValue(connection);
		}
		catch (error) {
			return rejectWithValue(error.response.data.error);
		}
	}
)

export const fetchUserChats = createAsyncThunk(
	"chats/fetchUserChats",
	async (_, { rejectWithValue, fulfillWithValue }) => {
		try {
			const data = await service.getChats();
			return fulfillWithValue(data);
		}
		catch (error) {
			return rejectWithValue(error.response.data.error);
		}
	}
)

const chatsSlice = createSlice({
	name: "chats",
	initialState: {
		userChats: [],
		chat: {
			id: null,
			messages: [],
			users: [],
			title: null,
			image: null
		},
		loading: false,
		hubConnection: null
	},
	reducers: {
		addMessageAction: (state, action) => {
			state.chat.messages = [...state.chat.messages, action.payload];
		}
	},
	extraReducers: {
		[fetchUserChats.fulfilled]: (state, action) => {
			state.userChats = action.payload;
		},
		[fetchChat.pending]: (state) => {
			state.loading = true;
		},
		[fetchChat.fulfilled]: (state, action) => {
			state.chat = action.payload;
			state.loading = false;
		},
		[connectToChatHub.fulfilled]: (state, action) => {
			state.hubConnection = action.payload;
		}
	}
});

export const { addMessageAction } = chatsSlice.actions;

export const selectUserChats = (state) => state.chats.userChats;

export const selectChat = (state) => state.chats.chat;

export const selectHubConnection = (state) => state.chats.hubConnection;

export const selectChatLoading = (state) => state.chats.loading;

export default chatsSlice.reducer;