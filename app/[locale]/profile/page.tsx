import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { getI18n } from "@/locales/server";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { Heart, Laptop, TwitchIcon, YoutubeIcon } from "lucide-react";

export default async function Profile() {
  const t = await getI18n();
  return (
    <>
      <head>
        <title>Profile | AlexM00n 🌙</title>
      </head>
        <div className="pt-2 flex justify-center">
          <div className="profile align-middle h-96 border-4 items-center w-80 justify-around text-center rounded-lg hover:bg-accent">
            <div className="fixed ml-20 mr-20 items-center bg-background w-40 place-content-center rounded-lg hover:bg-accent" id="img">
              <br />
              <img className="w-28 h-auto rounded-full inline-flex" src="/animated.gif" />
              <h1 className="text-2xl font-bold py-5">AlexM00n</h1>
            </div>
            <br />
            <hr className="border-2 mx-16 mb-5 mt-48" />
            <p>{t("devstream")}</p>
            <p><i>&quot; {t("I")} code ! (づ˶•༝•˶)づ <Heart className="w-4 h-4 inline" /> <Laptop className="w-4 h-4 inline" /> <Heart className="w-4 h-4 inline" /> &quot;</i></p>
            <hr className="border-2 mx-3 my-5" />
            <h6 className="mx-5 inline-flex">
              <a href="https://www.twitch.tv/alexm00ntv" target="_blank" className="mx-2 hover:text-violet-800"><TwitchIcon /></a>
              <a href="https://www.youtube.com/@alexm00ntv" target="_blank" className="mx-2 hover:text-red-800"><YoutubeIcon /></a>
              <a href="https://discord.com/invite/a6zPQ8zC6f" target="_blank" className="mx-2 hover:text-blue-800"><DiscordLogoIcon width={20} height={20} /></a>
            </h6>
          </div>
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