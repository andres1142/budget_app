import { Client, Account, ID } from "appwrite"
import { AuthInputs, RegisterInputs } from "./types"

const client = new Client()

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("655e709d5957123390e1")

const account = new Account(client)

class AppwriteAuthService {
  /**
   * Create user account and login to appwrite
   *
   * @param userInfo  - user info to create account
   * @returns
   */
  async createUserAccount(userInfo: RegisterInputs) {
    try {
      const userAccount = await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password,
        userInfo.name
      )
      if (userAccount) {
        return this.login(userInfo)
      } else {
        return userAccount
      }
    } catch (error: any) {
      throw error
    }
  }

  /**
   * Login to appwrite with email and password
   *
   * @param userInfo - user info to login
   * @returns  - session info
   */
  async login(userInfo: AuthInputs) {
    try {
      return await account.createEmailSession(userInfo.email, userInfo.password)
    } catch (error) {
      throw error
    }
  }

  /**
   * Checks if user is LoggedIn in appwrite
   *
   * @returns - true if user is logged in, false otherwise
   */
  async isLogged(): Promise<boolean> {
    try {
      const data = await this.getCurrentUser()
      return Boolean(data)
    } catch (error) {
      return false
    }
  }

  /**
   * Helper function to get current user info
   *
   * @returns - current user info
   */
  async getCurrentUser() {
    try {
      return account.get()
    } catch (error) {
      console.log("getcurrentUser error: " + error)
    }

    return null
  }
}

const appwriteAuthService = new AppwriteAuthService()

export default appwriteAuthService
