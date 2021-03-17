import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyATplrx1H5dyZjHb0YnOofXE58cDJ_80wY",
    authDomain: "sergiojfalcon-c5f46.firebaseapp.com",
    databaseURL: "https://sergiojfalcon-c5f46-default-rtdb.firebaseio.com",
    projectId: "sergiojfalcon-c5f46",
    storageBucket: "sergiojfalcon-c5f46.appspot.com",
    messagingSenderId: "183278692128",
    appId: "1:183278692128:web:8a706818999d2f40f79945",
    measurementId: "G-JQNNSB5398"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, 
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;