
import { useWalletStore } from "../utils/usewallet";
const { ethers } = require("ethers");


export default function Hero() {
  const setWallet = useWalletStore(state => state.setWallet);
  const wallet = useWalletStore(state => state.wallet);

  // Metamask wallet connection
  async function metamaskwallet() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWallet(accounts[0]);
        console.log(accounts[0]);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Please install Metamask");
    }
  }

  return (
    <>
      <div className="max-w-full mx-auto inset-0 -z-10 h-full w-full items-center px-5 py-28 [background:radial-gradient(125%_125%_at_50%_10%,#000_30%,#63e_100%)] overflow-hidden">
        <div className="relative py-4 flex justify-center px-4 sm:px-0">
          <div className="max-w-3xl text-center">
            <div className="pb-4">
              <span className="hero inline-flex items-center rounded-2xl bg-slate-200 px-4 py-1.5 text-xs sm:text-sm font-serif font-medium text-neutral-800">
                Unlock the potential of blockchain in News.
              </span>
            </div>
            <h1 className="hero text-4xl sm:text-5xl font-semibold text-lime-50 xl:text-6xl font-intan !leading-tight">
              Discover the future of News and Media
            </h1>
            <p className="side mt-4 text-md sm:text-sm leading-8 text-slate-100 sm:px-16 font-intan white-space: pre-line;">
              Empower news and media with cutting-edge blockchain technology, ensuring freedom, safety, and authenticity. Break free from centralized control and amplify genuine voices in journalism.
            </p>

            <div className="mt-8 flex w-full space-x-8 justify-center">
              <button
                onClick={metamaskwallet}
                className="group relative inline-flex h-12 m-6 items-center justify-center rounded-md bg-neutral-200 px-6 font-semibold text-neutral-950"
              >
                <span className="text-md font-semibold">Connect Wallet</span>
                <div className="relative ml-1 h-5 w-5 overflow-hidden">
                  <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 -translate-x-4"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
            <div className="mt-8 flex w-full space-x-8 justify-center">
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-slate-400">
                User ID : {wallet}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
