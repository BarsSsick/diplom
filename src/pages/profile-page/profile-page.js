import React from "react";
import { CgArrowLongLeft } from "react-icons/cg";
import { Link } from "react-router-dom";
import './profile-page.css';

export const ProfilePage = () => {
    return (
        <div className="profile-page">
            <div className="line"></div>
            <Link to="/" >
                <CgArrowLongLeft
                    size={55}
                    className="arrow-back"
                />
            </Link>
            <div className="profile-page__form">
                <div className="profile-page__title title">Account</div>
                <div className="profile-page__profile">
                    <div className="main-title title">profile</div>
                    <div className="box">
                        <div className="profile-page__name">
                            <div className="sub-title title">Name</div>
                            <input className="profile-page__name-input input" placeholder="Name" type="text" />
                        </div>
                        <div className="profile-page__email">
                            <div className="sub-title title">Email</div>
                            <input className="profile-page__email-input input" placeholder="Email" type="text" />
                        </div>
                    </div>
                </div>
                <div className="profile-page__password">
                    <div className="main-title title">password</div>
                    <div className="profile-page__pass">
                        <div className="sub-title title">Password</div>
                        <input className="profile-page__pass-input input" placeholder="Password" type="text" />
                    </div>
                    <div className="box">
                    <div className="profile-page__new-pass">
                        <div className="sub-title title">New password</div>
                        <input className="profile-page__new-pass-input input" placeholder="New password" type="text" />
                    </div>
                    <div className="profile-page__conf-pass">
                        <div className="sub-title title">Confirm new password</div>
                        <input className="profile-page__conf-pass-input input" placeholder="Confirm new password" type="text" />
                    </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="profile-page__btns">
                    <button className="save">Save changes</button>
                    <button className="cancel">cancel</button>
                </div>
            </div>
        </div>
    )
}