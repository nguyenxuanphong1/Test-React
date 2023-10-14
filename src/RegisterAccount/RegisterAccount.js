import React, { useState } from "react";
import "./RegisterAccount.css";
import { Form, Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { register } from "../singnUp";

const initFormValue = {
    email: "",
    password: "",

};

const isEmptyValue = (value) => {
    return !value || value.trim().length < 1;
};

const isEmailValid = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}
export default function RegisterPage() {
    const [formValue, setFormValue] = useState(initFormValue);
    const [formError, setFormError] = useState({});

    const validateForm = () => {
        const error = {};
        if (isEmptyValue(formValue.email)) {
            error["email"] = "Email is required";
        } else {
            if (!isEmailValid(formValue.email)) {
                error["email"] = "Email is invalid";
            }
        }
        if (isEmptyValue(formValue.firstName)) {
            error["password"] = "Password Name is required";
        }

        setFormError(error);

        return Object.keys(error).length === 0;
    };

    const handleChange = (event) => {
        const { value, name } = event.target;
        setFormValue({
            ...formValue,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log("form value", formValue);
        } else
            console.log("form invalid")
    }

    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            await register(formValue.email, formValue.password)
            navigate('/')
        } catch (error) {
            alert("tài khoản mật khẩu không đúng!")
        }
    };

    return (
        <>
            <div className="register-page">
                <div className=" register-form-container">
                    <h1 className="title" > <i className="fa-solid fa-user-secret" > RegisterAccount</i></h1>

                    <form onSubmit={handleSubmit}>



                        <div className="mb-2">
                            <label htmlFor="email" className="form-label">
                                <i className="fa-solid fa-envelope"></i> Email
                            </label>
                            <input id="Email"
                                className="form-control"
                                type="text"
                                name="email"
                                value={formValue.email}
                                onChange={handleChange}
                            />

                            {formError.firstName && (
                                <div className="error-feedback">{formError.email}</div>
                            )}
                        </div>


                        <div className="mb-2">
                            <label htmlFor="password" className="form-label">
                                <i className="fa-solid fa-key"></i> Password
                            </label>
                            <input id="password"
                                className="form-control"
                                type="password"
                                name="password"
                                value={formValue.password}
                                onChange={handleChange}
                            />

                        </div>


                        <div>
                            <button onClick={handleRegister}>
                                Register
                            </button>
                        </div>


                    </form>
                </div>
            </div>

            <footer>
                <div className="row">
                    <div className="boxcenter1">
                        <div className="boxfooter1 colors">
                            <h4>Dia chi</h4>
                            <div>Co so I:20 ngo 16 van phu phu la ha dong</div>
                            <div>Co so II:20 ngo 17 van van quan ha dong</div>
                        </div>
                        <div className="boxfooter2 colors">
                            <h4>Huong dan</h4>
                            <div>Huong dan dang ky</div>
                            <div>Huong dan dang nhap</div>
                        </div>
                        <div className="boxfooter3 colors">
                            <h4>Contact me</h4>
                            <div>
                                <p>Noi dung chinh cua web</p>
                            </div>


                        </div>

                    </div>

                </div>
            </footer>
        </>

    )

}