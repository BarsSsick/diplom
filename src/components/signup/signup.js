
import {useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { Form } from '../form-reg';
import { setUser } from '../../store/slices/userSlice';

export const SignUp = () => {
    const dispatch = useDispatch();
    const push = useNavigate();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        console.log(auth)
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                push('/singin');
            })
            .catch(console.error)
    }

    return (
        <Form
            title="register"
            handleClick={handleRegister}
        />
    )
}