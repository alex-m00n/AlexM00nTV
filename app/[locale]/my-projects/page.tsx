import { getI18n } from "@/locales/server";
import clsx from "clsx";
import { Bot, Code2, Tag, Tags } from "lucide-react";

export default async function Projects() {
    const t = await getI18n();
    return (
        <>
            <head>
                <title>{clsx(t("projects"), " | AlexM00n 🌙")}</title>
            </head>


            <h1 className="text-center">{t("projects")}</h1>

            <br />

            <div className="container-project mt-5">
                <div>
                    <ul>
                        <li className="mx-2">
                            <a href="https://github.com/alex-m00n/AlexM00nTV" target="_blank">
                                <div className="rounded-lg border hover:bg-accent w-96">
                                    <div className="rounded-full bg-cyan-600 w-20 h-20 -mt-10 ml-5"><center><Code2 className="align-middle" size={75} /></center></div>
                                    <div className="p-1">
                                        <h1 className="m-2">alexm00n.tv</h1>
                                        <p><Tags className="inline" /> Next.js, Tailwind</p>
                                        <p className="mx-2">
                                            {t("description1")}
                                        </p>
                                        <center>
                                            <img src="/preview-site.png" className="w-80 h-auto" />
                                            
                                        </center>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="mx-2">
                            <a href="https://github.com/alex-m00n/" target="_blank">
                                <div className="rounded-lg border hover:bg-accent w-96">
                                    <div className="rounded-full bg-red-600 w-20 h-20 -mt-10 ml-5"><center><Bot className="align-middle" size={75} /></center></div>
                                    <div className="p-1">
                                        <h1 className="m-2">M00n Bot</h1>
                                        <p><Tag className="inline" /> Discord.js</p>
                                        <p className="mx-2">
                                            {t("description2")}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    );
}