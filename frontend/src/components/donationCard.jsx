import React from "react";
import { ethers } from "ethers";
import Evault from "../data/Evalue.json";


export default function CardList() {

    const requestMetaMaskAccess = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        try {
          if (provider) {
            // window.ethereum
            //   .request({ method: "eth_requestAccounts" })
            //   .then((res) => accountChangeHandler(res[0]))
            //   .catch((err) => {
            //     console.log(err);
            //     toast({
            //       position: "top",
            //       title: "Error While Connecting With Metamask",
            //       status: "error",
            //       duration: 1500,
            //       isClosable: true,
            //     });
            //   });
            await provider.send("eth_requestAccounts", []);
    
            window.ethereum.on("chainChanged", () => {
              window.location.reload();
            });
    
            window.ethereum.on("accountsChanged", () => {
              window.location.reload();
            });
    
            toast({
              position: "top",
              title: "Connected With Metamask Successfully",
              status: "success",
              duration: 1500,
              isClosable: true,
            });
    
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            setAccount(address);
            const contractAddress = "0x62a0f9ce7f2a20f279188f591b957694c4eb2ef2";
            const contract = new ethers.Contract(
              contractAddress,
              Evault.abi,
              signer
            );
            setContract(contract);
            setProvider(signer);
            if (address === "0x46A2A666fc06681e2cB49440a0776a6C4Cc21906") {
              setUserType("Admin");
              navigate("Dashboard");
            } else {
              if (await contract.isJudge(address)) {
                setUserType("Judge");
              } else if (await contract.isClient(address)) {
                setUserType("Client");
              } else if (await contract.isLawyer(address)) {
                setUserType("Lawyer");
              }
              console.log("userType: ", userType);
              navigate("Dashboard");
            }
          } else {
            toast({
              position: "top",
              title: "Install Metamask Extension",
              status: "warning",
              duration: 1500,
              isClosable: true,
            });
          }
        } catch (error) {
          toast({
            position: "top",
            title: "Error While Connecting With Metamask",
            status: "error",
            duration: 1500,
            isClosable: true,
          });
        }
      };
    
      const onLogoClick = useCallback(() => {
        navigate("/");
      }, [navigate]);
    
      const onExercisesClick = useCallback(() => {
        const anchor = document.querySelector(
          "[data-scroll-to='popularExercisesSection']"
        );
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      }, []);
    
      const onTrainers1Click = useCallback(() => {
        const anchor = document.querySelector("[data-scroll-to='trainers']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      }, []);
    
      const onPricingClick = useCallback(() => {
        navigate("/");
      }, [navigate]);
    
      const onButton1Click = useCallback(() => {
        const anchor = document.querySelector(
          "[data-scroll-to='popularExercisesSection']"
        );
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      }, []);
    

    const campaigns = [
        {
            title: "My Mother Is Suffering From severe brain Stroke, heart...",
            imageUrl: "https://img.freepik.com/free-photo/photorealistic-kid-refugee-camp_23-2151494454.jpg?t=st=1724926291~exp=1724929891~hmac=33641065ebe4b1101acd2f81b0531a217c6f2dadc58da37f139ec783f3872db4&w=1380",
            fundsRequired: "₹ 20,00,000",
            progress: 30,
            campaignEnds: "43 Days",
            peopleDonated: 5,
        },
        {
            title: "Help My Father Recover From a Severe Heart Attack...",
            imageUrl: "https://img.freepik.com/free-photo/portrait-little-boy-refugee-holding-paper_23-2151494457.jpg?w=1380&t=st=1724928328~exp=1724931928~hmac=545485e7462bb67eaf6a2682ea15851e429df6ef57a1b3efaa6b9f65e69a7506",
            fundsRequired: "₹ 15,00,000",
            progress: 45,
            campaignEnds: "30 Days",
            peopleDonated: 10,
        },
        {
            title: "Support My Sister's Fight Against Cancer...",
            imageUrl: "https://img.freepik.com/free-photo/homeless-little-boy_23-2149491426.jpg?w=1380&t=st=1724928423~exp=1724932023~hmac=9ddae60434b5d128fdd9f9602ec27c5a5dcfcf22e5d3a9cc7d15165b429b63f2",
            fundsRequired: "₹ 10,00,000",
            progress: 60,
            campaignEnds: "25 Days",
            peopleDonated: 20,
        },
        {
            title: "Urgent: Help Save a Child's Life...",
            imageUrl: "https://img.freepik.com/free-photo/photorealistic-kid-refugee-camp_23-2151494454.jpg?t=st=1724926291~exp=1724929891~hmac=33641065ebe4b1101acd2f81b0531a217c6f2dadc58da37f139ec783f3872db4&w=1380",
            fundsRequired: "₹ 25,00,000",
            progress: 50,
            campaignEnds: "20 Days",
            peopleDonated: 15,
        },
        {
            title: "Help Me Provide Education to Underprivileged Kids...",
            imageUrl: "https://img.freepik.com/free-photo/photorealistic-kid-refugee-camp_23-2151494454.jpg?t=st=1724926291~exp=1724929891~hmac=33641065ebe4b1101acd2f81b0531a217c6f2dadc58da37f139ec783f3872db4&w=1380",
            fundsRequired: "₹ 5,00,000",
            progress: 75,
            campaignEnds: "15 Days",
            peopleDonated: 50,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((campaign, index) => (
                <div key={index} className="max-w-sm mx-auto bg-card rounded-lg shadow-lg overflow-hidden">
                    <img src={campaign.imageUrl} alt="Campaign" className="w-full h-48 object-cover object-center" />
                    <div className="bg-accent p-4">
                        <h2 className="text-2xl font-bold text-foreground">{campaign.title}</h2>
                    </div>
                    <div className="p-4">
                        <p className="text-muted-foreground">Funds Required</p>
                        <p className="text-2xl font-bold">{campaign.fundsRequired}</p>

                        {/* Progress bar below the Funds Required */}
                        <div className="relative pt-1 mt-2">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-semibold inline-block text-muted-foreground">
                                    Progress: {campaign.progress}%
                                </span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2 mb-4">
                                <div
                                    className="bg-primary h-2 rounded-full"
                                    style={{ width: `${campaign.progress}%` }}
                                ></div>
                            </div>
                        </div>

                        <p className="text-muted-foreground">Campaign ends in</p>
                        <p className="text-lg font-semibold">{campaign.campaignEnds}</p>
                        <div className="relative pt-1">
                            <div className="flex items-center justify-between">
                                <div className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                                    <span className="text-muted-foreground">{campaign.peopleDonated} people donated</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <button className="bg-blue-400 text-secondary-foreground hover:bg-blue-500 w-full p-2 rounded-lg" onClick={requestMetaMaskAccess}>Contribute</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
