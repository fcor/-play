import adidas from '../images/gifs/adidas.mp4'
import moto from '../images/gifs/moto.mp4'
import mundo from '../images/gifs/mundo.mp4'
import planoz from '../images/gifs/moto.mp4'
import sonar from '../images/gifs/moto.mp4'
import topologias from '../images/gifs/topologias.mp4'
import uber from '../images/gifs/moto.mp4'
import nike from '../images/gifs/nike.mp4'
import coca from '../images/gifs/moto.mp4'
import cuerpos from '../images/gifs/cuerpos.mp4'
import redbull from '../images/gifs/redbull.mp4'
import redbullp from '../images/gifs/moto.mp4'
import warm from '../images/gifs/warm.mp4'
import freaky from '../images/gifs/freaky.mp4'
import samsung from '../images/gifs/moto.mp4'

const gifs = (param) => {
  if (param === 'mundo') {
    return{
      img: mundo,
      left: "63px",
      top: "100px",
      leftR: "200px",
      topR: "40px",
      width: "250",
      route: "mundo",
      title: "Una observación al fin del mundo",
      titleEn: "An Observation of the End of the World",
      year: "2017",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  } else if (param === 'planoz') {
    return{
      img: planoz,
      right: "563px",
      top: "369px",
      rightR: "263px",
      topR: "251px",
      // width: "250",
      route: "planoz",
      title: "Moto Z | Plano Z",
      titleEn: "Moto Z | Plain Z",
      year: "2016",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  } else if (param === 'topologias') {
    return{
      img: topologias,
      left: "0px",
      top: "450px",
      leftR: "171px",
      topR: "40px",
      route: "topologias",
      title: "Topologías urbanas",
      titleEn: "Urban topologies",
      year: "2017",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  } else if (param === 'moto') {
    return{
      img: moto,
      right: "50px",
      top: "119px",
      rightR: "200px",
      topR: "330px",
      width: "250",
      route: "moto",
      title: "Moto Z2 Play | Circuito de Arte",
      titleEn: "Moto Z2 Play | Art Circuit",
      year: "2017",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  } else if (param === 'adidas') {
    return{
      img: adidas,
      right: "0px",
      top: "1045px",
      leftR: "180px",
      topR: "380px",
      route: "adidas",
      title: "Adidas Nemeziz",
      titleEn: "Adidas Nemeziz",
      year: "2017",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  } else if (param === 'sonar') {
    return{
      img: sonar,
      right: "60px",
      top: "425px",
      rightR: "171px",
      topR: "40px",
      // width: "300",
      route: "sonar",
      title: "Sonar AV Experience",
      titleEn: "Sonar AV Experience",
      year: "2017",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  } else if (param === 'uber') {
    return{
      img: uber,
      left: "75px",
      top: "1074px",
      rightR: "120px",
      topR: "581px",
      route: "uber",
      title: "UberPool",
      titleEn: "UberPool",
      year: "2015",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  } else if (param === 'nike') {
    return{
      img: nike,
      left: "63px",
      top: "750px",
      rightR: "171px",
      topR: "380px",
      route: "nike",
      title: "Nike Lanzamiento Air Force",
      titleEn: "Nike Air Force Launch",
      year: "2017",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  } else if (param === 'coca') {
    return{
      img: coca,
      left: "580px",
      top: "950px",
      rightR: "230px",
      topR: "40px",
      width: "300",
      route: "coca",
      title: "De la Coca a la Pimienta",
      titleEn: "De la Coca a la Pimienta",
      year: "2017",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  } else if (param === 'cuerpos') {
    return{
      img: cuerpos,
      right: "0px",
      top: "681px",
      leftR: "208px",
      topR: "431px",
      route: "cuerpos",
      title: "Cuerpos de Agua",
      titleEn: "Water Bodies",
      year: "2015",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  } else if (param === 'redbull') {
    return{
      img: redbull,
      left: "533px",
      top: "770px",
      leftR: "136px",
      topR: "833px",
      route: "redbull",
      title: "Deportistas RedBull",
      titleEn: "RedBull Athletes",
      year: "2017",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  } else if (param === 'redbullP') {
    return{
      img: redbullp,
      left: "458px",
      top: "60px",
      leftR: "40px",
      topR: "40px",
      // width: "500px",
      route: "redbullP",
      title: "Redbull Parapenta",
      titleEn: "Redbull Paragliding",
      year: "2017",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  } else if (param === 'warm') {
    return{
      img: warm,
      right: "100px",
      top: "1450px",
      leftR: "297px",
      topR: "355px",
      route: "warm",
      title: "Sonar Warm Up",
      titleEn: "Sonar Warm Up",
      year: "2015",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  } else if (param === 'samsung') {
    return{
      img: samsung,
      left: "503px",
      top: "1239px",
      leftR: "114px",
      topR: "1170px",
      width: "450",
      route: "samsung",
      title: "El Regalo del Mar | Samsung",
      titleEn: "The Gift of the Sea | Samsung",
      year: "2015",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  }  else if (param === 'freaky') {
    return{
      img: freaky,
      left: "130px",
      top: "1405px",
      rightR: "284px",
      topR: "942px",
      route: "freaky",
      title: "El Freaky ft. Mr Lexx & Cybertronics",
      titleEn: "El Freaky ft. Mr Lexx & Cybertronics",
      year: "2015",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  }
}

export default gifs
