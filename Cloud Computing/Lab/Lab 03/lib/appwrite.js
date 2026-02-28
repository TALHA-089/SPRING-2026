import { Client, Account, Databases } from "appwrite";

const client = new Client()
    .setEndpoint("https://fra.cloud.appwrite.io/v1")
    .setProject("699ffdc20010f9194a76");

const account = new Account(client);
const databases = new Databases(client);

export { client, account, databases };
