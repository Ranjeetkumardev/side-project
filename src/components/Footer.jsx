import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Offices */}
        <div>
          <h3 className="text-lg font-semibold">Offices</h3>
          <div className="mt-4">
            <p className="font-semibold">Mohali</p>
            <p className="text-sm text-gray-400">
              5th floor E 279, Industrial Area, <br />
              Sector 75, Sahibzada Ajit Singh Nagar, <br />
              Punjab 160055
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold">Abohar</p>
            <p className="text-sm text-gray-400">
              3rd Floor, Sarv Elanza, Abohar – Hanumangarh Rd, <br />
              Abohar, Punjab 152116
            </p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold">Services</h3>
          <ul className="mt-4 space-y-2 text-gray-400 text-sm">
            <li>Front End Service</li>
            <li>E-Commerce</li>
            <li>UI/UX Design Service</li>
            <li>Shopify Development</li>
            <li>UX Audit</li>
            <li>Restaurant Website Design</li>
            <li>Get Free UX Audit</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="mt-4 space-y-2 text-gray-400 text-sm">
            <li>Blog</li>
            <li>Team</li>
            <li>Career</li>
            <li>Portfolio</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h3 className="text-lg font-semibold">Other Links</h3>
          <ul className="mt-4 space-y-2 text-gray-400 text-sm">
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Find Us */}
        <div>
          <h3 className="text-lg font-semibold">Find Us</h3>
          <ul className="mt-4 space-y-2 text-gray-400 text-sm">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Behance</li>
            <li>Dribbble</li>
            <li>Design Rush</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-gray-500 text-sm">
        All Rights Reserved By - My Side-Project 2025
      </div>
    </footer>
  );
};

export default Footer;
