"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import { AuthInputs } from "@/appwrite/types"
import { useRouter } from "next/navigation"
import { useState, useLayoutEffect } from "react"
import appwriteAuthService from "@/appwrite/account.config"
import useAuth from "@/context/useAuth"
import Image from "next/image"

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthInputs>()
  const [isLoading, setLoading] = useState(false)
  const { setAuthStatus, authStatus } = useAuth()
  const router = useRouter()

  const handleLogin: SubmitHandler<AuthInputs> = async (data) => {
    setLoading(true)
    try {
      const session = await appwriteAuthService.login(data)
      if (session) {
        setAuthStatus(true)
        router.replace("/")
      }
    } catch (error: any) {
      console.log(error)
    }
  }

  useLayoutEffect(() => {
    if (authStatus) {
      router.replace("/")
    }
  }, [])

  return (
    <div>
      {/*Sign In Form*/}
      <div className="absolute inset-0 flex items-center justify-center">
        <form
          className="flex flex-col gap-4 p-10 bg-secondary_gray-100 w-3/12 rounded-xl"
          onSubmit={handleSubmit(handleLogin)}
        >
          <h1 className="text-4xl text-secondary_white-100 text-center mb-10 font-motivaMedium">
            Sign In
          </h1>

          {/*@ts-ignore*/}
          <input
            {...register("email")}
            placeholder="Email"
            className="bg-secondary_white-100 px-2 py-1 rounded-lg mb-2"
          />

          {/*@ts-ignore*/}
          <input
            {...register("password")}
            placeholder="Password"
            type="password"
            className="bg-secondary_white-100 px-2 py-1 rounded-lg"
          />
          <div className="flex justify-center pt-4">
            {!isLoading ? (
              <input
                type="submit"
                value="Sign In"
                className="form-button w-28 m-4"
              />
            ) : (
              <div className="form-button w-28 m-4 flex justify-center items-center">
                <Image
                  src="/loading.svg"
                  alt="loading"
                  width={22}
                  height={22}
                  className="cursor-pointer animate-spin"
                />
              </div>
            )}
          </div>

          <div className="flex justify-around items-center gap-3">
            <div className="w-6/12 h-1 bg-secondary_white-200 rounded-full" />
            <span className="text-secondary_white-200 ">or</span>
            <div className="w-6/12 h-1 bg-secondary_white-200 rounded-full" />
          </div>

          <div className="text-center mt-4 text-md text-secondary_white-200">
            Don&apos;t have an account?
            <span
              className="ml-2 cursor-default hover:underline"
              onClick={() => router.push("/register")}
            >
              Register
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
