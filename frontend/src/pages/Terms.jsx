import React from 'react';

const Terms = () => {
  const containerStyle = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
  };

  const headerStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    marginBottom: '10px',
  };
  return (
    <div style={{ ...containerStyle, marginTop: '40px' }}>
      <h1 style={headerStyle}>Terms and Conditions</h1>
      <p style={paragraphStyle}>
        These terms and conditions outline the rules and regulations for the use of Welcome Furniture's Website, located at Welcome Furniture.com.
      </p>
      <p style={paragraphStyle}>
        By accessing this website we assume you accept these terms and conditions. Do not continue to use Welcome Furniture if you do not agree to take all of the terms and conditions stated on this page.
      </p>
      <h2>Cookies</h2>
      <p style={paragraphStyle}>
        We employ the use of cookies. By accessing Welcome Furniture, you agreed to use cookies in agreement with the Welcome Furniture's Privacy Policy.
      </p>
      <h2>License</h2>
      <p style={paragraphStyle}>
        Unless otherwise stated, Welcome Furniture and/or its licensors own the intellectual property rights for all material on Welcome Furniture. All intellectual property rights are reserved. You may access this from Welcome Furniture for your own personal use subjected to restrictions set in these terms and conditions.
      </p>
      <h2>Hyperlinking to our Content</h2>
      <p style={paragraphStyle}>
        The following organizations may link to our Website without prior written approval:
      </p>
      <ul>
        <li>Government agencies;</li>
        <li>Search engines;</li>
        <li>News organizations;</li>
        <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
        <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
      </ul>
      <h2>iFrames</h2>
      <p style={paragraphStyle}>
        Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
      </p>
      <h2>Content Liability</h2>
      <p style={paragraphStyle}>
        We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website.
      </p>
      <h2>Reservation of Rights</h2>
      <p style={paragraphStyle}>
        We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request.
      </p>
      <h2>Removal of links from our website</h2>
      <p style={paragraphStyle}>
        If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
      </p>
      <h2>Disclaimer</h2>
      <p style={paragraphStyle}>
        To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website.
      </p>
    </div>
  );
};

export default Terms;