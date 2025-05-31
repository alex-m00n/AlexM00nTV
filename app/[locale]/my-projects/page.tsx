import { getI18n } from "@/locales/server";
import { Bot, Code2, Tag, Tags } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getI18n();
    return {
        title: `${t('projects')} | AlexM00n 🌙`,
        description: "Just AlexM00n's Projects Page on AlexM00n's Website"
    };
}

export default async function Projects() {
    const t = await getI18n();
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-center">{t("projects")}</h1>

            <div className="container-project mt-5">
                <ul className="projects-grid">
                    <li className="p-1 rounded-lg bg-background transition-colors duration-200 hover:bg-accent border-2">
                        <a href="https://github.com/alex-m00n/AlexM00nTV" target="_blank">
                            <div className="-mt-10 ml-4 rounded-full justify-center flex h-20 w-20 bg-cyan-600">
                                <Code2 size={75} />
                            </div>
                            <div className="project-content">
                                <h1>alexm00n.tv</h1>
                                <p><Tags className="inline" /> <span className="hover:underline">Next.js</span>, <span className="hover:underline">Tailwind</span></p>
                                <p>{t("description1")}</p>
                                <div className="project-preview">
                                    <img src="/preview-alexm00ntv-dark.png" className="preview-dark rounded-lg" alt="Dark preview" />
                                    <img src="/preview-alexm00ntv-light.png" className="preview-light rounded-lg" alt="Light preview" />
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="p-1 rounded-lg bg-background transition-colors duration-200 hover:bg-accent border-2">
                        <a href="https://github.com/alex-m00n/M00nBot" target="_blank" className="project-card">
                            <div className="-mt-10 ml-4 rounded-full justify-center flex h-20 w-20 bg-red-600">
                                <Bot size={75} />
                            </div>
                            <div className="project-content">
                                <h1>M00n Bot</h1>
                                <p><Tag className="inline" /> <span className="hover:underline">Discord.js</span></p>
                                <p>
                                    {t("description2.0")}<br />
                                    {t("description2.1")}<br />
                                    {t("description2.2")}<br />
                                    {t("description2.3")}<br />
                                    {t("description2.4")}<br />
                                    {t("description2.5")}<br />
                                    {t("description2.6")}
                                </p>
                            </div>
                        </a>
                    </li>
                    <li className="p-1 rounded-lg bg-background transition-colors duration-200 hover:bg-accent border-2">
                        <a href="https://github.com/alex-m00n/M00nBot-website" target="_blank" className="project-card">
                            <div className="-mt-10 ml-4 rounded-full justify-center flex h-20 w-20 bg-cyan-600">
                                <Code2 size={75} />
                            </div>
                            <div className="project-content">
                                <h1>M00nBot</h1>
                                <p><Tags className="inline" /> <span className="hover:underline">Next.js</span>, <span className="hover:underline">Tailwind</span></p>
                                <p>{t("description3")}</p>
                                <div className="project-preview">
                                    <img src="/preview-m00nbotwebsite-dark.png" className="preview-dark rounded-lg" alt="Dark preview" />
                                    <img src="/preview-m00nbotwebsite-light.png" className="preview-light rounded-lg" alt="Light preview" />
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}