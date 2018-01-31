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
import warm from '../images/warm.gif'
import freaky from '../images/freaky.gif'
import samsung from '../images/samsung.jpg'


const gifs = (param) => {
  if (param === 'mundo') {
    return{
      img: mundo,
      left: "100px",
      top: "50px",
      width: "250",
      route: "mundo",
      title: "Una observación al fin del mundo",
      year: "2017",
      desc: "Acá va la descripción"
    }
  } else if (param === 'planoz') {
    return{
      img: planoz,
      right: "30px",
      top: "120px",
      width: "250",
      route: "planoz",
      title: "Plano Z",
      year: "2017",
      desc: "Acá va la descripción"
    }
  } else if (param === 'topologias') {
    return{
      img: topologias,
      left: "0px",
      top: "350px",
      route: "topologias",
      title: "Topologías urbanas",
      year: "2017",
      desc: "Acá va la descripción"
    }
  } else if (param === 'moto') {
    return{
      img: moto,
      right: "50px",
      top: "540px",
      width: "250",
      route: "moto",
      title: "Moto",
      year: "2017",
      desc: "Acá va la descripción"
    }
  } else if (param === 'adidas') {
    return{
      img: adidas,
      left: "60px",
      top: "720px",
      route: "adidas",
      title: "Adidas",
      year: "2017",
      desc: "Acá va la descripción"
    }
  } else if (param === 'sonar') {
    return{
      img: sonar,
      right: "50px",
      top: "920px",
      width: "300",
      route: "sonar",
      title: "Sonar",
      year: "2017",
      desc: "Acá va la descripción"
    }
  } else if (param === 'uber') {
    return{
      img: uber,
      left: "9px",
      top: "1120px",
      route: "uber",
      title: "Uber",
      year: "2017",
      desc: "Acá va la descripción"
    }
  } else if (param === 'nike') {
    return{
      img: nike,
      right: "30px",
      top: "1450px",
      route: "nike",
      title: "Nike",
      year: "2017",
      desc: "Acá va la descripción"
    }
  } else if (param === 'coca') {
    return{
      img: coca,
      left: "70px",
      top: "1550px",
      width: "300",
      route: "coca",
      title: "Coca",
      year: "2017",
      desc: "Acá va la descripción"
    }
  } else if (param === 'cuerpos') {
    return{
      img: cuerpos,
      right: "60px",
      top: "1720px",
      route: "cuerpos",
      title: "Cuerpos de agua",
      year: "2017",
      desc: "Acá va la descripción"
    }
  } else if (param === 'redbull') {
    return{
      img: redbull,
      left: "100px",
      top: "1910px",
      route: "redbull",
      title: "Redbull",
      year: "2017",
      desc: "Acá va la descripción"
    }
  } else if (param === 'warm') {
    return{
      img: warm,
      right: "90px",
      top: "2090px",
      route: "warm",
      title: "Sonar warm up",
      year: "2017",
      desc: "Acá va la descripción"
    }
  } else if (param === 'samsung') {
    return{
      img: samsung,
      left: "30px",
      top: "2300px",
      width: "450",
      route: "samsung",
      title: "Samsung",
      year: "2017",
      desc: "Acá va la descripción"
    }
  }  else if (param === 'freaky') {
    return{
      img: freaky,
      right: "50px",
      top: "2590px",
      route: "freaky",
      title: "Freaky",
      year: "2017",
      desc: "Acá va la descripción"
    }
  }
}

export default gifs
