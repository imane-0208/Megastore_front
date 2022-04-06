import { NextPage } from "next";
import React, { useState } from "react";
import { useCreateStoreMutation } from "@/graphql/generated/graphql";
import Lottie from "lottie-react";
import * as storeLottie from "@/lottie/store.json";
import Toaster from "@/components/Toaster";
import { motion } from "framer-motion";

const Seller: NextPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [user, setUser] = useState("");
  const [Toast, setToast] = useState(false);

  const [createStore, { loading }] = useCreateStoreMutation();
  const [ToasterText, setToasterText] = useState("");

  const handleToast = (text: string) => {
    setToasterText(text);
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 4000);
  };

  const handleSubmit = async () => {
    if (
      name.length > 0 &&
      phone.length > 0 &&
      description.length > 0 &&
      address.length > 0 &&
      image.length > 0 &&
      user.length > 0
    ) {
      await createStore({
        variables: {
          input: {
            name,
            phone,
            description,
            address,
            image,
            userId: user,
          },
        },
      });
        handleToast(`${"تم إضافة المتجر بنجاح"}`);

        //set add to empty
        setName("");
        setPhone("");
        setDescription("");
        setAddress("");
        setImage("");
        setUser("");






    } else {
        handleToast("Fill in the form asat \n ta malk a sahbi")
    }
  };

  return (
    <div className="">
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full h-auto lg:flex justify-center items-center bg-gray-200 hidden lg:w-5/12 bg-cover rounded-l-lg">
              <Lottie
                animationData={storeLottie}
                loop={true}
                height={400}
                width={400}
              />
            </div>
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Create a store</h3>
              <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="firstName"
                    >
                      Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="phone"
                    >
                      Phone
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="phone"
                      type="number"
                      placeholder="phone"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="Description"
                  >
                    Description
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="Description"
                    type="text"
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="address"
                  >
                    address
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="address"
                    type="text"
                    placeholder="address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="image"
                    >
                      image
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="image"
                      type="text"
                      placeholder="image url"
                      onChange={(e) => setImage(e.target.value)}
                    />
                    {/* <p className="text-xs italic text-red-500">Please choose a password.</p> */}
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="user"
                    >
                      user id
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="user"
                      type="text"
                      placeholder="user id"
                      onChange={(e) => setUser(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Register Account
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="./index.html"
                  >
                    Already have an account? Login!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {Toast && <Toaster text={ToasterText} />}
    </div>
  );
};

export default Seller;
