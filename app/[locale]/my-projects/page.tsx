import { getI18n } from "@/locales/server";
import clsx from "clsx";
import { } from "lucide-react";

export default async function Projects() {
    const t =await getI18n();
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
                        <li className="inline-flex">
                            <div className="rounded-lg border hover:bg-accent w-auto">
                                <div className="pt-1">
                                    <h1 className="mx-2">Lorem ipsum dolor <img className="rounded-lg ml-auto mr-0 inline" src="/animated.gif" height={100} width={100} /></h1>
                                </div>
                                <br />
                                <p className="mx-2">
                                    Lorem ipsum dolor sit amet consectetur
                                </p>
                            </div>
                        </li>
                        <li className="inline-flex">
                            <div className="rounded-lg border hover:bg-accent w-auto">
                                <div className="pt-1">
                                    <h1 className="mx-2">Lorem ipsum dolor <img className="rounded-lg ml-auto mr-0 inline" src="/animated.gif" height={100} width={100} /></h1>
                                </div>
                                <br />
                                <p className="mx-2">
                                    Lorem ipsum dolor sit amet consectetur
                                </p>
                            </div>
                        </li>
                        <li className="inline-flex">
                            <div className="rounded-lg border hover:bg-accent w-auto">
                                <div className="pt-1">
                                    <h1 className="mx-2">Lorem ipsum dolor <img className="rounded-lg ml-auto mr-0 inline" src="/animated.gif" height={100} width={100} /></h1>
                                </div>
                                <br />
                                <p className="mx-2">
                                    Lorem ipsum dolor sit amet consectetur
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
