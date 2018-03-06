import adidas from '../images/gifs/adidas.mp4'
import moto from '../images/gifs/moto.mp4'
import mundo from '../images/gifs/mundo.mp4'
import planoz from '../images/gifs/planoz.mp4'
import sonar from '../images/gifs/sonar.mp4'
import topologias from '../images/gifs/topologias.mp4'
import uber from '../images/gifs/uber.mp4'
import nike from '../images/gifs/nike.mp4'
import coca from '../images/gifs/coca.mp4'
import cuerpos from '../images/gifs/cuerpos.mp4'
import redbull from '../images/gifs/redbull.mp4'
import redbullp from '../images/gifs/redbullP.mp4'
import warm from '../images/gifs/warm.mp4'
import freaky from '../images/gifs/freaky.mp4'
import samsung from '../images/gifs/samsung.mp4'

const gifs = (param) => {
  if (param === 'mundo') {
    return{
      back: 'white',
      img: mundo,
      left: "63px",
      top: "80px",
      leftR: "70px",
      topR: "120px",
      // width: "200",
      route: "mundo",
      title: "Una Observación al Fin del Mundo",
      titleEn: "An Observation of the End of the World",
      year: "2017",
      desc: "Fulldome Experience",
      descEN: "Fulldome Experience"
    }
  } else if (param === 'planoz') {
    return{
      back: 'black',
      img: planoz,
      right: "563px",
      top: "330px",
      rightR: "214px",
      topR: "521px",
      width: "250",
      route: "planoz",
      title: "Moto Z \n Plano Z",
      titleEn: "Moto Z \n Plain Z",
      year: "2016",
      desc: "Video 360º | Tour VIrtual",
      descEN: "360º Video | Virtual Tour"
    }
  } else if (param === 'topologias') {
    return{
      back: 'white',
      img: topologias,
      left: "0px",
      top: "430px",
      rightR: "470px",
      topR: "40px",
      route: "topologias",
      title: `Topologías
              Urbanas`,
      titleEn: `Urban
                Topologies`,
      year: "2017",
      desc: "Video Instalación | VR",
      descEN: "Video Installation | VR"
    }
  } else if (param === 'moto') {
    return{
      back: 'black',
      img: moto,
      right: "63px",
      top: "119px",
      leftR: "70px",
      topR: "120px",
      // width: "200",
      route: "moto",
      title: "Moto Z2 Play",
      titleEn: "Moto Z2 Play",
      year: "2017",
      desc: "Video Instalación",
      descEN: "Video Installation"
    }
  } else if (param === 'adidas') {
    return{
      back: 'black',
      img: adidas,
      right: "90px",
      top: "1032px",
      width: "250",
      rightR: "70px",
      topR: "120px",
      route: "adidas",
      title: "Adidas \n Nemeziz",
      titleEn: "Adidas \n Nemeziz",
      year: "2017",
      desc: "Motion Graphics | Diseño",
      descEN: "Motion Graphics | Design"
    }
  } else if (param === 'sonar') {
    return{
      back: 'black',
      img: sonar,
      right: "60px",
      top: "425px",
      rightR: "551px",
      topR: "330px",
      width: "300",
      route: "sonar",
      title: "Sonar AV \n Experience",
      titleEn: "Sonar \n AV Experience",
      year: "2017",
      desc: "Video Instalación",
      descEN: "Video Installation"
    }
  } else if (param === 'uber') {
    return{
      back: 'black',
      img: uber,
      left: "10px",
      top: "1060px",
      width: "400px",
      rightR: "520px",
      topR: "274px",
      route: "uber",
      title: "UberPool",
      titleEn: "UberPool",
      year: "2015",
      desc: "Video 360º",
      descEN: "360º Video"
    }
  } else if (param === 'nike') {
    return{
      back: 'white',
      img: nike,
      left: "20px",
      top: "780px",
      width: "350px",
      rightR: "551px",
      topR: "330px",
      route: "nike",
      title: "Nike Lanzamiento \n Air Force",
      titleEn: "Nike Air Force Launch",
      year: "2017",
      desc: "Mapping | Motion Graphics",
      descEN: "Mapping | Motion Graphics"
    }
  } else if (param === 'coca') {
    return{
      back: 'white',
      img: coca,
      left: "580px",
      top: "950px",
      rightR: "551px",
      topR: "40px",
      width: "320",
      route: "coca",
      title: "De la Coca \n a la Pimienta",
      titleEn: "De la Coca \n a la Pimienta",
      year: "2017",
      desc: "Diseño de títulos | Motion Graphics",
      descEN: "Main Title Design | Motion Graphics"
    }
  } else if (param === 'cuerpos') {
    return{
      back: 'white',
      img: cuerpos,
      right: "80px",
      top: "681px",
      leftR: "100px",
      topR: "146px",
      route: "cuerpos",
      title: "Cuerpos \n de Agua",
      titleEn: "Water Bodies",
      year: "2015",
      desc: "Cortometraje 360º",
      descEN: "360º Short Film"
    }
  } else if (param === 'redbull') {
    return{
      back: 'black',
      img: redbull,
      left: "452px",
      top: "733px",
      width: "500px",
      leftR: "136px",
      topR: "582px",
      route: "redbull",
      title: "Deportistas Red Bull",
      titleEn: "RedBull Athletes",
      year: "2017",
      desc: "Video 360º",
      descEN: "360º Video"
    }
  } else if (param === 'redbullP') {
    return{
      back: 'black',
      img: redbullp,
      left: "452px",
      top: "60px",
      leftR: "430px",
      topR: "40px",
      width: "500px",
      route: "redbullP",
      title: "Redbull Parapenta",
      titleEn: "Redbull Paragliding",
      year: "2017",
      desc: "Video 360º",
      descEN: "360º Video"
    }
  } else if (param === 'warm') {
    return{
      back: 'white',
      img: warm,
      right: "100px",
      top: "1380px",
      rightR: "70px",
      topR: "140px",
      route: "warm",
      title: "Sonar \n Warm Up",
      titleEn: "Sonar \n Warm Up",
      year: "2015",
      desc: "Mapping | Instalación",
      descEN: "Mapping | Installation"
    }
  } else if (param === 'samsung') {
    return{
      back: 'black',
      img: samsung,
      left: "557px",
      top: "1260px",
      width: "380px",
      leftR: "184px",
      topR: "803px",
      route: "samsung",
      title: "El Regalo del Mar \n Samsung",
      titleEn: "The Gift of the Sea \n Samsung",
      year: "2015",
      desc: "Video 360º",
      descEN: "360º Video"
    }
  }  else if (param === 'freaky') {
    return{
      back: 'black',
      img: freaky,
      left: "130px",
      top: "1405px",
      width: "250px",
      rightR: "436px",
      topR: "876px",
      route: "freaky",
      title: "El Freaky ft. Mr Lexx & Cybertronics",
      titleEn: "El Freaky ft. Mr Lexx & Cybertronics",
      year: "2015",
      desc: "Video 360º",
      descEN: "360º Video"
    }
  }
}

export default gifs
