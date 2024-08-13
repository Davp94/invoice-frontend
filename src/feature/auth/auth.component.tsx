'use client';

import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { LoginDto } from "./login.dto";
import { authLogin } from "./auth.service";
import Image from "next/image";
import Cookies from "js-cookie";
//PROP DRILING
const AuthComponent = ({}) => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    const loginData: LoginDto = {
        username: username,
        password: password
    }
    authLogin(loginData).then(res => {
        console.log("🚀 ~ authLogin ~ token:", res);
        Cookies.set('token', res.token);
        router.push('/');
    })
  }

  return (
    <div className="flex align-items-center justify-content-center w-full h-screen">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
          {/* <Image
            src="/demo/images/blocks/logos/hyper.svg"
            alt="hyper"
            height={50}
            className="mb-3"
          /> */}
          <div className="text-900 text-3xl font-medium mb-3">Invoice App</div>
          <span className="text-600 font-medium line-height-3">Don't have an account?</span>
          <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
        </div>

        <div>
          <label
            htmlFor="username"
            className="block text-900 font-medium mb-2"
          >
            Username
          </label>
          <InputText
            id="username"
            type="text"
            placeholder="username"
            className="w-full mb-3"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label
            htmlFor="password"
            className="block text-900 font-medium mb-2"
          >
            Password
          </label>
          <InputText
            id="password"
            type="password"
            placeholder="Password"
            className="w-full mb-3"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            label="Sign In"
            icon="pi pi-user"
            className="w-full"
            onClick={() => login()}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;
