import { getI18n } from "@/locales/server";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getI18n();
    return {
        title: `${t('schedule')} | AlexM00n 🌙`,
        description: "Just AlexM00n's Schedule Page on AlexM00n's Website"
    };
}

export default async function Schedule() {
    const t = await getI18n();
    return (
        <>
            <div className="m-4 max-w-lg border-2 border-accent rounded-sm mt-1">
                <ul>
                    <li>
                        <div className="m-4 max-w-lg border-2 border-accent rounded-lg hover:bg-accent bg-background">
                            <p className="p-3">{t("mondaytxt")}</p>
                        </div>
                        <div className="m-4 max-w-lg border-2 border-accent rounded-lg hover:bg-accent bg-background">
                            <p className="p-3">{t("tuesdaytxt")}</p>
                        </div>
                        <div className="m-4 max-w-lg border-2 border-accent rounded-lg hover:bg-accent bg-background">
                            <p className="p-3">{t("wednesdaytxt")}</p>
                        </div>
                        <div className="m-4 max-w-lg border-2 border-accent rounded-lg hover:bg-accent bg-background">
                            <p className="p-3">{t("thursdaytxt")}</p>
                        </div>
                        <div className="m-4 max-w-lg border-2 border-accent rounded-lg hover:bg-accent bg-background">
                            <p className="p-3">{t("frydaytxt")}</p>
                        </div>
                            <div className="m-4 max-w-lg border-2 border-accent rounded-lg hover:bg-accent bg-background">
                            <p className="p-3">{t("saturdaytxt")}</p>
                        </div>
                        <div className="m-4 max-w-lg border-2 border-accent rounded-lg hover:bg-accent bg-background">
                            <p className="p-3">{t("sundaytxt")}</p>
                        </div>
                    </li>
                </ul>


            </div>
        </>
    );
}
