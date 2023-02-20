import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticateService } from "../../services/authenticateService";
import { emailValidator } from "../../utils/validators/validators";
import Label from "../../UI/Label";
import PasswordTextField from "../../UI/fields/PasswordTextField";
import Button from "../../UI/Button";
import GoogleButton from "../../UI/GoogleButton";
import ValidateTextField from "../../UI/fields/ValidateTextField";


function Authenticate() {
	const authenticateSerivice = new AuthenticateService();
	const navigate = useNavigate('');

	const [disabled, setDisabled] = useState(false);
	const [formState, setFormState] = useState({
		email: "",
		password: ""
	});

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (await authenticateSerivice.authenticate(formState))
			navigate("/profile");
		else
			setFormState({ email: "", password: "" });
	}

	return (
		<div className="w-1/1 h-screen flex">
			<div className="w-1/2 h-screen flex bg-primatyWhite">
				<div className="container flex flex-col w-2/3 m-auto h-4/5 justify-between bg-primatyWhite rounded-3xl p-11 shadow-md ">
					<h1 className="w-full text-center font-bold text-2xl text-primaryAuthentication">Welcome back</h1>
					<h6 className="w-full text-center font-normal text-lg text-primaryAuthentication">Please enter your details</h6>
					<form className="flex flex-col w-1/1" onSubmit={handleSubmit}>
						<Label>Email</Label>
						<ValidateTextField
							placeholder="Enter your email"
							required={true}
							value={formState.email}
							withErrorMessage={true}
							validator={emailValidator}
							onChange={(value) => setFormState({ ...formState, email: value })}
						/>
						<Label>Password</Label>
						<PasswordTextField
							placeholder="Enter your password"
							type="password"
							required={true}
							value={formState.password}
							setDisabled={setDisabled}
							onChange={(event) => setFormState({ ...formState, password: event.target.value })}
						/>
						<a className="w-full text-center ml-1 font-medium text-base text-primaryAuthentication" href="">Forgot password</a>
						<Button
							disabled={disabled}
						>Submit</Button>
						<div className="flex justify-between my-2 items-center">
							<hr className="w-[40%] h-0.5 bg-[#D1D7D4] ml-3" />
							<span className="w-[10%] text-center text-[#506466]">or</span>
							<hr className="w-[40%] h-0.5 bg-[#D1D7D4] mr-3" />
						</div>
						<GoogleButton />
					</form>
					<div className=" w-full text-center ml-1 mt-3 font-medium text-base"><a className="mr-1 cursor-pointer text-[#233a2a]">Don`t have an account?</a><span className="text-primaryAuthentication">Sign up</span></div>
				</div>
			</div>
			<div className="w-1/2 h-screen ">
				<img className="w-full h-screen object-cover object-bottom" src="/images/Image-Authenticate-Light.jpg" alt="404" />
			</div>
		</div>
	);
}

export default Authenticate;
