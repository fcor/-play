import mil from '../images/logos/1500.png'
import adidas from '../images/logos/Adidas.png'
import artec from '../images/logos/artec.png'
import baum from '../images/logos/baum.png'
import bud from '../images/logos/bud.png'
import cda from '../images/logos/cda.png'
import crepes from '../images/logos/crepes.png'
import dat from '../images/logos/dat.png'
import idartes from '../images/logos/idartes.png'
import immer from '../images/logos/immer.png'
import indie from '../images/logos/indie.png'
import lapost from '../images/logos/lapost.png'
import milagros from '../images/logos/milagros.png'
import moto from '../images/logos/moto.png'
import nike from '../images/logos/nike.png'
import planoz from '../images/logos/planoz.png'
import rayuela from '../images/logos/rayuela.png'
import rb from '../images/logos/rb.png'
import s2015 from '../images/logos/s2015.png'
import s2017 from '../images/logos/s2017.png'
import samsung from '../images/logos/samsung.png'
import uber from '../images/logos/uber.png'
import vice from '../images/logos/vice.png'
import vs from '../images/logos/vs.png'
import coca1 from '../images/coca/entrada.png'
import coca2 from '../images/coca/1.gif'
import coca3 from '../images/coca/2.gif'
import mundo1 from '../images/mundo/Domo1.gif'
import mundo2 from '../images/mundo/Domo2.gif'
import mundo3 from '../images/mundo/Domo3.gif'
import mundo4 from '../images/mundo/creating_life.gif'
import mundo5 from '../images/mundo/creating_life2.gif'
import mundo6 from '../images/mundo/DomoGirando.gif'
import mundo7 from '../images/mundo/planetario.jpg'
import mundo8 from '../images/mundo/gif_bogota.gif'
import mundo9 from '../images/mundo/gif_brasil.gif'
import adidas1 from '../images/adidas/entrada.png'
import adidas2 from '../images/adidas/adidas_interna1.gif'
import adidas3 from '../images/adidas/adidas_interna2.gif'
import adidas4 from '../images/adidas/adidas_interna3.gif'

