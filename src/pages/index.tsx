import { useEffect, useState } from "react";
import { GambaButton } from "@/components/ui/GambaPlayButton";
import { GameGrid } from "@/components/game/GameGrid";
import { PLATFORM_REFERRAL_FEE } from "@/constants";
import RecentPlays from "@/components/game/RecentPlays/RecentPlays";
import { toast } from "sonner";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

export default function HomePage() {
  const walletModal = useWalletModal();
  const wallet = useWallet();
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    { src: "/banner3.png", link: "https://x.com/ThingsSOL/status/1853124382857605460" },
  ];

  const copyInvite = () => {
    if (!wallet.publicKey) {
      return walletModal.setVisible(true);
    }
    const referralLink = `${location.host}?code=${wallet.publicKey.toString()}`;
    navigator.clipboard.writeText(referralLink);
    toast.success(
      `Copied! Share your link to earn a ${PLATFORM_REFERRAL_FEE * 100}% fee when players use this platform`
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="relative mx-auto flex flex-col gap-5 mt-20 pb-10 px-2.5 transition-all duration-250 ease-in-out sm:px-5 sm:pt-5 md:max-w-6xl">
        <div className="relative overflow-hidden flex flex-col items-center justify-center p-4 rounded-lg bg-transparent">
          <div
            className="relative w-full h-48 sm:h-72" // Mobil uyum için yüksekliği esnek hale getirdik
            style={{ overflow: "hidden", borderRadius: "0.5rem", backgroundColor: "#171919" }}
          >
            <a href={images[currentSlide].link} target="_blank" rel="noopener noreferrer">
              <img
                src={images[currentSlide].src}
                alt={`Slide ${currentSlide}`}
                className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out"
              />
            </a>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-800 transition md:left-4"
            >
              ◀
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-800 transition md:right-4"
            >
              ▶
            </button>
          </div>
        </div>
        <h2 className="text-lg font-bold text-center">Thing Games</h2>
        <GameGrid />
        <h2 className="text-lg font-bold text-center">Live Plays</h2>
        <RecentPlays />
      </div>
    </>
  );
}
