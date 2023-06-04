import detailsWeatherApp1 from '../assets/projectsImg/detailsWeatherApp1.png'
import detailsWeatherApp2 from '../assets/projectsImg/detailsWeatherApp2.png'
import measureWeatherApp from '../assets/projectsImg/measureWeatherApp.png'

import detailsZuccherosCakes from '../assets/projectsImg/detailsZuccherosCakes.png'
import detailsZuccherosCakes2 from '../assets/projectsImg/detailsZuccherosCakes2.png'
import measureZuccherosCakes from '../assets/projectsImg/measureZuccherosCakes.png'

import detailsBarraLibre45 from '../assets/projectsImg/detailsLaBarraLibre45.png'
import detailsBarraLibre452 from '../assets/projectsImg/detailsLaBarraLibre452.png'
import measureBarraLibre45 from '../assets/projectsImg/measureBarraLibre45.png'

import detailsLaCarteleraEs from '../assets/projectsImg/detailsLaCarteleraEs.png'
import detailsLaCarteleraEs2 from '../assets/projectsImg/detailsLaCarteleraEs2.png'
import measureLaCarteleraEs from '../assets/projectsImg/measureLaCarteleraEs.png'

import detailsTikTac1 from "../assets/projectsImg/detailsTikTac1.png"
import detailsTikTac2 from "../assets/projectsImg/detailsTikTac2.png"
import measureTikTac from "../assets/projectsImg/measureTikTac.png"

import detailsEuroMecanica from "../assets/projectsImg/detailsEuroMecanica.png"
import detailsEuroMecanica2 from "../assets/projectsImg/detailsEuromecanica2.png"
import measureEuroMecanica from "../assets/projectsImg/measureEuroMecanica.png"

import detailsControlGastos from "../assets/projectsImg/detailsControlGastos.png"
import detailsControlGastos2 from "../assets/projectsImg/detailsControlGastos2.png"
import measureControlGastos from "../assets/projectsImg/measureControlGastos.png"

import detailsCryptoCalculator from "../assets/projectsImg/detailsCryptoCalculator.png"
import detailsCryptoCalculator2 from "../assets/projectsImg/detailsCryptoCalculator2.png"
import measureCryptoCalculator from "../assets/projectsImg/measureCryptoCalculator.png"

import detailsAutoSeguro from "../assets/projectsImg/detailsAutoSeguro.png"
import detailsAutoSeguro2 from "../assets/projectsImg/detailsAutoSeguro2.png"
// import measureCryptoCalculator from "../assets/projectsImg/measureCryptoCalculator.png"





