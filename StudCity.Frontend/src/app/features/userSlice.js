import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserService } from '../../services/userService';
import { showAlert } from '../../services/showAlert';
import { supportedLanguages } from '../../utils/constants';

const initialState = {
	data: {
		id: null,
		firstName: '',
		lastName: '',
		fullName: '',
		userName: '',
		email: '',
		avatar: '',
		dateOfBirth: '',
		phoneNumber: '',
		gender: '',
		settings: {
			theme: '',
			language: supportedLanguages[0],
			backgroundImage: '',
			textMessage: true,
		},
	},
	users: {
		loading: false,
		data: [],
	},
	loading: false,
};

export const fetchCurrentUser = createAsyncThunk(
	'user/getCurrentUser',
	async (
		_,
		{ fulfillWithValue, rejectWithValue },
		userService = new UserService()
	) => {
		try {
			const { data } = await userService.getCurrentUser();

			return fulfillWithValue(data);
		} catch (err) {
			if (!err.response) {
				showAlert('Something went wrong', 'error');
				return rejectWithValue();
			}

			showAlert(err.response.data.error, 'error');
			return rejectWithValue();
		}
	}
);

export const updateUserSettings = createAsyncThunk(
	'user/settings',
	async (
		settings,
		{ fulfillWithValue, rejectWithValue },
		userService = new UserService()
	) => {
		try {
			const { language } = settings;

			const data = await userService.updateUserSettings({
				language: language,
			});

			return fulfillWithValue(data);
		} catch (err) {
			if (!err.response) {
				showAlert('Something went wrong', 'error');
				return;
			}
			showAlert(err.response.data.error, 'error');
			return rejectWithValue(null);
		}
	}
);

export const getUsersSearch = createAsyncThunk(
	'user/getUsersSearch',
	async (
		users,
		{ fulfillWithValue, rejectWithValue },
		userService = new UserService()
	) => {
		try {
			const data = await userService.getUsers(users);
			return fulfillWithValue(data);
		} catch (err) {
			if (!err.response) {
				showAlert('Something went wrong', 'error');
				return;
			}
			showAlert(err.response.data.error, 'error');
			return rejectWithValue(users);
		}
	}
);

export const saveCurrentUser = createAsyncThunk(
	'user/saveCurrentUser',
	async (
		userData,
		{ fulfillWithValue, rejectWithValue },
		userService = new UserService()
	) => {
		try {
			await userService.editCurrentUser(userData);
			showAlert('User data has been saved', 'success');
			return fulfillWithValue(userData);
		} catch (err) {
			if (!err.response) {
				showAlert('Something went wrong', 'error');
				return;
			}

			showAlert(err.response.data.error, 'error');
			return rejectWithValue(userData);
		}
	}
);

const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		toggleTextMessage: (state) => {
			state.data.settings.textMessage = !state.data.settings.textMessage;
		},
	},
	extraReducers: {
		[getUsersSearch.pending]: (state) => {
			state.users.loading = true;
		},
		[getUsersSearch.rejected]: (state) => {
			state.users.loading = false;
		},
		[getUsersSearch.fulfilled]: (state, { payload }) => {
			state.users.data = {
				...state.users.data,
				...payload,
			};
			state.users.loading = false;
		},
		[fetchCurrentUser.pending]: (state) => {
			state.loading = true;
		},
		[fetchCurrentUser.fulfilled]: (state, action) => {
			state.data = action.payload;
			state.loading = false;
		},
		[fetchCurrentUser.rejected]: (state) => {
			state.loading = false;
		},
		[saveCurrentUser.pending]: (state) => {
			state.loading = true;
		},
		[saveCurrentUser.fulfilled]: (state, action) => {
			state.data = action.payload;
			state.loading = false;
		},
		[saveCurrentUser.rejected]: (state) => {
			state.loading = false;
		},
		[updateUserSettings.fulfilled]: (state, { payload }) => {
			state.data.settings = payload;
		},
	},
});

export const selectCurrentUser = (state) => state.user;

export const selectCurrentUserData = (state) => state.user.data;

export const selectUserForHeader = (state) => {
	return {
		data: {
			firstName: state.user.data.firstName,
			lastName: state.user.data.lastName,
			avatar: state.user.data.avatar,
		},
		loading: state.user.loading,
	};
};

export const { toggleTextMessage } = userSlice.actions;

export const selectDataUsersFound = (state) => state.user.users;

export const selectCurrentUserId = (state) => state.user.data.id;

export const selectUserLanguage = (state) => state.user.data.settings.language;

export const selectUserTextMessage = (state) => {
	return state.user.data.settings.textMessage;
};

export default userSlice.reducer;
