import { getI18n } from "@/locales/server";
import clsx from "clsx";
import { Bot, Code2, Tag, Tags } from "lucide-react";

export default async function Projects() {
    const t = await getI18n();
    return (
        <>
            <head>
                <title>{clsx(t("projects"), " | AlexM00n 🌙")}</title>
                <meta name="description" content="Just AlexM00n's Projects Page on AlexM00n's Website" />
            </head>


            <h1 className="text-center">{t("projects")}</h1>

            <br />

            <div className="container-project mt-5">
                <div>
                    <ul>
                        <li className="mx-2">
                            <a href="https://github.com/alex-m00n/AlexM00nTV" target="_blank">
                                <div className="rounded-lg border hover:bg-accent w-96">
                                    <div className="rounded-full bg-cyan-600 w-20 h-20 -mt-10 ml-5"><center><Code2 size={75} /></center></div>
                                    <div className="p-1">
                                        <h1 className="m-2">alexm00n.tv</h1>
                                        <p><Tags className="inline" /> <p className="hover:underline underline-offset-2 inline-flex">Next.js</p>, <p className="hover:underline underline-offset-2 inline-flex">Tailwind</p></p>
                                        <p className="mx-2">
                                            {t("description1")}
                                        </p>
                                        <center>
                                            <img src="/preview-site-dark.png" className="h-36 preview-dark rounded-lg" />
                                            <img src="/preview-site-light.png" className="h-36 preview-light rounded-lg" />
                                        </center>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="mx-2">
                            <a href="https://github.com/alex-m00n/M00nBot" target="_blank">
                                <div className="rounded-lg border hover:bg-accent w-96">
                                    <div className="rounded-full bg-red-600 w-20 h-20 -mt-10 ml-5"><center><Bot size={75} /></center></div>
                                    <div className="p-1">
                                        <h1 className="m-2">M00n Bot</h1>
                                        <p><Tag className="inline" /> <p className="hover:underline underline-offset-2 inline-flex">Discord.js</p></p>
                                        <p className="mx-2">
                                            {t("description2.0")}
                                            <br />
                                            {t("description2.1")}
                                            <br />
                                            {t("description2.2")}
                                            <br />
                                            {t("description2.3")}
                                            <br />
                                            {t("description2.4")}
                                            <br />
                                            {t("description2.5")}
                                            <br />
                                            {t("description2.6")}
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