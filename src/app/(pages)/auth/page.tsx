"use client"
import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"

type AuthInputs = {
  email: string
  password: string
}

function Authentication() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleLogin: SubmitHandler<AuthInputs> = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <div>
      {/*Sign In Form*/}

      <div className="absolute inset-0 flex items-center justify-center">
        <form
          className="flex flex-col gap-4 p-10 bg-secondary_gray-100 w-3/12 rounded-xl"
          onSubmit={handleSubmit(handleLogin)}
        >
          <h1 className="text-4xl text-secondary_white-100 font-bold text-center mb-10 font-motivaMedium">
            Sign In
          </h1>

          {/*@ts-ignore*/}
          <input
            {...(register("email"), { required: "Please enter a valid email" })}
            placeholder="Email"
            className="bg-secondary_white-100 px-2 py-1 rounded-lg mb-2"
          />

          {/*@ts-ignore*/}
          <input
            {...(register("password"),
            { required: "Please enter a valid password" })}
            placeholder="Password"
            className="bg-secondary_white-100 px-2 py-1 rounded-lg"
          />
          <div className="flex justify-center pt-4">
            <input
              type="submit"
              value="Sign In"
              className="form-button w-28 m-4"
            />
          </div>

          <div className="flex justify-around items-center gap-3">
            <div className="w-6/12 h-1 bg-secondary_white-200 rounded-full" />
            <span className="text-secondary_white-200 ">or</span>
            <div className="w-6/12 h-1 bg-secondary_white-200 rounded-full" />
          </div>

          <div className="text-center mt-4 text-md text-secondary_white-200">
            Don&apos;t have an account?
            <span className="ml-2 cursor-default hover:underline">
              Register
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Authentication
