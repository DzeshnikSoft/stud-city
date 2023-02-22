import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	selectActiveStep,
	changeActiveState,
	selectRegisterCompleteDefaultInfo,
	changeRegisterCompleteState
} from "../../app/features/register-complete/registerCompleteSlice";
import {
	getRegisterCompleteDefautlData,
	REGISTER_COMPLETE_STEPS,
	REGISTER_COMPLETE_STEPS_COUNT
} from "../../utils/constants";
import { registerCompleteAvatarValidator, registerCompleteRoleValidator, registerCompleteUserInformationValidator } from "../../utils/validators/registerCompleteValidators";
import Stepper from "../../components/Stepper/Stepper";
import UserInformation from "./steps/UserInformation";
import UploadAvatar from "./steps/UploadAvatar"
import StepperControll from "../../components/Stepper/StepperControll";
import Container from "../../components/Container";
import ChooseRole from "./steps/ChooseRole";

const RegistrationComplete = () => {
	const dispatch = useDispatch();

	const activeStep = useSelector(selectActiveStep);
	const defaultData = useSelector(selectRegisterCompleteDefaultInfo);

	const [valid, setValid] = useState(false);
	const [state, setState] = useState(getRegisterCompleteDefautlData(defaultData));

	useEffect(() => {
		setValid(stepValidator());
	}, [state, activeStep])

	const handleNext = () => {
		dispatch(changeRegisterCompleteState(state));
		if (activeStep === REGISTER_COMPLETE_STEPS_COUNT) {
			// TODO Redirect to profile
			dispatch(changeActiveState(1));
			return;
		}

		dispatch(changeActiveState(activeStep + 1));
	};

	const handlePrevious = () => {
		dispatch(changeActiveState(activeStep - 1));
	};

	// TODO Add your component to switch statement
	const renderSteps = () => {
		switch (activeStep) {
			case 1:
				return <UserInformation
					userInformation={state.userInformation}
					setUserInformation={(data) => setState({ ...state, userInformation: data })}
				/>;
			case 2:
				return <UploadAvatar
					avatar={state.avatar}
					setAvatar={(data) => setState({ ...state, avatar: data })}
				/>
			case 3:
				return <ChooseRole
					role={state.role}
					setRole={(data) => setState({ ...state, role: data })}
				/>
			default:
				return <></>;
		}
	};

	const stepValidator = () => {
		//add your validators
		switch (activeStep) {
			case 1:
				return registerCompleteUserInformationValidator(state.userInformation);
			case 2:
				return registerCompleteAvatarValidator(state.avatar);
			case 3:
				return registerCompleteRoleValidator(state.role);
			default:
				return true;
		}
	}

	return (
		<div className="h-screen flex">
			<div className="w-1/4">
				<Stepper
					labels={REGISTER_COMPLETE_STEPS}
					activeStep={activeStep}
					handleNext={handleNext}
					handlePrevious={handlePrevious}
				/>
			</div>
			<div className="w-3/4 h-full flex relative">
				<Container className="my-auto w-3/4 flex h-[85%] justify-between flex-col">
					<div className="h-[90%]">
						{renderSteps()}
					</div>
					<div className="h-[10%]">
						<StepperControll
							activeStep={activeStep}
							handleNext={handleNext}
							handlePrevious={handlePrevious}
							nextStepIsValid={!valid}
							className={""}
						/>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default RegistrationComplete;