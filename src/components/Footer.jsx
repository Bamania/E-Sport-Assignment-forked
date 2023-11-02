import React from "react";

const Footer = () => {
  return (
    <div className="bg-black w-full h-[12rem]">
      <div className="flex justify-between p-8">
        <div className="text-white">
          <h1>&copy; 2023 My Company. All rights reserved</h1>
        </div>
        <div className="text-white flex flex-col">
          <h1>Company</h1>
          <h1>About</h1>
          <h1>Blog</h1>
        </div>
        <div className="text-white">
          <h1>Press</h1>
          <h1>Jobs</h1>
          <h1>Partner</h1>
        </div>
        <div className="text-white">
          <h1>Solutions</h1>
          <h1>Marketing</h1>
          <h1>Analytics</h1>
          <h1>Commerce</h1>
          <h1>Insights</h1>
        </div>
        <div className="text-white">
          <h1>Documentation</h1>
          <h1>Guides</h1>
          <h1>API Status</h1>
          <h1>Legal</h1>
        </div>
        <div className="text-white">
          <h1>Claim</h1>
          <h1>Privacy</h1>
          <h1>Terms</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