const getProjectDetails = (param) => {
  if (param === 'mundo') {
    return {
      prev: 'samsung',
      next: 'coca',
      titleEn: 'An Observation of the End of the World',
      titleEs: 'Una Observación al Fin del Mundo',
      subtitle: '',
      year: '2017',
      tagEs: 'Fulldome Experience',
      tagEn: 'Fulldome Experience',
      descEs: `Propuesta ganadora en el primer Festival FullDome del Planetario de Bogotá, proyectada en el Festival Immersphere de Brasilia. \n “Alguien mira a través de un microscopio, observando el fin del mundo. Lentamente, comprendiendo la vastedad de la existencia, existencia contenida en una placa de Petri. Siendo testigo de esa tendencia natural del Universo hacia el caos y la descomposición de los sistemas. Una tendencia que se manifiesta a si misma, sin importar cuan inmenso o finito es el sistema. Pues todo aquello que toma lugar bajo ese microscopio no es mas que el reflejo de lo que se proyecta arriba en el cielo. Una afirmación, hecha visible bajo el lente: la destrucción de los sistemas orgánicos y con ellos, la ruptura del mundo biológico tal y como lo conocemos. Cada célula es transformada, ignorando su función íntegra dentro del sistema, actuando solamente en defensa de su propia supervivencia, llevando así a una separación inevitable. La voluntad de un sistema entero lentamente se convierte en la necesidad individual de un millón de entidades dispuestas a prevalecer. Finalmente, la energía que alguna vez la unió hacia una misma dirección es disuelta, perdiéndose hacia el azar; hacia un caos que se desploma hacia su destrucción orgánica mientras lleva a una construcción digital. El sistema digital, que en algún punto funcionó como una extensión de lo biológico, ahora se refuerza a si mismo de manera exponencial, simplemente asentándose. El flujo entrópico de los sistemas se actualiza con una nueva inclinación: una naturaleza digital creciente. Alguien mira a través de un microscopio, observando el fin del mundo.”`,
      descEn: 'Winner Entry at the first FullDome Festival of the Bogotá Planetarium, selected at the Immersphere Festival in Brasilia. \n “Somebody is looking through a microscope, watching the world end. Slowly, understanding the vastness of existence contained inside a petri dish. Witnessing the Universe’s natural tendency into the chaos and decomposition of the systems. A tendency which manifests itself, regardless of how immense or how finite the system. For all that takes place under the microscope is nothing more than the reflection of what is projected up in the sky. An assertion, made visible under the  lens: the destruction of the organic systems and with them, the rupture of the biological world as we know it. Each cell is transformed, ignoring its integral function within the system, acting only in defense of its own survival, leading to an inevitable separation. The will of an entire system slowly becomes the individual need of a million entities willing to prevail. Finally, the energy that once united them into a same direction is dissolved and lost into randomness; into a chaos that spirals into its organic destruction as it leads to a digital construction. The digital system, which at some point functioned as an extension of the biologic, now reinforces itself exponentially, simply settling down. The entropic flow of the systems is updated with a new incline: a digitally increasing nature. Somebody is looking through a microscope, watching the world end.”',
      logos: [immer, idartes],
      assets: {
        a1: {
          type: 'gif',
          src: mundo1
        },
        a2: {
          type: 'gif',
          src: mundo2
        },
        a3: {
          type: 'gif',
          src: mundo3
        },
        a4: {
          type: 'gif',
          src: mundo4
        },
        a5: {
          type: 'gif',
          src: mundo5
        },
        a6: {
          type: 'gif',
          src: mundo6
        },
        a7: {
          type: 'img',
          src: mundo7
        },
        a8: {
          type: 'gif',
          src: mundo8
        },
        a9: {
          type: 'gif',
          src: mundo9
        },
      }
    }
  } else if (param === 'coca') {
    return {
      prev: 'mundo',
      next: 'adidas',
      titleEn: 'De la Coca a la Pimienta',
      titleEs: 'De la Coca a la Pimienta',
      subtitle: '',
      year: '2017',
      tagEs: 'Diseño de títulos | Motion Graphics',
      tagEn: 'Main Title Design | Motion Graphics',
      descEs: `Desarrollo, conceptualización y diseño de títulos animados para el documental “De la Coca a la Pimienta” producido por Crepes & Waffles.`,
      descEn: `Development, conception and design of the animated titles for the documentary “FromCoke to Pepper”, produced by Crepes & Waffles.`,
      logos: [crepes],
      assets: {
        a1: {
          type: 'img',
          src: coca1
        },
        a2: {
          type: 'gif',
          src: coca2
        },
        a3: {
          type: 'gif',
          src: coca3
        },
        a4: {
          type: 'video',
          src: '<iframe width="600" height="300" src="https://www.youtube.com/embed/HyHNuVaZJ-k" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
        },
      }
    }
  } else if (param === 'adidas') {
    return {
      prev: 'coca',
      next: 'nike',
      titleEn: 'Adidas Nemeziz',
      titleEs: 'Adidas Nemeziz',
      subtitle: '',
      year: '2017',
      tagEs: 'Motion Graphics | Diseño',
      tagEn: 'Motion Graphics | Design',
      descEs: `Desarrollo de motion graphics para la campaña de Adidas Nemeziz en Colombia. \n Producción y Realización: El Parche Films`,
      descEn: `Motion graphics development for the Adidas Nemeziz campaign in Colombia. \n Production and direction: El Parche Films`,
      logos: [adidas],
      assets: {
        a1: {
          type: 'img',
          src: adidas1
        },
        a2: {
          type: 'gif',
          src: adidas2
        },
        a3: {
          type: 'gif',
          src: adidas3
        },
        a4: {
          type: 'gif',
          src: adidas4
        },
        a5: {
          type: 'video',
          src: '<iframe src="https://player.vimeo.com/video/233831588" width="600" height="337" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><p><a href="https://vimeo.com/233831588">Adidas Nemeziz Ocean Storm</a> from <ahref="https://vimeo.com/user43305532">Parche Films</a> on <a href="https://vimeo.com">Vimeo</a>.</p>'
        },
      }
    }
  } else if (param === 'nike') {
    return {
      prev: 'adidas',
      next: 'topologias',
      titleEn: 'Nike Air Force Launch',
      titleEs: 'Nike Lanzamiento Air Force',
      subtitle: '',
      year: '2017',
      tagEs: 'Mapping | Motion Graphics',
      tagEn: 'Mapping | Motion Graphics',
      descEs: `Animación y realización de mapping para el relanzamiento de la tienda Nike en la Calle 82 producido por la agencia Milagros. El mapping se realizó sobre el Swoosh que hay en la fachada del local. Se le dió vida al Swoosh a partir de animaciones texturales y llenas de color que hacían referencia a los valores de la marca.`,
      descEn: `Animation and direction of a mapping for the relaunch of the Nike store located in the 82ndstreet in Bogota, produced by the Milagros agency. The mapping was projected over theSwoosh logo placed on the façade of the store. The Swoosh was given life with texturedanimations filled with several colors and prints, referencing the brands values.`,
      logos:'',
      assets: {
        a1: {
          type: 'img',
          src: adidas1
        },
        a2: {
          type: 'gif',
          src: adidas2
        },
        a3: {
          type: 'gif',
          src: adidas3
        },
        a4: {
          type: 'gif',
          src: adidas4
        },
        a5: {
          type: 'video',
          src: '<iframe src="https://player.vimeo.com/video/233831588" width="600" height="337" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
        },
      }
    }
  }
}

export default getProjectDetails