import { SignInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase'

import SignUpForm from '../../components/sign-up-form/sign-up-form';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await SignInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }


    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google
            </button>
            <SignUpForm/>
        </div>
    )
}
export default SignIn;