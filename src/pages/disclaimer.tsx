import { useRouter } from "next/router";
import React from "react";

const disclaimer = () => {
  const router = useRouter();

  const handleDisclaimerClose = () => {
    // Kullanıcı onayladığında ana sayfaya yönlendir
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-black to-gray-800 text-white">
      <div className="items-start text-left p-4 overflow-y-auto max-h-[60vh]">
        <ol className="list-decimal list-inside space-y-4">
          <li className="text-lg">
            <span className="font-bold">Age Requirement:</span> You must be at least 18 years old or meet the legal age of majority in your jurisdiction to enjoy the games on Things Casino 1.0.0 - Only Crypto Casino.
          </li>
          <li className="text-lg">
            <span className="font-bold">Legal Compliance:</span> Please ensure your participation complies with your local laws. We trust our users to use our website responsibly.
          </li>
          <li className="text-lg">
            <span className="font-bold">Risk Acknowledgement:</span> Things Casino 1.0.0 - Only Crypto Casino games involve risk, and losses may occur. Keep in mind that winning outcomes are not guaranteed.
          </li>
          <li className="text-lg">
            <span className="font-bold">No Warranty:</span> Our games are provided "as is" without warranties. They operate randomly and offer different percentage chances of winning.
          </li>
          <li className="text-lg">
            <span className="font-bold">Limitation of Liability:</span> While we strive to provide a great experience, we won't be liable for damages resulting from your use of the website.
          </li>
          <li className="text-lg">
            <span className="font-bold">Licensing Disclaimer:</span> Things Casino 1.0.0 - Only Crypto Casino is not a licensed casino but employs the term "casino" for descriptive purposes, indicating a simulation of real casino games. Please be aware that Things Casino 1.0.0 - Only Crypto Casino does not hold an actual casino license, and users should engage with this understanding.
          </li>
        </ol>
        <p className="text-lg py-6">
          By clicking "Acknowledge," you confirm that you have read, comprehended, and accepted these terms and conditions. Additionally, you affirm your compliance with all laws and regulations related to online gaming in your jurisdiction.
        </p>
        <button className="bg-purple-600 text-white p-2 rounded" onClick={handleDisclaimerClose}>
          Acknowledge
        </button>
      </div>
    </div>
  );
};

export default disclaimer;
