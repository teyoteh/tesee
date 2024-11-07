import {
  GambaUi,
  TokenValue,
  useCurrentPool,
  useCurrentToken,
  useTokenBalance,
} from "gamba-react-ui-v2";
import { useState } from "react";
import Link from "next/link";
import { Modal } from "@/components/ui/Modal";
import { UserButton } from "../ui/UserButton";
import TokenSelect from "../ui/TokenSelect"; // TokenSelect modülünü buraya ekledik

export default function Header() {
  const pool = useCurrentPool();
  const token = useCurrentToken();
  const balance = useTokenBalance();
  const [bonusHelp, setBonusHelp] = useState(false);

  return (
    <>
      <div className="header-custom flex items-center justify-between fixed top-0 left-0 right-0 z-50 w-full mx-auto p-2.5 bg-[#171919] shadow-lg">
        {/* Logo ve Butonlar */}
        <div className="flex items-center justify-start">
          {/* Logo */}
          <Link href="/" passHref>
            <div className="h-9 m-0 cursor-pointer">
              <img alt="Gamba logo" src="/logo.svg" className="h-12 w-auto" />
            </div>
          </Link>
        </div>
        
        {/* Diğer içerikler */}
        <div className="flex gap-3 items-center ml-auto justify-center">
          {bonusHelp && (
            <Modal onClose={() => setBonusHelp(false)}>
              <h1>You have a bonus!</h1>
              <p>
                You have{" "}
                <b>
                  <TokenValue amount={balance.bonusBalance} />
                </b>{" "}
                worth of free plays. This bonus will be applied automatically
                when you play.
              </p>
            </Modal>
          )}
          {balance.bonusBalance > 0 && (
            <button
              onClick={() => setBonusHelp(true)}
              className="flex all-unset cursor-pointer text-[#003c00] rounded-lg bg-[#03ffa4] px-2.5 py-0.5 text-xs uppercase font-bold transition-colors duration-200 hover:bg-white"
            >
              +<TokenValue amount={balance.bonusBalance} />
            </button>
          )}

          {/* TokenSelect ve UserButton bileşenlerini buraya ekledik */}
          <TokenSelect />
          <UserButton />
        </div>
      </div>
    </>
  );
}