const details = [
{
    id:1,
    name:'ZuccherosCakes',
    spanish1:'Esta página fue desarrollada para la empresa de reposteria Zuccheros Cakes ubicada en Santiago de Chile, es una página informativa donde la empresa pretende mantener actualizada a su clientela publicando sus últimas creaciones y novedades, al igual que sus promociones y alguna otra información que motive el consumo de sus productos, además de servir de canal directo de comunicación con todos aquellos que deseen contactarles.',
    english1:'This page was developed for the pastry company Zuccheros Cakes located in Santiago de Chile, is an informative page where the company aims to keep its customers updated by publishing their latest creations and news, as well as their promotions and other information that motivates the consumption of their products, in addition to serving as a direct channel of communication with all those who wish to contact them.',
    spanish2:'En la maquetación de esta página se utilizó HTML, CSS Y BOOTSTRAP y las fotos de los productos utilizadas fueron seleccionadas y suministradas por la misma empresa al igual que comentarios y listado de clientes.',
    english2:'In the layout of this page HTML, CSS and BOOTSTRAP were used and the photos of the products used were selected and supplied by the same company as well as comments and customer list.',
    image1: detailsZuccherosCakes,
    image2: detailsZuccherosCakes2,
    image3: measureZuccherosCakes,
    lighthouse: 'https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fweather-1-app.netlify.app%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext',
    web:'https://zuccheroscakes-cl.netlify.app/',
    github:'https://github.com/Luis1Gonzalez/zucherosCakes'
},

{
    id: 2,
    name: 'La Cartelera.es',
    spanish1:'WeatherApp es una aplicación responsive que muestra el estado del tiempo en real time, puede ser en local, geolocalizando el dispositivo bajo previa autorización del usuario o mostrando el tiempo de la ciudad ingresada por el usuario en un formulario que tiene dos inputs, uno para ingresar el nombre de la ciudad y el segundo (opcional) para introducir el país debido a que el nombre de la ciudad pudiese estar repetido en alguna otra parte del mundo.',
    english1:'WeatherApp is a responsive application that shows the weather in real time, it can be local, geolocating the device under user authorization or showing the weather of the city entered by the user in a form that has two inputs, one to enter the name of the city and the second (optional) to enter the country because the name of the city could be repeated in some other part of the world.',
    spanish2:'Para el desarrollo de esta App se obtuvieron los datos climatológicos haciendo uso de la API de OPENWEATHER quienes proveen servicios meteorológicos muy amplio tanto en real time como predicciones e históricas. Para el desarrollo de esta aplicación utilicé de HTML, CSS; JavaScript y REACT JS.',
    english2:'For the development of this App the climatological data was obtained using the OPENWEATHER API who provide very comprehensive weather services both in real time and predictions and historical. For the development of this application I used HTML, CSS; JavaScript and REACT JS.',
    image1: detailsWeatherApp1,
    image2: detailsWeatherApp2,
    image3: measureWeatherApp,
    lighthouse: 'https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fweather-1-app.netlify.app%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext',
    web: 'https://weather-1-app.netlify.app/',
    github: 'https://github.com/Luis1Gonzalez/weather-app',
},

{
    id: 3,
    name: 'Barra Libre 45',
    spanish1:'Barra Libre 45 es una App para la preparación de cocteles donde se muestra un listado de 100 bebidas alcohólicas o no alcohólicas, inicialmente ordenadas en cards con una paginación de diez (10) bebidas por página mostrando la imagen de los cocteles y su nombre, en esta página inicial también se encuentra un buscador para filtrar las bebidas por su nombre. Al usuario hace click sobre alguna coctel la aplicación le dará en el detalle de esta bebida, mostrándole la imagen de la bebida, su tipo, su categoría, sus ingredientes y las instrucciones para su preparación.',
    english1:'Barra Libre 45 is an App for the preparation of cocktails where a list of 100 alcoholic or non-alcoholic drinks is shown, initially ordered in cards with a pagination of ten (10) drinks per page showing the image of the cocktails and their name, in this initial page there is also a search engine to filter the drinks by name. When the user clicks on a cocktail, the application will show the details of this drink, showing the image of the drink, its type, its category, its ingredients and the instructions for its preparation.',
    spanish2:'Barra Libre 45 obtiene sus datos de la API de THECOCKTAILDB que es una Api gratuita que provee informacion de cocteles y varias formas de hacer peticiones como por ejemplo por nombre, tipo, ingredientes, entre otros y está desarrollada haciendo uso de HTML, CSS, JavaScript, REACT JS, BOOTSTRAP Y SASS.',
    english2:'Barra Libre 45 gets its data from THECOCKTAILDB API which is a free Api that provides cocktail information and several ways to make requests such as by name, type, ingredients, among others and is developed using HTML, CSS, JavaScript, REACT JS, BOOTSTRAP and SASS.',
    image1: detailsBarraLibre45,
    image2: detailsBarraLibre452,
    image3: measureBarraLibre45,
    lighthouse: 'https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fbarra-libre-45.netlify.app%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext',
    web: 'https://barra-libre-45.netlify.app/',
    github: 'https://github.com/Luis1Gonzalez/barra-libre-45',
},

{
    id: 4,
    name: 'La Cartelera.es',
    spanish1:'LaCarteleraEs Es una App para cinéfilos, donde se puede ver la cartelera actual y los próximos estrenos, igualmente se puede buscar películas en específico y mirar la informacion de esta tal como su año de publicación, presupuesto, recaudación, director, casas productoras, duración, tráilers y una sinopsis todo esto en castellano e inglés. Otra funcionalidad de la aplicación es poder acceder a los horarios de las proyecciones en los cines en un radio de 30km.',
    english1:'For this App, updated data is obtained from the API of The Movie Data Base (TMDB) that provides the data related to each movie, both in theaters and premieres, and from the API of International Show Times (paid API) the movie listings of the theaters near the location of the device used for the search are obtained. On the other hand, it should be noted that this App has multi-theme and multi-language. For the development of this App we used HTML, CSS, JavaScript, REACT JS and BOOTSTRAP.',
    spanish2:'Para esta App se obtienen los datos actualizados de la API de The Movie Data Base (TMDB) que provee los datos relativos a cada película tanto en cartelera como los estrenos y de la API de International Show Times (API de pago) se obtiene la cartelera de los cines cercanos a la ubicación del dispositivo utilizado para la búsqueda. Por otra parte cabe destacar que esta App cuenta con multi tema y multi lenguaje. Para el desarrollo de esta App se utilizó HTML, CSS, JavaScript, REACT JS y BOOTSTRAP.',
    english2:'For this App, updated data is obtained from the API of The Movie Data Base (TMDB) that provides the data related to each movie, both in theaters and premieres, and from the API of International Show Times (paid API) the movie listings of the theaters near the location of the device used for the search are obtained. On the other hand, it should be noted that this App has multi-theme and multi-language. For the development of this App we used HTML, CSS, JavaScript, REACT JS and BOOTSTRAP.',
    image1: detailsLaCarteleraEs,
    image2: detailsLaCarteleraEs2,
    image3: measureLaCarteleraEs,
    lighthouse: 'https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fla-cartelera-es.netlify.app%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext',
    web: 'https://la-cartelera-es.netlify.app/',
    github: 'https://github.com/Luis1Gonzalez/laCarteleraEs',
},

{
    id: 5,
    name: 'Tik - Tac',
    spanish1:'TIK-TAC es una app que simula un juego de mesa, donde los participantes a través de una combinación aleatoria de una dupla de letras y una posición (Inicio, Bom y Fin) deben indicar palabras haciendo uso de estas combinaciones hasta que el tiempo (acompañado por un sonido de tik-tak) llegue a su fin, siendo esto indicado por la app por un sonido y cambio de background.',
    english1:'TIK-TAC is an app that simulates a board game, where participants through a random combination of a pair of letters and a position (Start, Bom and End) must indicate words using these combinations until the time (accompanied by a tik-tak sound) comes to an end, being this indicated by the app by a sound and change of background.',
    spanish2:'En la construcción de esta App jugué mucho con elementos random, primero para seleccionar la posición de las letras a conjugar, en segundo lugar para determinar la combinación de letras y finalmente para establecer el tiempo de juego a través de setInterval. Por otra parte, en esta aplicación use custom hooks e integre sonidos obtenido de la base de datos de efectos de sonidos de la BBC.',
    english2:'In the construction of this App I played a lot with random elements, first to select the position of the letters to conjugate, secondly to determine the combination of letters and finally to set the playing time through setInterval. Moreover, in this application I used custom hooks and integrated sounds obtained from the BBC sound effects database.',
    image1: detailsTikTac1,
    image2: detailsTikTac2,
    image3: measureTikTac,
    lighthouse: 'https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Ftik-tac.netlify.app%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext',
    web: 'https://tik-tac.netlify.app/',
    github: 'https://github.com/Luis1Gonzalez/tik-tac',
},

{
    id: 6,
    name: 'Talleres EuroMecánica',
    spanish1:'TIK-TAC es una app que simula un juego de mesa, donde los participantes a través de una combinación aleatoria de una dupla de letras y una posición (Inicio, Bom y Fin) deben indicar palabras haciendo uso de estas combinaciones hasta que el tiempo (acompañado por un sonido de tik-tak) llegue a su fin, siendo esto indicado por la app por un sonido y cambio de background.',
    english1:'TIK-TAC is an app that simulates a board game, where participants through a random combination of a pair of letters and a position (Start, Bom and End) must indicate words using these combinations until the time (accompanied by a tik-tak sound) comes to an end, being this indicated by the app by a sound and change of background.',
    spanish2:'En la construcción de esta App jugué mucho con elementos random, primero para seleccionar la posición de las letras a conjugar, en segundo lugar para determinar la combinación de letras y finalmente para establecer el tiempo de juego a través de setInterval. Por otra parte, en esta aplicación use custom hooks e integre sonidos obtenido de la base de datos de efectos de sonidos de la BBC.',
    english2:'In the construction of this App I played a lot with random elements, first to select the position of the letters to conjugate, secondly to determine the combination of letters and finally to set the playing time through setInterval. Moreover, in this application I used custom hooks and integrated sounds obtained from the BBC sound effects database.',
    image1: detailsEuroMecanica,
    image2: detailsEuroMecanica2,
    image3: measureEuroMecanica,
    lighthouse: 'https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Ftalleres-euromecanica.netlify.app%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext',
    web: 'https://talleres-euromecanica.netlify.app/',
    github: 'https://github.com/Luis1Gonzalez/euroMecanica',
},

{
    id: 7,
    name: 'Portfolio - 2022',
    spanish1:'',
    english1:'',
    spanish2:'',
    english2:'',
    image1: '',
    image2: '',
    image3: '',
    lighthouse: 'https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fportafolio-luis1gonzalez.netlify.app%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext',
    web: 'https://portafolio-luis1gonzalez.netlify.app/',
    github: 'https://github.com/Luis1Gonzalez/portafolio-luis1gonzalez',
},

{
    id: 8,
    name: 'Control de Gastos',
    spanish1:'La Aplicación Control de Gastos es una App desarrollada para llevar llevar el control de los gastos a partir de un presupuesto. El usuario deberá ingresar inicialmente un presupuesto, seguidamente la App dará acceso a la sección donde el usuario podrá definir los gastos que planifico previamente o que se van presentando, estos datos quedaran guardados y se podrá observar a través de una barra de progreso el saldo gastado y el disponible, de igual forma el usuario podrá filtrar los gastos en categorías.',
    english1:'The Control de Gastos Application is an App developed to keep track of expenses based on a budget. The user must initially enter a budget, then the App will give access to the section where the user can define the expenses previously planned or that are presented, these data will be saved and you can see through a progress bar the balance spent and available, likewise the user can filter expenses in categories.',
    spanish2:'Control de Gastos está desarrollada con la librería React JS y se le dio estilos con el framework TailwindCss, se hizo uso de localStorage para guardar la información de manera temporal, además uso react-circular-progressbar para ir mostrando el porcentaje de gastos que se llevaban según el presupuesto definido inicialmente.',
    english2:'Expense Control is developed with the React JS library and was styled with the TailwindCss framework, localStorage was used to save the information temporarily, and react-circular-progressbar was used to show the percentage of expenses that were carried according to the initially defined budget.',
    image1: detailsControlGastos,
    image2: detailsControlGastos2,
    image3: measureControlGastos,
    lighthouse: 'https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fcontrol-gastos-presupuesto-mes.netlify.app%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext',
    web: 'https://control-gastos-presupuesto-mes.netlify.app',
    github: 'https://github.com/Luis1Gonzalez/control-gastos',
},

{
    id: 9,
    name: 'Auto - Seguro',
    spanish1:'',
    english1:'',
    spanish2:'',
    english2:'',
    image1: detailsAutoSeguro,
    image2: detailsAutoSeguro2,
    image3: '',
    lighthouse: 'https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fauto-seguro.netlify.app%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext',
    web: 'https://auto-seguro.netlify.app/',
    github: 'https://github.com/Luis1Gonzalez/auto-seguro',
},

{
    id: 10,
    name: 'CryptoCalculator',
    spanish1:'CryptoCalculator es una aplicación donde los usuarios podrán obtener en tiempo real la cotización de una de las 20 principales criptomonedas del mercado para el momento de la consulta, tan solo seleccionando la moneda fiat (moneda de curso legal de determinado país) y la criptomoneda de la cual desee tener la información.',
    english1:'CryptoCalculator is an application where users can obtain in real time the quotation of one of the 20 main cryptocurrencies in the market at the time of the query, just by selecting the fiat currency (legal tender in a given country) and the cryptocurrency for which you want to have the information.',
    spanish2:'Esta App está construida con la librería React JS y haciendo uso del framework TailwindCss para darle estilos, por otra parte se recurrió a la página CryptoCompare (https://www.cryptocompare.com/) para obtener los datos actualizados de las cotizaciones para cada consulta que se haga a través de esta aplicación.',
    english2:'This App is built with the React JS library and using the TailwindCss framework to give it styles, on the other hand, the CryptoCompare page (https://www.cryptocompare.com/) was used to obtain the updated data of the quotes for each query made through this application.',
    image1: detailsCryptoCalculator,
    image2: detailsCryptoCalculator2,
    image3: measureCryptoCalculator,
    lighthouse: 'https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fmy-crypto-calculator.netlify.app%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext',
    web: 'https://my-crypto-calculator.netlify.app',
    github: 'https://github.com/Luis1Gonzalez/crypto-calculator',
},

{
    id: 11,
    name: 'My Cities',
    spanish1:'',
    english1:'',
    spanish2:'',
    english2:'',
    image1: '',
    image2: '',
    image3: '',
    lighthouse: '',
    web: 'https://mycities.vercel.app/',
    github: 'https://github.com/Luis1Gonzalez/MyCitiesRemix',
},

{
    id: 12,
    name: 'JZ Diseños & Muebles',
    spanish1:'',
    english1:'',
    spanish2:'',
    english2:'',
    image1: '',
    image2: '',
    image3: '',
    lighthouse: 'https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fjz-disenos-y-muebles.netlify.app%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext',
    web: 'https://jz-disenos-y-muebles.netlify.app/',
    github: 'https://github.com/Luis1Gonzalez/jz-diseno',
},

{
    id: 13,
    name: 'https://newschanel.netlify.app/',
    spanish1:'',
    english1:'',
    spanish2:'',
    english2:'',
    image1: '',
    image2: '',
    image3: '',
    lighthouse: 'https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fnewschanel.netlify.app%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext',
    web: 'https://newschanel.netlify.app/',
    github: 'https://github.com/Luis1Gonzalez/canal-de-noticias',
},

{
    id: 14,
    name: 'Menú de Muestra',
    spanish1:'',
    english1:'',
    spanish2:'',
    english2:'',
    image1: '',
    image2: '',
    image3: '',
    lighthouse: 'https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fmenu-muestra.netlify.app%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext',
    web: 'https://menu-muestra.netlify.app/',
    github: 'https://github.com/Luis1Gonzalez/menu-muestra',
},

{
    id: 15,
    name: 'Barra Libre 45 2.0',
    spanish1:'',
    english1:'',
    spanish2:'',
    english2:'',
    image1: '',
    image2: '',
    image3: '',
    lighthouse: 'https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fbarra-libre-45-2.netlify.app%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext',
    web: 'https://barra-libre-45-2.netlify.app/',
    github: 'https://github.com/Luis1Gonzalez/barra-libre-45-2.0',
},

{
    id: 16,
    name: 'KioskoApp',
    spanish1:'',
    english1:'',
    spanish2:'',
    english2:'',
    image1: '',
    image2: '',
    image3: '',
    lighthouse: 'https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fkioskoappdeployment-production.up.railway.app%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext',
    web: 'https://kioskoappdeployment-production.up.railway.app/',
    github: 'https://github.com/Luis1Gonzalez/portafolio-luis1gonzalez.git',
},

]
export { details }