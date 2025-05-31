import { getI18n } from "@/locales/server";
import { DiscordLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { Heart, Laptop, TwitchIcon, YoutubeIcon } from "lucide-react";
import { MouseFollower } from "./MouseFollower";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getI18n();
    return {
        title: `${t('profile')} | AlexM00n 🌙`,
        description: "Just AlexM00n's Profile Page on AlexM00n's Website"
    };
}

export default async function Profile() {
  const t = await getI18n();
  return (
    <>
      <div className="pt-2 flex justify-center">
        <MouseFollower>
          <div className="profile align-middle h-96 border-4 items-center w-80 justify-around text-center rounded-lg hover:bg-accent transition-all duration-300 bg-background/50 backdrop-blur-sm" id="img">
            <div className="ml-20 mr-20 items-center w-40 place-content-center">
              <br />
              <img className="w-28 h-auto rounded-full inline-flex" src="/animated.gif" />
              <h1 className="text-2xl font-bold py-5">AlexM00n</h1>
            </div>
            <br />
            <hr className="border-2 mx-16 mb-5" />
            <p>{t("devstream")}</p>
            <p><i>&quot; {t("I")} code ! (づ˶•༝•˶)づ <Heart className="w-4 h-4 inline" /> <Laptop className="w-4 h-4 inline" /> <Heart className="w-4 h-4 inline" /> &quot;</i></p>
            <hr className="border-2 mx-3 mt-5 mb-3" />
            <h6 className="mx-5 inline-flex">
              <a href="https://www.twitch.tv/alexm00ntv" target="_blank" className="mx-2 hover:text-violet-800"><TwitchIcon width={30} height={30} /></a>
              <a href="https://www.instagram.com/alex.m00n_" target="_blank" className="mx-2 hover:text-fuchsia-800"><InstagramLogoIcon width={30} height={30} /></a>
              <a href="https://www.youtube.com/@alexm00ntv" target="_blank" className="mx-2 hover:text-red-800"><YoutubeIcon width={30} height={30} /></a>
              <a href="https://discord.com/invite/a6zPQ8zC6f" target="_blank" className="mx-2 hover:text-blue-800"><DiscordLogoIcon width={30} height={30} /></a>
            </h6>
          </div>
        </MouseFollower>
      </div>
      <br />
      <div>
        <details className="max-w-lg mb-6">
          <summary className="text-2xl font-bold">{t("Ititle")}</summary>
          <p className="mx-6 mb-6 mt-1 max-w-80">{t("Ip")}</p>
          <details className="max-w-sm">
            <summary className="text-xl font-bold ml-6">{t("Iititle")}</summary>
            <p className="ml-12 mb-6 mt-1 max-w-64">{t("Iip")}</p>
          </details>
          <details className="max-w-sm">
            <summary className="text-xl font-bold ml-6">{t("Iiititle")}</summary>
            <p className="ml-12 mb-6 mt-1 max-w-64">{t("Iiip")}</p>
          </details>
        </details>
        <details className="max-w-lg">
          <summary className="font-extrabold text-2xl">{t("IItitle")}</summary>
          <p className="mx-6 mt-1 max-w-80">{t("IIp")}</p>
          <p className="text-center mt-2">{t("IIpii")}</p>
          <p className="text-center">🤓☝️</p>
          <br />
        </details>
      </div>
    </>
  );
}