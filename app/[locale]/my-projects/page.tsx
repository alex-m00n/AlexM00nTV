import { getI18n } from "@/locales/server";
import clsx from "clsx";
import { } from "lucide-react";

export default async function Projects() {
    const t = await getI18n();
    return (
        <>
            <head>
                <title>{clsx(t("projects"), " | AlexM00n 🌙")}</title>
            </head>
            <h1 className="text-center">{t("projects")}</h1>
            <br />
            <div className="container-project">
                <div className="mb-3">
                    <ul className="justify-around space-x-2">
                        <a href="https://github.com/alex-m00n/AlexM00nTV" target="_blank">
                            <li className="inline-flex">
                                <div className="rounded-lg border hover:bg-accent w-96">
                                    <div className="p-1">
                                        <h1 className="m-2">{t("website")} <img className="rounded-lg float-right mb-2" src="/animated.gif" height={100} width={100} /></h1>

                                        <br />
                                        <p className="mx-2">
                                            {t("description1")}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
            <div className="container-project-mobile">
                <div className="mb-3">
                    <ul className="justify-around space-x-2 mb-2">
                        <a href="https://github.com/alex-m00n/AlexM00nTV" target="_blank">
                            <li className="inline-flex">
                                <div className="rounded-lg border hover:bg-accent w-96">
                                    <div className="p-1">
                                        <h1 className="m-2">{t("website")} <img className="rounded-lg float-right mb-2" src="/animated.gif" height={100} width={100} /></h1>

                                        <br />
                                        <p className="mx-2">
                                            {t("description1")}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </>
    );
}
