import React from "react";

export default function Card({ campaigns, requestMetaMaskAccess }) {
    return(
        <div className="grid grid-cols-1 gap-6 m-10">
          {campaigns.map((campaign, index) => (
            <div key={index} className="w-auto bg-card rounded-lg shadow-lg overflow-hidden">
              <img src={campaign.imageUrl} alt="Campaign" className="w-full h-48 object-cover object-center" />
              <div className="bg-accent p-4">
                <h2 className="text-2xl font-bold text-foreground">{campaign.title}</h2>
              </div>
              <div className="p-4">
                <p className="text-muted-foreground">Funds Required</p>
                <p className="text-2xl font-bold">{campaign.fundsRequired}</p>
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
                    />
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground px-3">Campaign ends in</p>
              <p className="text-lg font-semibold px-3">{campaign.campaignEnds}</p>
              <div className="relative pt-1">
                <div className="flex items-center justify-between px-3">
                  <div className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                    <span className="text-muted-foreground ">{campaign.peopleDonated} people donated</span>
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