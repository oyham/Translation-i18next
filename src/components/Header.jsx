import React, { useTransition } from 'react'
import {useTranslation} from 'react-i18next'

function Header() {
    const [t,i18n] = useTranslation("global")
  return (
    <div>
        <h1>{t("header.hello-world")}</h1>
        <button onClick={()=> i18n.changeLanguage("es")}>ES</button>
        <button onClick={()=> i18n.changeLanguage("en")}>EN</button>
    </div>
  )
}

export default Header