import { Button, buttonVariants } from "@/components/ui/button";
import { HomeIcon } from "@radix-ui/react-icons";
// import { getAuthSession } from "@/lib/auth";
import clsx from "clsx";
import { } from "lucide-react";
import Link from "next/link";

export default async function Schedule() {
    return (
        <>
            <head>
                <title>Schedule | AlexM00n 🌙</title>
            </head>
            <div className="m-4 max-w-lg border-2 border-accent rounded-sm mt-1">
                <ul>
                    <li>
                        <div className="m-4 max-w-lg border-2 border-accent rounded-lg hover:bg-accent bg-background">
                            <p className="p-3">Lundi : 18h => 19h + ???</p>
                        </div>
                        <div className="m-4 max-w-lg border-2 border-accent rounded-lg hover:bg-accent bg-background">
                            <p className="p-3">Mardi : 18h => 19h + ???</p>
                        </div>
                        <div className="m-4 max-w-lg border-2 border-accent rounded-lg hover:bg-accent bg-background">
                            <p className="p-3">Mercredi : Pas de stream :/</p>
                        </div>
                        <div className="m-4 max-w-lg border-2 border-accent rounded-lg hover:bg-accent bg-background">
                            <p className="p-3">Jeudi : Pas de stream :/</p>
                        </div>
                        <div className="m-4 max-w-lg border-2 border-accent rounded-lg hover:bg-accent bg-background">
                            <p className="p-3">Vendredi : Soit Pas de stream :/ Soit 18h => 20h</p>
                        </div>
                            <div className="m-4 max-w-lg border-2 border-accent rounded-lg hover:bg-accent bg-background">
                            <p className="p-3">Samedi : 15h => 18h + ???</p>
                        </div>
                        <div className="m-4 max-w-lg border-2 border-accent rounded-lg hover:bg-accent bg-background">
                            <p className="p-3"> Dimanche : Pas de stream :/</p>
                        </div>
                    </li>
                </ul>


            </div>
        </>
    );
}
