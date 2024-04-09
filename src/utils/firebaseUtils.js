import { firebase } from "@react-native-firebase/firestore";

export const userAddition = async (user) => {
    try {
        if(user === null) return;
        const db = firebase.firestore();
        console.log({
            user
        })
        return await db.collection("users").add({
            displayName: user.name,
            mobileNumber: user.mobileNumber,
            createdAt: new Date(),
        });
    } catch (error) {
        console.error("Error adding document: ", error);
    }
};
export const getUserWithPhoneNumber = async (phoneNumber) => {
    try {
        const db = firebase.firestore();
        const user = await db.collection("users").where("phoneNumber", "==", phoneNumber).get();
        return user;
    } catch (error) {
        console.error("Error getting document: ", error);
    }
}