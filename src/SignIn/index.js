import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocument,
  signInWithGoogleRedirect,
} from "../utils/firebase/firebase";

const SignIn = () => {
  useEffect(() => {
    const response = getRedirectResult(auth);
    if (response) {
      const userDocRef = createUserDocument(response.user);
    }
  }, []);

  const logInGooglePopUp = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocument(user);
  };

  return (
    <div>
      this is SignIn
      <button onClick={logInGooglePopUp}>Sigin Google</button>
      <button onClick={signInWithGoogleRedirect}>Sigin Google</button>
    </div>
  );
};

export default SignIn;
