import * as sdk from 'node-appwrite';

export const {
    PROJECT_ID,
    API_KEY,
    DATABASE_ID,
    PATIENT_COLLACTION_ID,
    DOCTOR_COLLACTION_ID,
    APPOINTMENT_COLLACTION_ID,
    NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
    NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;
console.log('test--- 2');

const client = new sdk.Client();
console.log('test--- 3');

// client.setEndpoint(ENDPOINT!)
//     .setProject(PROJECT_ID!)
//     .setKey(API_KEY!);

client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!);
console.log('test--- 4');


export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
console.log('test--- 5');
