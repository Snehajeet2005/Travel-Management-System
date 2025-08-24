"use client"
import React, { useState } from "react"
import Image from "next/image"
import Dubai from "../../../public/assets/dubai.jpg"
import { useRouter } from "next/navigation"

const SignUp = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Dummy redirect for now
      router.push("/login")
    } catch (error) {
      console.log(error)
    }

    setIsLoading(false)
  }

  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <Image
        src={Dubai}
        alt="Background"
        className="brightness-50 h-full w-full object-cover"
        fill
        priority
      />

      {/* Centered Card */}
      <div className="absolute top-1/2 left-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Create an Account
        </h2>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="John123"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="johndoe@gmail.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="********"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors disabled:opacity-60"
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?
          <a
            href="/login"
            className="ml-1 text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  )
}

export default SignUp
