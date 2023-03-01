import React from 'react'
import {useTranslation} from 'react-i18next'

function Body() {
    const [t,i18n] = useTranslation("global")
    return (
        <>
            <p>{t("body.p")}</p>
            <p>{t("body.link")} <a href="https://github.com/oyham/Translation-i18next" target="_blank"><em>GitHub</em></a> {t("body.link2")}</p>
        </>
    )
}

export default Body