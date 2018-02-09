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
      logos:'',
      Assets: '',
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
      logos:'',
      Assets: '',
    }
  }
}

export default getProjectDetails
