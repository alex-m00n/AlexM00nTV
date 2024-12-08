"use client"

import { useChangeLocale, useCurrentLocale } from "@/locales/client"

export const LocaleSelect = () => {
    const locale = useCurrentLocale()
    const changeLocale = useChangeLocale()
    return(
        <select
        value={locale}
        className="rounded-lg border-accent border-2 bg-background"
        onChange={(e)=> changeLocale(e.target.value as "fr" | "en")}>
            <option value="en">English</option>
            <option value="fr">Français</option>
        </select>
    )
}