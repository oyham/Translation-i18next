# Traducción con i18next

- Inicializamos intalando i18next y react-i18next
- Creamos la carpeta translations > en y es
- Dentro de cada una creamos un archivo global.json

Este json poseera las traducciones. Podemos divir las traducciones por componentes, por elementos o global.
```json
//ES
{
    "header":{
        "Hello-world": "Hola Mundo"
    }
}
//EN
{
    "header":{
        "Hello-world": "Hello World"
    }
}
```
Luego debemos de dirigirnos hacia el archivo main donde se es llamada nuestra aplicación y ahi importar: 
- {I18nextProvider} de react-i18next
- i18next de i18next

El Provider lo necesitamos para envolver el componente ``<App >``. El provider I18nextProvider poseera un atributo que llamaremos ``i18n={i18next}``. Tambien debemos de inicializar i18next.
```js
i18next.init({
  interpolation: { escapeValue: false }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
```
Crearemos la carpeta components y luego nuestro Header.jsx que retornara un Hola Mundo y lo llamamos en App.
Ahora debemos de importar los dos ficheros json que creamos anteriormente en nuestro Index.
```js
import global_es from "./translations/es/global.json"
import global_en from "./translations/en/global.json"
```
Debemos de pasarle estos ficheros a la inicialización que hicimos anteriormente, y especificar con que idíoma inicializará nuestra aplicación.
```js
i18next.init({
  interpolation: { escapeValue: false },
  lng:"es", //Inicialización en Español.
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  },
})
```
Ahora para hacer uso de las traducciones debemos de hacer un import del hook { useTranslation } from 'react-i18next' dónde querramos utilizar dicha traducción. En este caso, en Header.jsx.
 Lo inicializamos arriba del return cómo una destructuración del ``useTranslation``.
 `const [t,i18n] = useTranslation()`: éste arrayDestructuring nos devolverá _**t**_ que será el texto traducído y el _**i18n**_ para generar botónes que cámbien el lenguaje de nuestra App.

### Importante:
Debemos de decirle a nuestro hook de dónde debe de traer las traducciones. En este caso sólo tenemos 1 fichero que es `"global.json"`, aúnque sí... poseemos dos distíntos, uno en *en* y otro en *es*, pero sigamos... 
¿De dónde queremos sacar las traducciónes? De `"global"` tal cuál... `const [t,i18n] = useTranslation("global")`, sin la extención, i18next se encarga sólo.

Sacaremos nuestro Hola Mundo y en cambio colocaremos el _**t**_ cómo función y pasarle la cláve que queremos mostrar: `header.hello-world`.
Para añadír el botón de cambio de idíoma crearemos dos buttons. Cáda uno poseera el evento *onClick* y arrojará una función flecha llamando a *i18n.changeLenguage()* e indicamos entre los paréntesis el idíoma a cambiar.
```js
    <div>
        <h1>{t("header.hello-world")}</h1>
        <button onClick={()=> i18n.changeLanguage("es")}>ES</button>
        <button onClick={()=> i18n.changeLanguage("en")}>EN</button>
    </div>
```
---
