import { type } from "os";
import React from "react";
import {useRouter} from "next/router";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useEffect } from "react";
import { LoginDocument, useLoginMutation } from "@/graphql/generated/graphql";
import { gql, useMutation } from "@apollo/client";
import Toaster from "../Toaster";
import {motion} from "framer-motion";

type setLoginPopup = (value: boolean) => void;

export const LoginPopup = ({
  setLoginPopup,
}: {
  setLoginPopup: setLoginPopup;
}) => {
  const [email, setEmail] = useState("walidmoultamis@gmail.com");
  const [password, setPassword] = useState("123");
  const [login, { data, loading, error }] = useLoginMutation();
  const [toaster, setToaster] = useState(false);
  const [toasterText, setToasterText] = useState("");

  const handleLogin = async () => {
    await login({
      variables: {
        input: {
          email,
          password,
        },
      },
    });
  };

  const Router = useRouter();

  useEffect(() => {
    try {
      if (data?.login) {
        console.log("login success", data.login);
        setToasterText("login success");
        //set user and token in local storage
        localStorage.setItem("user", JSON.stringify(data.login));
        setToaster(true);
        Router.push(`/Personalise/store/${data?.login?.store?.id}`);

      }
    } catch (error) {
      console.log(error);
      setToasterText("login failed");
      setToaster(true);
    }
  }, [data]);

  return (
    <div className="fixed z-40 top-0 left-0 w-full h-screen bg-black bg-opacity-20 backdrop-blur-md">
      <span className="absolute top-0 right-0 cursor-pointer text-2xl m-4">
        <CloseIcon onClick={() => setLoginPopup(false)} />
      </span>
      <motion.div
      initial={{opacity: 0, y: -100 , scale: 0.5}}
      animate={{opacity: 1, y: 0, scale: 1}}
      exit={{opacity: 0, y: -100}}
      transition={{duration: 0.5}}
      className="container mx-auto my-auto ">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 shadow-2xl flex">
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
              style={{
                backgroundImage:
                  "url('https://prod-cdn-thekrazycouponlady.imgix.net/wp-content/uploads/2016/08/coupon-fine-print-2022-8-1642048675-1642048675.jpg?auto=compress,format&fit=max')",
              }}
            ></div>
            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
              {error && (
                <div className="text-red-500 text-center">
                  oh no! something went wrong
                </div>
              )}
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="username"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="username"
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p className="text-xs italic text-red-500">
                    Please choose a password.
                  </p>
                </div>
                <div className="mb-4">
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    id="checkbox_id"
                  />
                  <label className="text-sm" htmlFor="checkbox_id">
                    Remember Me
                  </label>
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleLogin}
                  >
                    Sign In
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="./register.html"
                  >
                    Create an Account!
                  </a>
                </div>
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="./htmlForgot-password.html"
                  >
                    htmlForgot Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
      {toaster && <Toaster setToaster={setToaster} text={toasterText} />}
    </div>
  );
};
