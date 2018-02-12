import adidas from '../images/adidas.gif'
import moto from '../images/moto.gif'
import mundo from '../images/mundo.gif'
import planoz from '../images/planoz.gif'
import sonar from '../images/sonar.gif'
import topologias from '../images/topologias.gif'
import uber from '../images/uber.gif'
import nike from '../images/nike.gif'
import coca from '../images/coca.gif'
import cuerpos from '../images/cuerpos.gif'
import redbull from '../images/redbull.gif'
import redbullp from '../images/redbullp.gif'
import warm from '../images/warm.gif'
import freaky from '../images/freaky.gif'
import samsung from '../images/samsung.jpg'


const gifs = (param) => {
  if (param === 'mundo') {
    return{
      img: mundo,
      left: "50px",
      top: "200px",
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
      right: "263px",
      top: "451px",
      rightR: "263px",
      topR: "251px",
      width: "250",
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
      left: "126px",
      top: "636px",
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
      right: "132px",
      top: "859px",
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
      left: "76px",
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
      right: "244px",
      top: "1200px",
      rightR: "171px",
      topR: "40px",
      width: "300",
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
      left: "221px",
      top: "1492px",
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
      right: "30px",
      top: "1854px",
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
      left: "175px",
      top: "2000px",
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
      right: "208px",
      top: "2161px",
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
      left: "202px",
      top: "2324px",
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
      right: "140px",
      top: "60px",
      leftR: "40px",
      topR: "40px",
      width: "500px",
      route: "redbullP",
      title: "Redbull Parapente",
      titleEn: "Redbull Paragliding",
      year: "2017",
      desc: "Acá va la descripción",
      descEN: "Here goes the description"
    }
  } else if (param === 'warm') {
    return{
      img: warm,
      right: "200px",
      top: "2527px",
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
      left: "114px",
      top: "2740px",
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
      right: "240px",
      top: "3005px",
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
