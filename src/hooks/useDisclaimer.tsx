// hooks/useDisclaimer.tsx

import { useEffect, useState } from "react";

import { GambaUi } from "gamba-react-ui-v2";
import { Modal } from "@/components/ui/Modal";
import { useUserStore } from "./useUserStore";

export function useDisclaimer() {
  const [showDisclaimer, setShowDisclaimer] = useState<boolean>(false);

  const { agreedToTerms, set } = useUserStore();

  useEffect(() => {
    if (!agreedToTerms) {
      setShowDisclaimer(true);
    } else {
      setShowDisclaimer(false);
    }
  }, [agreedToTerms]);

  const handleDisclaimerClose = () => {
    set((state) => ({ ...state, agreedToTerms: true }));
    setShowDisclaimer(false);
  };

  const DisclaimerModal = () => {
    return (
      <Modal onClose={handleDisclaimerClose}>
  <div
    className="modal items-start text-left p-4 overflow-y-auto max-h-[60vh]"
    style={{ maxHeight: "400px" }}
  >
    <ol className="list-decimal list-inside space-y-4">
      <li className="text-sm">  {/* text-lg yerine text-sm kullanıldı */}
        <span className="font-bold">Age Requirement:</span> You must be at least 18 years old or meet the legal age of majority in your jurisdiction to enjoy the games on Things Casino 1.0.0 - Only Crypto Casino
      </li>
      <li className="text-sm">  {/* text-lg yerine text-sm kullanıldı */}
        <span className="font-bold">Legal Compliance:</span> Please ensure your participation complies with your local laws. We trust our users to use our website responsibly.
      </li>
      <li className="text-sm">  {/* text-lg yerine text-sm kullanıldı */}
        <span className="font-bold">Risk Acknowledgement:</span> Things Casino 1.0.0 - Only Crypto Casino games involve risk, and losses may occur. Keep in mind that winning outcomes are not guaranteed.
      </li>
      <li className="text-sm">  {/* text-lg yerine text-sm kullanıldı */}
        <span className="font-bold">No Warranty:</span> Our games are provided "as is" without warranties. They operate randomly and offer different percentage chances of winning.
      </li>
      <li className="text-sm">  {/* text-lg yerine text-sm kullanıldı */}
        <span className="font-bold">Limitation of Liability:</span>{" "}
        While we strive to provide a great experience, we won't be liable for damages resulting from your use of the website.
      </li>
      <li className="text-sm">  {/* text-lg yerine text-sm kullanıldı */}
        <span className="font-bold">Licensing Disclaimer:</span> Things Casino 1.0.0 - Only Crypto Casino is not a licensed casino but employs the term "casino" for descriptive purposes, indicating a simulation of real casino games. Please be aware that Things Casino 1.0.0 - Only Crypto Casino does not hold an actual casino license, and users should engage with this understanding.
      </li>
    </ol>
  </div>
  <p className="text-sm py-6">  {/* text-lg yerine text-sm kullanıldı */}
    By clicking "Acknowledge," you confirm that you have read, comprehended, and accepted these terms and conditions. Additionally, you affirm your compliance with all laws and regulations related to online gaming in your jurisdiction.
  </p>
  <GambaUi.Button main onClick={handleDisclaimerClose}>
    Acknowledge
  </GambaUi.Button>
</Modal>

    );
  };

  return { showDisclaimer, DisclaimerModal };
}
