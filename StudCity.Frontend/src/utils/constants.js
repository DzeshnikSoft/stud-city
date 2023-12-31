export const DEFAULT_AVATAR_URL = '/images/defaultAvatar.png';
export const DEFAULT_BACKGROUND_URL = '/images/ChnuBackground.png';
export const SELECT_BACKGROUND_URLS = ['/images/background1.jpeg', '/images/Flaguaaine.jpeg'];
export const REGISTER_COMPLETE_STEPS_COUNT = 3;

export const GENDERS = ['male', 'female', 'other'];
export const TEST_ARRAY_MESSAGES = [
	{
		id: 'gfdgssgf',
		content: 'Hello',
		when: '23.03.2023',
		user: {
			id: '42f5826c-6b5e-47b0-eb3b-08db292cdad6',
			fullName: 'Vovan Romaniuk',
			userName: 'the_rmk',
			image: null,
		},
		room: 'Chnu',
		roomId: 'gfgdgjghj',
	},
	{
		id: 'gfdg2gf',
		content: 'Hello',
		when: '23.03.2023',
		user: {
			id: '42f5826c-6b5e-47b0-eb3b-08db292cdad6',
			fullName: 'Vovan Romaniuk',
			userName: 'the_rmk',
			image: null,
		},
		room: 'Chnu',
		roomId: 'gfgdgjghj',
	},
	{
		id: 'gfdg5gf',
		content: 'Hello',
		when: '23.03.2023',
		user: {
			id: 'gfgdgdfdfgdfgd',
			fullName: 'Vovan Romaniuk',
			userName: 'the_rmk',
			image: null,
		},
		room: 'Chnu',
		roomId: 'gfgdgjghj',
	},
	{
		id: 'g67fdggf',
		content: 'Hello',
		when: '23.03.2023',
		user: {
			id: 'gfgdgdfdfgdfgd',
			fullName: 'Vovan Romaniuk',
			userName: 'the_rmk',
			image: null,
		},
		room: 'Chnu',
		roomId: 'gfgdgjghj',
	},
	{
		id: 'gf67dggf',
		content: 'Hello',
		when: '23.03.2023',
		user: {
			id: '42f5826c-6b5e-47b0-eb3b-08db292cdad6',
			fullName: 'Vovan Romaniuk',
			userName: 'the_rmk',
			image: null,
		},
		room: 'Chnu',
		roomId: 'gfgdgjghj',
	},
];

export const REGISTER_COMPLETE_STEPS = [
	{
		title: 'register_complete.steps.user_info.title',
		description: 'register_complete.steps.user_info.description',
	},
	{
		title: 'register_complete.steps.upload_avatar.title',
		description: 'register_complete.steps.upload_avatar.description',
	},
	{
		title: 'register_complete.steps.groups.title',
		description: 'register_complete.steps.groups.description',
	},
];

export const MONTH = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export const getRegisterCompleteDefaultData = (defaultData) => {
	return {
		userInformation: {
			firstName: defaultData.userInformation.firstName || '',
			lastName: defaultData.userInformation.lastName || '',
			userName: defaultData.userInformation.userName || '',
			gender: defaultData.userInformation.gender || 'male',
			phoneNumber: defaultData.userInformation.phoneNumber || '+380',
			birthday: defaultData.userInformation.birthday || '',
		},
		avatar: '',
		groups: GROUP_MOCK,
		settings: {},
	};
};

export const GROUP_MOCK = [
	{
		id: '1',
		name: 'Математичний факультет ЧНУ',
		usersCount: 442,
		isPrivate: false,
		image: 'http://sun9-84.userapi.com/impf/c622929/v622929981/3d979/dSo2RuYjyCM.jpg?size=600x437&quality=96&sign=225909c72a4e04805890508898b50503&type=album',
	},
	{
		id: '2',
		name: 'Юридичний факультет ЧНУ',
		usersCount: 341,
		isPrivate: false,
		image: 'https://law.chnu.edu.ua/wp-content/uploads/2021/04/yurfak-chnu-building.jpg',
	},
	{
		id: '3',
		name: 'Айтішніки ЧНУ',
		usersCount: 442,
		isPrivate: false,
		image: 'https://cdn.seeklearning.com.au/media/images/career-guide/module/programmer.jpg',
	},
	{
		id: '4',
		name: 'ЧНУ official',
		usersCount: 2542,
		isPrivate: false,
		image: 'https://bukinfo.com.ua/news-gallery/62dff9fe557e0.jpg',
	},
	{
		id: '5',
		name: 'Викладачі Математичний Факультет',
		usersCount: 442,
		isPrivate: true,
		image: 'https://bukinfo.com.ua/news-gallery/62dff9fe557e0.jpg',
	},
	{
		id: '6',
		name: 'Математичний факультет ЧНУ',
		usersCount: 442,
		isPrivate: false,
		image: 'https://bukinfo.com.ua/news-gallery/62dff9fe557e0.jpg',
	},
	{
		id: '7',
		name: 'СтудПарламент ЧНУ',
		usersCount: 1230,
		isPrivate: false,
		image: 'https://bukinfo.com.ua/news-gallery/62dff9fe557e0.jpg',
	},
	{
		id: '8',
		name: 'Новини Матфаку',
		usersCount: 201,
		isPrivate: false,
		image: 'https://bukinfo.com.ua/news-gallery/62dff9fe557e0.jpg',
	},
];

export const EDIT_PROFILE_SIDEBAR = [
	{
		title: 'profile.submenu.details',
		icon: 'fa-solid fa-address-card',
	},
	{
		title: 'profile.submenu.settings',
		icon: 'fa-duotone fa-gear',
	},
	{
		title: 'profile.submenu.security',
		icon: 'fa-solid fa-shield-halved',
	},
];

export const USER_PROFILE_ICONS = [
	'fa-solid fa-signature',
	'fa-solid fa-envelope',
	'fa-solid fa-cake-candles',
	'fa-solid fa-phone',
	'fa-solid fa-venus-mars',
	'fa-solid fa-person-chalkboard',
];

export const HEADER_LINKS = [
	{
		path: '/feeds',
		name: 'links.feeds',
	},
	{
		path: '/profile',
		name: 'links.profile',
	},
	{
		path: '/groups',
		name: 'links.groups',
	},
	{
		path: '/users',
		name: 'links.users',
	},
];

export const ICON_NAVBAR_ICONS = [
	{
		icon: 'fa-sharp fa-regular fa-bell',
		name: 'navbar.notification',
	},
	{
		icon: 'fa-regular fa-comments',
		name: 'navbar.chats',
	},
	{
		icon: 'fa-light fa-screen-users',
		name: 'navbar.my_groups',
	},
];
export const VIEW_MODE_ICONS = [
	{
		icon: 'fa-solid fa-grid',
		name: 'grid',
	},
	{
		icon: 'fa-solid fa-list',
		name: 'list',
	},
];
export const OPTIONS_FOR_SELECTOR_GROUPS = [
	'sort_groups.default',
	'sort_groups.desc_pop',
	'sort_groups.asc_pop',
];

export const LABELS_USERS_GROUPS = ['Users', 'Groups'];

export const supportedLanguages = ['en', 'ua'];
