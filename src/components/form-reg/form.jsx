import { useState } from 'react'
import { Link } from 'react-router-dom';
import './form.css'

export const Form = ({ handleClick }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');


    return (

        <div>
            <div className="sing-in">
                <div className="line"></div>
                <div className="sing-in__wrap">

                    <div className="sing-in__btns">
                        <Link className='link' to="/login">
                            <button className="singin sbtn ">sing in</button>
                        </Link>
                        <button className="singup sbtn checked" >sing up</button>
                    </div>

                    {/* <div className="sing-in__form">
                        <div className="email .pd-top">
                            <div className="email__title">Email</div>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Your email" type="email" className="email__input" />
                        </div>
                        <div className="password">
                            <div className="password__title">Password</div>
                            <input onChange={(e) => setPass(e.target.value)} value={pass} placeholder="Your password" type="password" className="password__input" />
                        </div>
                        <div className="forgot">Forgot password ?</div>
                        <button onClick={() => handleClick(email, pass)} className="btn title">sign in</button>
                    </div> */}
                    <div className="sing-in__form">
                        <div className="name pd-top">
                            <div className="name__title">Name</div>
                            <input placeholder="Your name" type="text" className="name__input" />
                        </div>
                        <div className="email">
                            <div className="email__title">Email</div>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Your email" className="email__input" />
                        </div>
                        <div className="password">
                            <div className="password__title">Password</div>
                            <input onChange={(e) => setPass(e.target.value)} value={pass} placeholder="Your password" type="password" className="password__input" />
                        </div>
                        <div className="confirm">
                            <div className="confirm__title">Confirm password</div>
                            <input placeholder="Confirm your password" type="password" className="confirm__input" />
                        </div>
                        <button onClick={() => handleClick(email, pass)} className="btn title">sign up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

