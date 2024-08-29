import React from "react";
import { useState } from "react";
import { useWalletStore } from "../utils/usewallet";
import { useFormStore } from "../utils/useform";

export default function Login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const setFormData = useFormStore((state) => state.setFormData);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ firstName, lastName, userName });
  };

  const wallet = useWalletStore(state => state.wallet);
    return(
        <>
<section class="bg-black [background:radial-gradient(125%_125%_at_50%_10%,#000_30%,#63e_100%)]">
  <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
    <aside class="relative block h-18 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6 mr-0" >
      <img
        alt=""
        src=""
        class="absolute inset-0 h-full object-right object-scale-down m-0"
      />
    </aside>

    <main
      class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div class="max-w-xl lg:max-w-3xl">
        <a class="block text-neutral-200" href="#">
        <img class="block h-16 w-auto" height="64px" src="https://media.licdn.com/dms/image/D4E0BAQH8C2rq-gomdg/company-logo_200_200/0/1714460779107/floqer_logo?e=1728518400&v=beta&t=vq19ZxmTrZN4UCHEzTeH3YgJq9dZt1GpGFrkIHklKjc"/>
        </a>

        <h1 class="spec mt-6 text-2xl font-bold text-neutral-200 sm:text-3xl md:text-4xl">
          Welcome to NewsBlock
        </h1>

        <p class="mt-4 leading-relaxed text-gray-200 font-semibold">
          User ID : {wallet}
        </p>

        <form action="#" class="mt-8 grid grid-cols-6 gap-6" onSubmit={handleSubmit}>
          <div class="col-span-6 sm:col-span-3">
            <label for="FirstName" class="block text-sm font-semibold text-gray-200">
              First Name
            </label>

            <input
              type="text"
              id="FirstName"
              name="first_name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-950 shadow-sm p-2 font-semibold"
            />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label for="LastName" class="block text-sm font-semibold text-gray-200">
              Last Name
            </label>

            <input
              type="text"
              id="LastName"
              name="last_name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-950 shadow-sm p-2 font-se"
            />
          </div>

          <div class="col-span-6">
            <label for="Email" class="block text-sm font-semibold text-gray-200"> UserName </label>

            <input
              type="email"
              id="Email"
              name="email"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-950 font-semibold shadow-sm p-2"
            />
          </div>

       

          <div class="col-span-6">
            <label for="MarketingAccept" class="flex gap-4">
              <input
                type="checkbox"
                id="MarketingAccept"
                name="marketing_accept"
                class="size-5 rounded-md border-gray-200 bg-white shadow-sm"
              />

              <span class="text-sm text-gray-200">
                I want to keep my identity t events, product policy and company announcements.
              </span>
            </label>
          </div>

          <div class="col-span-6">
            <p class="text-sm text-gray-200">
              By creating an account, you agree to our
              <a href="#" class="text-gray-700 underline"> terms and conditions </a>
              and
              <a href="#" class="text-gray-700 underline">privacy policy</a>.
            </p>
          </div>

          <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
          <button type="submits" onClick={handleSubmit} class="group relative inline-flex h-12 items-center justify-center rounded-md bg-neutral-200 px-6 font-semibold text-neutral-950"><span className="text-md font-semibold">Connect Wallet</span><div class="relative ml-1 h-5 w-5 overflow-hidden"><div class="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"><path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 -translate-x-4"><path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></div></button>

            <p class="mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?
              <a href="#" class="text-gray-700 underline">Log in</a>.
            </p>
          </div>
        </form>
      </div>
    </main>
  </div>
</section>

        </>
    )
}