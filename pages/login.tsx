"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [show, setShow] = useState<"password" | "text">("password");
  const [display, setDisplay] = useState<"show" | "hide">("show");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleShow = () => {
    if (show === "password") {
      setShow("text");
      setDisplay("hide");
    } else {
      setShow("password");
      setDisplay("show");
    }
  };
  const [signText, setSignText] = useState("Sign Up");
  const handleSignText = () => {
    if (signText === "Sign Up") {
      setSignText("Login");
      setIsLogin(false);
    } else {
      setSignText("Sign Up");
      setIsLogin(true);
    }
  };

  return (
    <div className=" flex flex-col md:flex-row h-screen w-full overflow-hidden">
      {/* Left Panel (always visible) */}
      <div className="flex flex-col justify-center items-start gap-6 p-12 w-1/2 h-full bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white animate-gradient">
        <p className="text-4xl font-bold bg-gradient-to-r from-gray-700 via-red-700 to-orange-700 bg-clip-text text-transparent animate-gradient">
          WebStore
        </p>
        <p className="text-lg">The Jude-ex Product store</p>
        <button
          onClick={handleSignText}
          className="bg-gradient-to-r from-gray-700 to-blue-600 px-6 py-2 rounded-lg font-bold hover:opacity-90 transition"
        >
          {signText}
        </button>
      </div>

      {/* Right Panel (Login/Signup switcher) */}
      <div className="relative flex-1 h-full overflow-hidden">
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div
              key="login"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col justify-center items-start gap-4 p-12 bg-gradient-to-br from-black via-gray-900 to-gray-700 text-white"
            >
              <h1 className="text-4xl font-mono font-bold bg-gradient-to-l from-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
                Hello Again!
              </h1>
              <p className="text-lg">Welcome Back</p>

              <div className="w-full">
                <label className="block text-sm mb-1">Email</label>
                <input
                  className="w-full border border-purple-500 rounded p-2 outline-none focus:ring-2 focus:ring-purple-400"
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex gap-2 w-full items-center">
                <div className="flex-1">
                  <label className="block text-sm mb-1">Password</label>
                  <input
                    className="w-full border border-purple-500 rounded p-2 outline-none focus:ring-2 focus:ring-purple-400"
                    type={show}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  onClick={handleShow}
                  className="bg-gray-600 rounded-lg px-3 py-2 font-mono text-sm hover:bg-gray-500 transition"
                >
                  {display}
                </button>
              </div>

              <div className="flex flex-col gap-3 w-full mt-4">
                <button className="rounded p-2 bg-gradient-to-l from-purple-500 to-blue-700 hover:opacity-90 transition">
                  Login
                </button>
                <a href="#" className="text-sm text-blue-300 hover:underline">
                  Forgot Password?
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col justify-center items-start gap-4 p-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white  animate-gradient"
            >
              <h1 className="text-4xl font-mono font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent animate-gradient">
                Join Us!
              </h1>
              <p className="text-lg">Create your account</p>

              <div className="w-full">
                <input
                  className="w-full border border-green-500 rounded p-2 outline-none focus:ring-2 focus:ring-green-400"
                  type="text"
                  placeholder="Full Name"
                />
              </div>

              <div className="w-full">
                <input
                  className="w-full border border-green-500 rounded p-2 outline-none focus:ring-2 focus:ring-green-400"
                  type="email"
                  placeholder="Email Address"
                />
              </div>

              <div className="w-full">
                <input
                  className="w-full border border-green-500 rounded p-2 outline-none focus:ring-2 focus:ring-green-400"
                  type="password"
                  placeholder="Password"
                />
              </div>

              <div className="flex flex-col gap-3 w-full mt-4">
                <button className="rounded p-2 bg-gradient-to-r from-green-500 to-cyan-600 hover:opacity-90 transition">
                  Sign Up
                </button>
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-sm text-gray-300 hover:underline"
                >
                  Already have an account? Login
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
