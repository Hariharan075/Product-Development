
import "../sidenav/termsandconditions.css";
import React, { useState } from 'react';
function Termsandconditions() {
  const [showTerms, setShowTerms] = useState(false);

  const toggleTerms = () => {
    setShowTerms(!showTerms);
  };

  return (
    <div className={`terms-container ${showTerms ? 'active' : ''}`}>
      <h2 onClick={toggleTerms}>Terms and Conditions</h2>
      <div className={`terms-content ${showTerms ? 'show' : ''}`}></div>
      <p >
        Welcome to Potato, a social media platform designed to connect people
        around the world. By using Potato, you agree to adhere to these Terms
        and Conditions. You must be at least 16 years old to use Potato, and by
        using the app, you confirm that you meet this eligibility requirement.
        You are responsible for the security of your Potato account, and you
        should keep your login credentials confidential. Do not create or use
        accounts on Potato for anyone other than yourself. You are also
        responsible for all content you post on Potato, including text, photos,
        videos, and audio. Potato may use your content to personalize your
        experience and for analytical purposes, and by posting content, you
        grant Potato a non-exclusive license to use, modify, and display it. Our
        Privacy Policy outlines how we collect, use, and protect your data, and
        by using Potato, you consent to our data practices. We may collect
        information such as device details, location, and user behavior to
        enhance your experience. Be respectful and considerate when interacting
        with others on Potato, as harassment, hate speech, and abusive behavior
        will not be tolerated. We reserve the right to remove or restrict access
        to content that violates our guidelines. We may suspend or terminate
        accounts for violations of these Terms and Conditions, with users having
        the right to appeal such actions. Respect intellectual property rights
        and do not post copyrighted material without permission. If you believe
        your content has been used without consent, contact us. Any disputes
        between users and Potato shall be resolved through mediation,
        arbitration, or litigation as outlined in our Dispute Resolution Policy.
        Use Potato at your own risk, as we are not responsible for any damages
        or losses resulting from app usage. If you have questions or concerns
        regarding these Terms and Conditions, please contact us at
        potato@gmail.com. Potato reserves the right to update these Terms and
        Conditions, and users will be notified of any changes. Thank you for
        choosing Potato, and we hope you enjoy connecting and sharing with the
        Potato community!
      </p>
    </div>
  );
}

export default Termsandconditions;
