import {auth} from "./firebase";
import {
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth,email,password);
};

export const doSignInrWithEmailAndPassword = async (email, password) => {
    return signInWithEmailAndPassword(auth,email,password);
};

export const doSignInWithGoogle = async () => {
 const provider = new GoogleAuthProvider();
 return signInWithPopup(auth,provider);
 //result.user
 return result;
};

export const doSignOut = () => {
    return signOut(auth);
}

