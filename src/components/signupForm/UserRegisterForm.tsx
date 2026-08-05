"use client";

import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, Phone, User } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const UserRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="w-full max-w-md">
      <h2 className="mt-4 md:text-4xl text-3xl font-bold tracking-tight text-gray-900">
        Join Trust Wear
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        Create your account to shop premium fashion.
      </p>

      <form className="mt-8 space-y-5">
        {/* Name */}

        <div>
          <Label>Full Name</Label>

          <div className="relative mt-2">
            <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

            <Input
              placeholder="John Doe"
              className="h-12 rounded-xl border-gray-200 pl-12 focus-visible:ring-emerald-600 focus-visible:ring-1"
            />
          </div>
        </div>

        {/* Email */}

        <div>
          <Label>Email Address</Label>

          <div className="relative mt-2">
            <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

            <Input
              type="email"
              placeholder="john@example.com"
              className="h-12 rounded-xl border-gray-200 pl-12 focus-visible:ring-emerald-600 focus-visible:ring-1"
            />
          </div>
        </div>

        {/* Phone */}

        <div>
          <Label>Phone Number</Label>

          <div className="relative mt-2">
            <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

            <Input
              placeholder="01XXXXXXXXX"
              className="h-12 rounded-xl border-gray-200 pl-12 focus-visible:ring-emerald-600 focus-visible:ring-1"
            />
          </div>
        </div>

        {/* Password */}

        <div>
          <Label>Password</Label>

          <div className="relative mt-2">
            <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

            <Input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="h-12 rounded-xl border-gray-200 pl-12 pr-12 focus-visible:ring-emerald-600 focus-visible:ring-1"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password */}

        <div>
          <Label>Confirm Password</Label>

          <div className="relative mt-2">
            <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="••••••••"
              className="h-12 rounded-xl  border-gray-200 pl-12 pr-12 focus-visible:ring-emerald-600 focus-visible:ring-1"
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Terms */}

        <div className="flex items-center space-x-3">
          <Checkbox id="terms" />

          <Label htmlFor="terms" className="text-sm font-normal text-gray-600">
            I agree to the Terms & Conditions
          </Label>
        </div>

        {/* Button */}

        <Button className="h-12 w-full rounded-xl bg-emerald-700 text-white hover:bg-green-600">
          Create Account
        </Button>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href={"/sign-in"}
            className="font-semibold text-emerald-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default UserRegister;
