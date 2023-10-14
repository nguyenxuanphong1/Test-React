import { getAuth } from "firebase/auth";
import { fb } from "./Firebase"; 
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";

export const register = async (email: any, password: any,) => {
    const auth = getAuth(fb);
    await createUserWithEmailAndPassword(auth, email, password);
}