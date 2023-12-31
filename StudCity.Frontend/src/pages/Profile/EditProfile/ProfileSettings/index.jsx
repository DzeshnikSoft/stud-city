import React from 'react';
import SelectField from '../../../../UI/fields/SelectField';
import ToggleContainerText from '../../../../UI/ToggleContainerText';
import Accordion from '../../../../UI/Accordion';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserSettings, selectUserLanguage, selectUserTextMessage, toggleTextMessage } from '../../../../app/features/userSlice';

import { supportedLanguages } from '../../../../utils/constants';
import { showAlert } from '../../../../services/showAlert';

export default function ProfileSettings() {
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const language = useSelector(selectUserLanguage);
	const isToggleTextMessage = useSelector(selectUserTextMessage);

	const handleLanguageChange = ({ target }) => {
		dispatch(updateUserSettings({ language: target.value }))
			.then(() => {
				showAlert(t('alert.warning.data_updating'));
			})
			.catch(() => {
				showAlert(t('alert.error.something_wrong'));
			});
	};

	const handleToggleTextMessage = () => {
		dispatch(toggleTextMessage());
	}

	return (
		<div className='w-full min-h-fit max-h-full mx-auto flex flex-col gap-5'>
			<Accordion isExpanded={true} title={t('profile.settings.theme.title')}>
				<ToggleContainerText>{t('profile.settings.theme.dark_mode')}</ToggleContainerText>
				<ToggleContainerText>
					{t('profile.settings.theme.autochange_theme')}
				</ToggleContainerText>
			</Accordion>
			<Accordion title={t('profile.settings.notification.title')}>
				<ToggleContainerText>
					{t('profile.settings.notification.show_on_screen')}
				</ToggleContainerText>
				<ToggleContainerText
					onChange={handleToggleTextMessage}
					isToggle={isToggleTextMessage}
				>
					{t('profile.settings.notification.text_messages')}
				</ToggleContainerText>
			</Accordion>
			<Accordion title={t('profile.settings.language.title')}>
				<SelectField
					value={language}
					onChange={handleLanguageChange}
					options={supportedLanguages}
					className='w-44'
				/>
			</Accordion>
			<Accordion title={t('profile.settings.email.title')}>
				<ToggleContainerText>{t('profile.settings.email.send')}</ToggleContainerText>
			</Accordion>
		</div>
	);
}
