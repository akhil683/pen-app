import { Account, Avatars, Databases, Query } from 'react-native-appwrite';
import { Client } from 'react-native-appwrite';
import { ID } from 'react-native-appwrite';

export const appwriteConfig = {
   endpoint: "https://cloud.appwrite.io/v1",
   platform: "com.ashray.penapp",
   projectId: "6624d408368e76f67339",
   databaseId: "66264606d3bf06c9065b",
   userCollectionId: "662646531b164034a572",
   storageId: "6626483f1519f8a6d8ee",
}

const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) 
    .setProject(appwriteConfig.projectId) 
    .setPlatform(appwriteConfig.platform)
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
   try {
      const newAccount = await account.create(
         ID.unique(),
         email,
         password, 
         username
      )
      if(!newAccount) throw Error; 
      const avatarUrl = avatars.getInitials(username)
      await signIn(email, password)
      const newUser = await databases.createDocument(
         appwriteConfig.databaseId,
         appwriteConfig.userCollectionId,
         ID.unique(),
         {
            accountId: newAccount.$id,
            email, 
            username,
            avatar: avatarUrl
         }
      )
      return newUser;

   } catch (e) {
      console.log(e)
      throw new Error(error);
   }
}
export const signIn = async (email, password) => {
   try {
      const session = await account.createEmailSession(email, password)
      return session;
   } catch (e) {
      throw new Error(error)
   }
}
export const getCurrentUser = async () => {
   try {
      const currentAccount = await account.get()
      if(!currentAccount) throw Error

      const currentUser = await databases.listDocuments(
         appwriteConfig.databaseId,
         appwriteConfig.userCollectionId,
         [Query.equal('accountId', currentAccount.$id, )]
      )
      if(!currentUser) throw Error
      return currentUser.documents[0]
   } catch (e) {
      console.log(e)
   }
}