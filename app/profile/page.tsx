import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { Heart, Laptop, TwitchIcon, YoutubeIcon } from "lucide-react";

export default function Profile() {
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
          <p>Développeur | Streameur</p>
          <p><i>" Je code ! (づ˶•༝•˶)づ <Heart className="w-4 h-4 inline" /> <Laptop className="w-4 h-4 inline" /> <Heart className="w-4 h-4 inline" /> "</i></p>
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
          <summary className="text-2xl font-bold">Qui suis-je ?</summary>
          <p className="mx-6 mb-6 mt-1 max-w-60">Un collégien de 14 ans qui est passionné par les jeux vidéo, les échecs et la programmation. Un peu fou mais bon on est là !</p>
          <details className="max-w-sm">
            <summary className="text-xl font-bold ml-6">Mes projets</summary>
            <p className="ml-12 mb-6 mt-1 max-w-56">Je suis en train de faire des sites web avec Next.js et Tailwind CSS. Je suis en train de faire des bot discord avec discord.js. Je vais lancer ma chaine youtube et twitch prochainement !</p>
          </details>
          <details className="max-w-sm">
            <summary className="text-xl font-bold ml-6">Mes loisirs</summary>
            <p className="ml-12 mb-6 mt-1 max-w-56">Je joue aux échecs, je fais du sport, je joue aux jeux vidéo et je code !</p>
          </details>
        </details>
        <details className="max-w-lg">
          <summary className="font-extrabold text-2xl">Je stream quoi ?</summary>
          <p className="mx-6 mt-1 max-w-60">Je stream des échecs, du Rocket League, du Valorant et de la programmation !</p><p className="mx-6 mt-1 max-w-60">**Un bon gros puant quoi 🤓☝️ **</p>
          <br />
        </details>
      </div>
    </>
  );
}