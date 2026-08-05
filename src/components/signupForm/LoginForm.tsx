"use client";

import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, Phone } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginForm = () => {
  const [loginType, setLoginType] = useState<"email" | "phone">("email");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-md">
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
        Welcome Back
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        Sign in to continue shopping premium fashion.
      </p>

      {/* Login Type */}

      <div className="mt-8 flex rounded-xl bg-gray-100 p-1">
        <button
          type="button"
          onClick={() => setLoginType("email")}
          className={`flex-1 rounded-lg py-2 text-sm font-medium transition ${
            loginType === "email"
              ? "bg-white text-emerald-700 shadow"
              : "text-gray-500"
          }`}
        >
          Email
        </button>

        <button
          type="button"
          onClick={() => setLoginType("phone")}
          className={`flex-1 rounded-lg py-2 text-sm font-medium transition ${
            loginType === "phone"
              ? "bg-white text-emerald-700 shadow"
              : "text-gray-500"
          }`}
        >
          Phone
        </button>
      </div>

      <form className="mt-6 space-y-5">
        {/* Email / Phone */}

        {loginType === "email" ? (
          <div>
            <Label>Email Address</Label>

            <div className="relative mt-2">
              <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <Input
                type="email"
                placeholder="john@example.com"
                className="h-12 rounded-xl pl-12"
              />
            </div>
          </div>
        ) : (
          <div>
            <Label>Phone Number</Label>

            <div className="relative mt-2">
              <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <Input
                placeholder="01XXXXXXXXX"
                className="h-12 rounded-xl pl-12"
              />
            </div>
          </div>
        )}

        {/* Password */}

        <div>
          <Label>Password</Label>

          <div className="relative mt-2">
            <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

            <Input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="h-12 rounded-xl pl-12 pr-12"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Forgot Password */}

        <div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="text-sm font-medium text-emerald-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login */}

        <Button className="h-12 w-full rounded-xl bg-emerald-700 hover:bg-emerald-600">
          Login
        </Button>

        {/* Footer */}

        <p className="text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            href="/sign-up"
            className="font-semibold text-emerald-600 hover:underline"
          >
            Create Account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
