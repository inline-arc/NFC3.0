import React from 'react';
import NavBar from '../partials/navbar';
import SeekDonationForm from '../seekDonationForm';
function SeekDonation() {
  return (
    <>
    <div className="flex min-h-screen">
      <NavBar />
      <div className="flex-1 p-10">
        <SeekDonationForm />
      </div>
      </div>
    </>
    );
}

export default SeekDonation;
