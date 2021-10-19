import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from "../Firebase/firebaseInit";

initializeAuthentication();

const useFirebase = () => {
    
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    //handle google sign in
    const signInUsingGoogle = (e) => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
                setError("");
            })
            .catch(error => {  
                setError(error);
            })
    }

    //Sign Out handler
    const handleSignOut = () =>{
        signOut(auth)
        .then(()=>{
        setUser({});
        })
    }
    //observer
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth,user =>{
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
        })
        return()=> unsubscribed;
    },[])
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    //Email
    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    //Password
    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }
    //handle Sign Up
    const handleSignup =(e)=>{
        e.preventDefault();
        console.log(email,password);
        if(password.length < 6){
            setError("Password must be 6 character long");
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }

        createUserWithEmailAndPassword(auth,email,password)
        .then(res => {
            const user = res.user;
            console.log(user);
            setError("");
            verifyEmail();
        })
        .catch(error => {
            setError(error.message);
        })
    }

    //email verification
    const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
        .then(result => {
            console.log(result);
        })
    }

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
          .then(result => { })
    }
    //handle Login
    const handleLogin = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then(res => {
            const user = res.user;
            console.log(user);
            setError(" ");
        })
        .catch(error => {
            setError(error.message);
        })
    }

    // console.log(email,password,isLogin);



    return {
        user,
        error,
        signInUsingGoogle,
        handleSignOut,
        handleEmail,
        handlePassword,
        handleSignup,
        handleResetPassword,
        handleLogin
    }
}

export default useFirebase;