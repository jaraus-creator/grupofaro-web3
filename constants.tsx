import { Professional, Service, BlogPost, FAQItem } from './types';
import React from 'react';

export const DIRECTORS: Professional[] = [
  {
    id: 'd1',
    name: 'José Miguel Araus Sieber',
    role: 'Director Grupo Faro',
    specialty: 'Psicólogo clínico de jóvenes y adultos',
    description: 'Psicólogo clínico de la Universidad Diego Portales, con más de 20 años de experiencia en psicoterapia y psicodiagnóstico con adolescentes y adultos. Su trabajo se enfoca desde en el psicoanálisis relacional, el enfoque sistémico y las neurociencias, y complementados con enfoques centrados en trauma y mentalización, acompañando procesos vinculados a ansiedad, depresión, crisis vitales, trauma y dificultades en las relaciones. Cuenta con formación especializada a través de diplomado en Psicoanálisis Relacional en la PUC, y en Trauma y Mentalización (CEFOP-UMayor-FMente). Además, cuenta con vasta experiencia como docente y gestor académico en Educación Superior, principalmente en programas de Desarrollo Integral de los estudiantes, con diseño e implementación de programas para el desarrollo de habilidades del siglo XXI, progresión académica y desarrollo vocacional Ofrece una atención profunda, cercana y orientada a comprender las experiencias emocionales para favorecer cambios sostenibles.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1t5AyCYaJXH9uPXsAk5Al3FZlDEe2ztPf',
    isDirector: true
  },
  {
    id: 'd2',
    name: 'Natalia Silva Edwards',
    role: 'Directora Grupo Faro',
    specialty: 'Psicóloga clínica de jóvenes y adultos | Terapeuta familiar y de parejas',
    description: 'Psicóloga clínica de la Universidad Diego Portales, con más de 20 años de experiencia en atención de adolescentes, adultos, parejas y familias. Su enfoque sistémico-relacional integra psicoterapia individual, terapia familiar y psicoeducación emocional, con especial experiencia en neurodiversidad, inclusión educativa y apoyo a familias. Cuenta con formación especializada en Terapia Familiar y de Parejas (Instituto Chileno de Terapia Familiar), diplomado en Evaluación e Intervención Clínica en Infancia (Modelo A.M.A.R.) y Diplomado El Arte de Crear(nos) Jugando (Centro Metáfora). Cuenta con trayectoria en consulta particular y en centros clínicos, realizando psicoterapia individual, terapia familiar, psicodiagnóstico y orientación a padres. Ha trabajado además en contextos escolares y de inclusión, desarrollando talleres psicoeducativos, apoyo a docentes y familias, y acompañamiento a niños y jóvenes con necesidades educativas especiales en procesos de integración, discapacidad y TEA.',
    imageUrl: 'https://lh3.googleusercontent.com/d/19CLK9Z5vFFYErrQ5yDYO8vWace1kd170',
    isDirector: true
  }
];

export const TEAM: Professional[] = [
  {
    id: 'p1',
    name: 'Marco Antonio González Alegría',
    role: 'Psiquiatra Asociado Grupo Faro',
    specialty: 'Médico cirujano y psiquiatra de adultos',
    description: 'Médico cirujano y psiquiatra de adultos de la Universidad de Chile, con una sólida trayectoria clínica de más de 20 años en salud mental, tanto en consulta particular como en instituciones especializadas. Se ha desempeñado en consulta privada, en el Instituto Psiquiátrico Dr. José Horwitz Barak, en programas ambulatorios de psicosis y recepción clínica, y en espacios universitarios de atención y docencia. Su recorrido profesional se complementa además con actividad académica, supervisión clínica, participación en investigación científica y publicaciones en revistas especializadas, ofreciendo así una atención psiquiátrica respaldada por experiencia, criterio clínico y actualización permanente.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1suP4xUFjL4-G6oTgtS-PQedeM6C7u-iy'
  },
  {
    id: 'p2',
    name: 'Alejandra Vera Sánchez',
    role: 'Psicóloga Asociado Grupo Faro',
    specialty: 'Psicóloga clínica infanto-juvenil y adultos',
    description: 'Psicóloga Clínica, Magíster en Psicología Clínica, Magíster en Análisis en Inteligencia Comunicacional y certificada en evaluación de psicopatía mediante PCL-R. Cuenta con formación especializada en psicopatología, trauma psíquico, terapias de tercera generación, trastornos del espectro autista, neurorehabilitación, salud pública y gestión en salud mental. Cuenta con 14 años de trayectoria en el abordaje integral de problemáticas asociadas a trauma, disociación, trastornos afectivos, desregulación emocional y consumo de sustancias. Trabaja con población infanto-juvenil y adulta, integrando enfoques basados en la evidencia como la Terapia Cognitivo-Conductual, la teoría del apego y modelos centrados en el vínculo, ofreciendo una atención clínica profunda, ética y orientada a generar cambios sostenibles. Su trabajo se orienta a comprender a cada persona en su complejidad, generando espacios terapéuticos seguros, respetuosos y profundamente humanos, donde el cambio no solo sea posible, sino también sostenible.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1HLt1Vyv1ltoppJEHkGFU4pvVGSPRBhx9'
  },
  {
    id: 'p3',
    name: 'Valentín Pérez Benavides',
    role: 'Psicólogo Asociado Grupo Faro',
    specialty: 'Psicólogo clínico infanto-juvenil y adultos',
    description: 'Psicólogo clínico de la Universidad Andrés Bello, magíster en Psicología Clínica con mención en Psicodiagnóstico e Intervenciones Psicoterapéuticas, con formación académica en psicopatología, salud pública y psicoanálisis relacional. Cuenta con experiencia profesional desde 2018 en diversos dispositivos de atención en salud mental, incluyendo consulta clínica privada, centros médicos, servicios de telemedicina y programas de rehabilitación. Ha trabajado con población infanto-juvenil, adulta y adulto mayor, abordando problemáticas asociadas a trastornos del ánimo, trauma, consumo de sustancias, violencia intrafamiliar y conflictivas relacionales. Posee además experiencia en psicodiagnóstico, evaluación psicológica y psicojurídica, así como en la elaboración de informes clínicos y en el trabajo interdisciplinario, ofreciendo una atención rigurosa, cercana y comprometida con la actualización permanente.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1etqm2KJ6BCOSlBfVMUqxnT8VDdYSTISK'
  },
  {
    id: 'p4',
    name: 'Valentina Lueg M.',
    role: 'Psicóloga Asociado Grupo Faro',
    specialty: 'Psicóloga clínica infanto-juvenil y adultos',
    description: 'Psicóloga de la Pontificia Universidad Católica de Chile, con formación en Clínica Infanto-Juvenil. Diplomado en Psicoanálisis Relacional: Teoría y Clínica en la misma casa de estudios. Cuenta con experiencia en atención de niños, niñas y adolescentes, trabajando en conjunto con sus familias y adultos significativos para favorecer procesos terapéuticos integrales y respetuosos del contexto de cada paciente. Su enfoque se basa en la empatía y la validación, priorizando siempre el bienestar de cada persona y promoviendo su protagonismo en su propio proceso terapéutico. Se adapta a las necesidades específicas de cada paciente y su contexto, utilizando diversas estrategias para brindar un acompañamiento personalizado, cercano y efectivo.',
    imageUrl: 'https://lh3.googleusercontent.com/d/11cBiqFtculX6kPmaAEpiQJ_EfbrjMC5c'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Terapia Individual',
    description: 'Psicoterapia para adolescentes y adultos ante ansiedad, depresión, trauma y crisis vitales.',
    iconName: 'User'
  },
  {
    id: 's3',
    title: 'Terapia de Pareja',
    description: 'Abordaje de crisis relacionales, comunicación y fortalecimiento del vínculo de pareja.',
    iconName: 'Users'
  },
  {
    id: 's5',
    title: 'Terapia de Familia',
    description: 'Acompañamiento en conflictos familiares, procesos de crianza y transiciones del ciclo vital.',
    iconName: 'Heart'
  },
  {
    id: 's4',
    title: 'Psiquiatría',
    description: 'Evaluación y tratamiento médico especializado integrado con el proceso terapéutico.',
    iconName: 'Brain'
  },
  {
    id: 's6',
    title: 'Psicodiagnóstico',
    description: 'Procesos de evaluación diagnóstica para una comprensión profunda del funcionamiento psíquico.',
    iconName: 'ClipboardCheck'
  },
  {
    id: 's7',
    title: 'Psicoeducación',
    description: 'Programas preventivos y de promoción de salud mental para instituciones y la comunidad.',
    iconName: 'BookOpen'
  },
  {
    id: 's2',
    title: 'Atención Online o Presencial',
    description: 'Flexibilidad de atención en nuestra consulta física o mediante plataformas seguras a distancia.',
    iconName: 'Monitor'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Gestionando la ansiedad en tiempos modernos',
    excerpt: 'Vivimos en una época donde la velocidad y la exigencia han redefinido nuestra experiencia cotidiana. Una mirada profunda a la ansiedad hoy.',
    content: `
      <div class="mb-6">
        <p class="text-faro-600 font-semibold mb-1">Grupo Faro</p>
        <p class="text-slate-500 text-sm">Autor: José Miguel Araus S.</p>
      </div>

      <p>Vivimos en una época donde la velocidad, la exposición constante y la exigencia de rendimiento han redefinido nuestra experiencia cotidiana. La ansiedad, en este contexto, no solo ha aumentado en prevalencia, sino que también ha cambiado en su forma de manifestarse: es más persistente, más difusa y, muchas veces, más silenciosa.</p>
      
      <p>No es casualidad. Diversos estudios han mostrado un aumento sostenido de síntomas ansiosos en población general, particularmente en jóvenes y adultos jóvenes, asociado a factores como la hiperconectividad, la incertidumbre económica y la sobrecarga informativa (Twenge et al., 2019; WHO, 2022). La ansiedad, entonces, deja de ser solo una reacción puntual para convertirse en un estado basal en muchas personas.</p>

      <h3>¿Qué es realmente la ansiedad hoy?</h3>
      <p>La ansiedad no es solo un fenómeno biológico ni únicamente psicológico: es una experiencia compleja que involucra al cuerpo, la mente y los vínculos.</p>
      <p>Desde una perspectiva neurocientífica, es una respuesta adaptativa del organismo, mediada por sistemas como la amígdala, el eje hipotálamo-hipófisis-adrenal (HHA) y diversas redes de procesamiento emocional. Su función es prepararnos para responder ante amenazas, activando estados de alerta y anticipación.</p>
      <p>Pero esa es solo una parte de la historia.</p>
      <p>En la experiencia cotidiana, la ansiedad también es una forma en que la persona intenta procesar algo que la sobrepasa: incertidumbre, demanda interna, miedo a perder control, o tensiones en sus relaciones significativas. Muchas veces no aparece como una amenaza concreta, sino como una sensación difusa de inquietud o desborde.</p>
      <p>Desde una mirada clínica más amplia, la ansiedad puede entenderse como una señal: algo del sistema —emocional, relacional o incluso identitario— está en tensión y requiere ser atendido. No siempre habla de un peligro externo, sino de un desequilibrio interno o vincular.</p>
      <p>El problema aparece cuando este sistema se activa de forma crónica o desproporcionada. En esos casos, el organismo queda atrapado en un estado de alerta permanente, donde la capacidad de regulación se ve sobrepasada y la experiencia ansiosa deja de ser una señal útil para transformarse en un modo de funcionamiento.</p>

      <h3>¿Cómo identificarla?</h3>
      <p>La ansiedad no es solo psicológica; es profundamente corporal. Se manifiesta en distintos niveles:</p>
      <ul>
        <li><strong>Fisiológico:</strong> taquicardia, sudoración, tensión muscular, molestias gastrointestinales.</li>
        <li><strong>Cognitivo:</strong> rumiación, anticipación negativa, dificultad para tomar decisiones.</li>
        <li><strong>Emocional:</strong> inquietud, irritabilidad, sensación de desborde.</li>
        <li><strong>Conductual:</strong> evitación, procrastinación o hiperactividad compensatoria.</li>
      </ul>
      <p>Un punto clave es que muchas personas han normalizado estos síntomas. Funcionan, trabajan, cumplen, pero a un costo interno elevado.</p>

      <h3>El rol del entorno: ansiedad y cultura digital</h3>
      <p>La exposición constante a estímulos —notificaciones, redes sociales, información en tiempo real— mantiene activado el sistema atencional y emocional. Estudios recientes han vinculado el uso intensivo de redes sociales con mayores niveles de ansiedad y comparación social, especialmente en adolescentes y adultos jóvenes (Keles et al., 2020).</p>
      <p>Desde una mirada clínica, esto no solo aumenta la activación, sino que reduce los espacios de autorregulación. El problema no es solo cuánto hacemos, sino que nunca dejamos de estar “en algo”.</p>

      <h3>Estrategias de manejo: más allá de lo evidente</h3>
      <p>Las estrategias clásicas siguen siendo válidas, pero es importante comprender por qué funcionan:</p>
      
      <h4>Atención plena (Mindfulness)</h4>
      <p>No es solo “relajarse”. La práctica de mindfulness ha demostrado modificar la conectividad entre la amígdala y la corteza prefrontal, favoreciendo una mejor regulación emocional (Hölzel et al., 2011). Disminuye la reactividad automática y permite observar los pensamientos sin quedar atrapado en ellos.</p>
      
      <h4>Higiene del sueño</h4>
      <p>El sueño regula directamente el sistema emocional. La privación de sueño aumenta la reactividad de la amígdala hasta en un 60% (Walker & van der Helm, 2009). Dormir mal no solo cansa: desregula emocionalmente.</p>
      
      <h4>Límites digitales</h4>
      <p>Reducir la exposición no es desconectarse del mundo, sino recuperar espacios de regulación. Establecer “zonas libres de pantalla” permite que el sistema nervioso salga del estado de alerta constante.</p>
      
      <h4>Actividad física</h4>
      <p>El ejercicio regular no solo mejora el estado de ánimo, sino que tiene efectos neuroquímicos directos: aumenta la liberación de endorfinas, serotonina y BDNF (factor neurotrófico derivado del cerebro), lo que favorece la plasticidad neuronal y la resiliencia al estrés (Ratey & Loehr, 2011).</p>

      <h3>Intervenciones psicológicas</h3>
      <p>La terapia cognitivo-conductual (TCC) sigue siendo uno de los tratamientos con mayor respaldo empírico para los trastornos de ansiedad, especialmente por su foco en la identificación y modificación de patrones de pensamiento disfuncionales, exposición progresiva y entrenamiento en habilidades de regulación (Craske et al., 2014). Sin embargo, reducir la ansiedad únicamente a un problema de “pensamientos irracionales” puede resultar limitado para comprender su complejidad.</p>
      <p>Desde una mirada clínica más amplia, la ansiedad no es solo un sistema a eliminar, sino una expresión de organización psíquica. Muchas veces, lo que aparece como ansiedad es la manifestación visible de procesos más profundos: conflictos intrapsíquicos, experiencias relacionales tempranas no elaboradas, dificultades en la regulación emocional o amenazas percibidas en los vínculos significativos.</p>
      <p>En enfoques psicodinámicos y psicoanalíticos contemporáneos —especialmente desde el psicoanálisis relacional— la ansiedad se comprende como una señal de desregulación en el sistema self–otro, donde emergen temores asociados a la pérdida, el rechazo, la invasión o la desintegración del sí mismo (Bromberg, 2011). En este sentido, no se trata solo de “regular síntomas”, sino de comprender qué está intentando comunicar la ansiedad.</p>
      <p>Por su parte, enfoques basados en la mentalización (Fonagy et al., 2002) plantean que la ansiedad puede intensificarse cuando la persona pierde la capacidad de comprender sus propios estados mentales y los de otros, especialmente en contextos de estrés interpersonal. Aquí, el trabajo terapéutico apunta a restaurar esa capacidad reflexiva, generando mayor coherencia interna.</p>
      <p>Desde modelos sistémicos, la ansiedad también puede entenderse como un fenómeno que no reside únicamente en el individuo, sino en patrones relacionales más amplios. En estos casos, el síntoma cumple una función dentro del sistema (familiar, de pareja o incluso organizacional), y su abordaje implica mirar esas dinámicas.</p>
      <p>Incluso desde la neurociencia interpersonal, se ha planteado que la regulación emocional es, en gran medida, un proceso co-construido en vínculo. La terapia, entonces, no solo entrega herramientas, sino que ofrece una experiencia relacional correctiva, donde el sistema nervioso puede reorganizarse en un contexto de seguridad (Siegel, 2012).</p>
      
      <p>En síntesis, más allá del enfoque específico, las intervenciones psicológicas efectivas en ansiedad suelen compartir elementos clave:</p>
      <ul>
        <li>Comprensión del sentido del síntoma (no solo su reducción).</li>
        <li>Desarrollo de capacidades de autorregulación.</li>
        <li>Trabajo sobre patrones relacionales.</li>
        <li>Generación de nuevas experiencias emocionales en un contexto terapéutico seguro.</li>
      </ul>

      <h3>Tratamiento farmacológico (cuando corresponde)</h3>
      <p>En cuadros de ansiedad moderada a severa, o cuando la sintomatología interfiere significativamente con el funcionamiento diario, el tratamiento farmacológico puede ser una herramienta relevante. Los inhibidores selectivos de la recaptación de serotonina (ISRS) —como sertralina, escitalopram o fluoxetina— constituyen el tratamiento de primera línea, debido a su eficacia y perfil de seguridad (Bandelow et al., 2017).</p>
      <p>Sin embargo, no son la única alternativa. También se utilizan:</p>
      <ul>
        <li>Inhibidores de la recaptación de serotonina y noradrenalina (IRSN), como venlafaxina o duloxetina, especialmente en trastornos de ansiedad generalizada.</li>
        <li>Benzodiacepinas (como clonazepam o alprazolam), que tienen un efecto ansiolítico rápido, pero conllevan riesgos importantes de tolerancia, dependencia y síndrome de abstinencia.</li>
        <li>Otros fármacos como pregabalina o ciertos antipsicóticos en dosis bajas, en casos específicos y bajo supervisión médica.</li>
      </ul>
      <p>Un punto crítico —y muchas veces invisibilizado— es el riesgo del uso indiscriminado de ansiolíticos, particularmente benzodiacepinas. Su uso prolongado puede generar dependencia física y psicológica, deterioro cognitivo y dificultades en la regulación emocional a largo plazo (Lader, 2011). En la práctica clínica, no es infrecuente encontrar personas que, intentando aliviar la ansiedad, terminan atrapadas en un circuito de consumo que perpetúa el problema.</p>
      <p>Además, es importante comprender que los fármacos no resuelven el origen de la ansiedad, sino que modulan sus manifestaciones neuroquímicas. Pueden ser fundamentales para estabilizar el sistema nervioso —especialmente en momentos de crisis—, pero su mayor efectividad se observa cuando se integran en un abordaje más amplio que incluya psicoterapia.</p>
      
      <p>Desde una perspectiva clínica responsable, el tratamiento farmacológico debiese:</p>
      <ul>
        <li>Ser indicado y supervisado por un médico (idealmente psiquiatra).</li>
        <li>Tener objetivos claros (síntoma, duración, seguimiento).</li>
        <li>Ser revisado periódicamente.</li>
        <li>Integrarse con intervención psicológica.</li>
      </ul>
      <p>En otras palabras, los fármacos pueden ser un soporte valioso, pero no sustituyen el proceso de comprensión y transformación que ocurre en el espacio terapéutico.</p>

      <h3>Una distinción clave: ansiedad adaptativa vs. ansiedad desbordada</h3>
      <p>No toda ansiedad es negativa. De hecho, es necesaria. Nos moviliza, nos alerta, nos prepara. El problema es cuando deja de ser una señal y se convierte en un estado permanente.</p>
      <p>Ahí es donde muchas personas quedan atrapadas: no están en peligro, pero su cuerpo y su mente funcionan como si lo estuvieran.</p>
      
      <p>Gestionar la ansiedad en tiempos modernos no implica eliminarla, sino aprender a relacionarnos con ella de manera distinta. Entenderla, reconocerla y regularla.</p>
      <p>Y, sobre todo, dejar de normalizar el malestar constante como si fuera el precio inevitable de vivir hoy.</p>
      <p>Cuando la ansiedad interfiere con la vida cotidiana, no es un signo de debilidad: es una señal de que el sistema necesita apoyo. Y ahí, el trabajo terapéutico no solo alivia, sino que transforma.</p>

      <hr class="my-8 border-slate-200" />
      
      <h3 class="text-lg font-bold mb-4">Referencias</h3>
      <ul class="text-sm text-slate-500 list-none pl-0 space-y-2">
        <li>• Bandelow, B., Michaelis, S., & Wedekind, D. (2017). Treatment of anxiety disorders. Dialogues in Clinical Neuroscience, 19(2), 93–107.</li>
        <li>• Bromberg, P. M. (2011). La sombra del tsunami y el desarrollo de la mente relacional. Ágora Relacional.</li>
        <li>• Craske, M. G., Treanor, M., Conway, C. C., Zbozinek, T., & Vervliet, B. (2014). Maximizing exposure therapy: An inhibitory learning approach. Behaviour Research and Therapy, 58, 10–23.</li>
        <li>• Fonagy, P., Gergely, G., Jurist, E. L., & Target, M. (2002). Affect regulation, mentalization, and the development of the self. Other Press.</li>
        <li>• Etkin, A., & Wager, T. D. (2007). Functional neuroimaging of anxiety: A meta-analysis of emotional processing in PTSD, social anxiety disorder, and specific phobia. American Journal of Psychiatry, 164(10), 1476–1488.</li>
        <li>• Hölzel, B. K., Lazar, S. W., Gard, T., Schuman-Olivier, Z., Vago, D. R., & Ott, U. (2011). How does mindfulness meditation work? Proposing mechanisms of action from a conceptual and neural perspective. Perspectives on Psychological Science, 6(6), 537–559.</li>
        <li>• Keles, B., McCrae, N., & Grealish, A. (2020). A systematic review: The influence of social media on depression, anxiety and psychological distress in adolescents. International Journal of Adolescence and Youth, 25(1), 79–93.</li>
        <li>• Lader, M. (2011). Benzodiazepines revisited—Will we ever learn? Addiction, 106(12), 2086–2109.</li>
        <li>• Ratey, J. J., & Loehr, J. E. (2011). The positive impact of physical activity on cognition during adulthood: A review of underlying mechanisms, evidence and recommendations. Reviews in the Neurosciences, 22(2), 171–185.</li>
        <li>• Siegel, D. J. (2007). La mente en desarrollo. Cómo interactúan las relaciones y el cerebro para modelar nuestro ser. Desclée de Brouwer.</li>
        <li>• Twenge, J. M., Joiner, T. E., Rogers, M. L., & Martin, G. N. (2018). Increases in depressive symptoms, suicide-related outcomes, and suicide rates among U.S. adolescents after 2010 and links to increased new media screen time. Clinical Psychological Science, 6(1), 3–17.</li>
        <li>• Walker, M. P., & van der Helm, E. (2009). Overnight therapy? The role of sleep in emotional brain processing. Current Biology, 19(23), R105–R107.</li>
        <li>• Organización Mundial de la Salud. (2022). Informe mundial sobre salud mental: Transformar la salud mental para todos. OMS.</li>
      </ul>
    `,
    date: 'Noviembre 2025',
    category: 'Bienestar',
    imageUrl: 'https://images.unsplash.com/photo-1474418397713-7ede21d49118?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'b2',
    title: 'La importancia del vínculo en la adolescencia',
    excerpt: 'La adolescencia no es una ruptura, sino una reorganización profunda del vínculo. El desafío de acompañar sin controlar.',
    content: `
      <div class="mb-6">
        <p class="text-faro-600 font-semibold mb-1">Grupo Faro</p>
        <p class="text-slate-500 text-sm">Autor: José Miguel Araus S.</p>
      </div>

      <p>La adolescencia suele describirse como una etapa de ruptura: con la infancia, con las normas, con la dependencia. Sin embargo, esta mirada es parcial. Más que una ruptura, la adolescencia es un proceso de reorganización profunda del vínculo.</p>
      <p>Porque, aunque el adolescente busque autonomía, no deja de necesitar sostén.</p>
      <p>Aquí aparece una paradoja central del desarrollo: mientras más intenta alejarse, más necesita saber que hay alguien disponible. Esta tensión no es un problema, sino una condición estructural del proceso adolescente.</p>

      <h3>¿Qué está en juego en la adolescencia?</h3>
      <p>La adolescencia no es solo una etapa psicológica, sino también una transformación neurobiológica y relacional.</p>
      <p>Desde la neurociencia del desarrollo, se ha descrito un desbalance temporal entre sistemas cerebrales: el sistema límbico —asociado a la reactividad emocional y la búsqueda de recompensa— presenta una alta activación, mientras que la corteza prefrontal —encargada de la regulación, planificación y toma de decisiones— aún está en proceso de maduración (Steinberg, 2014). Este desfase explica, en parte, la intensidad emocional, la impulsividad y la mayor sensibilidad al entorno social.</p>
      <p>Sin embargo, este proceso no ocurre en aislamiento. Desde la teoría del apego, sabemos que las experiencias vinculares tempranas configuran modelos internos que organizan la forma en que las personas regulan sus emociones y establecen relaciones. En la adolescencia, estos modelos no desaparecen: se reactivan, se tensionan y se reconfiguran en función de nuevas demandas evolutivas (Allen & Tan, 2016; Bowlby, 1989).</p>

      <h3>El desafío de la autonomía: diferenciarse sin perder el vínculo</h3>
      <p>Uno de los ejes centrales de la adolescencia es la construcción de identidad. Para ello, el adolescente necesita diferenciarse de sus figuras parentales, lo que muchas veces se expresa en oposición, distancia o cuestionamiento.</p>
      <p>Pero desde una perspectiva del desarrollo, se trata de algo distinto: la autonomía no implica ruptura, sino transformación del vínculo. El desafío no es “soltar” al adolescente, sino modificar la forma de estar disponibles para él. Esto requiere un cambio de posición en los adultos: pasar del control a la presencia, de la instrucción a la escucha, de la imposición a la regulación compartida.</p>

      <h3>El vínculo como regulador emocional</h3>
      <p>La evidencia en neurociencia interpersonal ha mostrado que la regulación emocional es, en su origen, un proceso relacional. Un vínculo caracterizado por disponibilidad emocional, coherencia y confiabilidad funciona como un organizador interno que permite al adolescente:</p>
      <ul>
        <li>modular la intensidad emocional</li>
        <li>tolerar la frustración</li>
        <li>tomar decisiones más ajustadas</li>
        <li>explorar el entorno con mayor seguridad</li>
      </ul>

      <h3>Claves para fortalecer el vínculo</h3>
      <ol>
        <li><strong>Escucha activa:</strong> Validar no implica estar de acuerdo, sino reconocer la experiencia emocional del adolescente.</li>
        <li><strong>Interés genuino:</strong> Participar de sus mundos desde la curiosidad y no desde el control.</li>
        <li><strong>Límites claros y coherentes:</strong> Los límites explicados y razonables favorecen la internalización de normas y la sensación de seguridad.</li>
        <li><strong>Disponibilidad emocional:</strong> Constituye lo que Bowlby denominó una “base segura”, desde la cual es posible explorar y a la cual siempre se puede regresar.</li>
      </ol>

      <h3>Más allá de la conducta: comprender el sentido</h3>
      <p>Muchas de las conductas que generan preocupación —aislamiento, irritabilidad, oposición— suelen ser abordadas como problemas en sí mismos. Sin embargo, desde una perspectiva clínica, estas conductas pueden entenderse como intentos de regulación o expresiones de conflictos más profundos. El adolescente no solo está cambiando: está reeditando su historia vincular en un nuevo nivel de complejidad.</p>

      <h3>El vínculo como factor protector</h3>
      <p>La calidad del vínculo con figuras significativas es uno de los principales factores protectores frente a múltiples riesgos: conductas de riesgo, consumo de sustancias y trastornos de salud mental. No es necesario que el vínculo sea perfecto, sino suficientemente seguro.</p>

      <h3>Cierre</h3>
      <p>La adolescencia no es una etapa en la que los adultos dejan de ser relevantes. Es una etapa en la que su rol se transforma profundamente. Ya no se trata de dirigir, sino de acompañar. No se trata de controlar, sino de sostener.</p>

      <hr class="my-8 border-slate-200" />
      
      <h3 class="text-lg font-bold mb-4">Referencias</h3>
      <ul class="text-sm text-slate-500 list-none pl-0">
        <li>• Allen, J. P., & Tan, J. S. (2016). The multiple facets of attachment in adolescence.</li>
        <li>• Bowlby, J. (1989). Una base segura: Aplicaciones clínicas de una teoría del apego.</li>
        <li>• Siegel, D. J. (2007). La mente en desarrollo.</li>
        <li>• Steinberg, L. (2014). Age of opportunity: Lessons from the new science of adolescence.</li>
        <li>• UNICEF (2011). La adolescencia: una etapa fundamental del desarrollo.</li>
        <li>• OMS (2022). World mental health report.</li>
      </ul>
    `,
    date: 'Enero 2026',
    category: 'Familia',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'b3',
    title: 'Beneficios de la terapia online',
    excerpt: 'La terapia online dejó de ser una solución de emergencia para convertirse en una modalidad clínica válida y eficaz respaldada por la evidencia.',
    content: `
      <div class="mb-6">
        <p class="text-faro-600 font-semibold mb-1">Grupo Faro</p>
        <p class="text-slate-500 text-sm">Autor: José Miguel Araus S.</p>
      </div>

      <p>La terapia online dejó hace tiempo de ser solo una solución de emergencia. Lo que en un comienzo fue visto como una alternativa transitoria o “de segunda línea”, hoy cuenta con una base de evidencia suficientemente robusta como para ser considerada una modalidad clínica válida, eficaz y, en muchos casos, especialmente adecuada para ciertos pacientes y contextos.</p>
      <p>Lejos de ser una práctica improvisada, la telepsicología ha sido objeto de desarrollo técnico y ético específico. Las directrices de la American Psychological Association establecen que esta modalidad requiere competencias clínicas, resguardos de confidencialidad y condiciones técnicas adecuadas para garantizar estándares equivalentes a la atención presencial (Joint Task Force, 2013).</p>

      <h3>¿Es realmente efectiva?</h3>
      <p>La evidencia actual sugiere que sí. Un metaanálisis reciente encontró que las intervenciones realizadas mediante telemedicina presentan resultados comparables a la atención presencial en términos de eficacia clínica, satisfacción del paciente y adherencia al tratamiento (Shaker et al., 2023).</p>
      <p>En la misma línea, revisiones sobre psicoterapias digitales en depresión mostraron efectos moderados a grandes en la reducción de síntomas, especialmente cuando incluyen acompañamiento humano (Omylinska-Thurston et al., 2024). La evidencia muestra que la terapia online puede ser altamente efectiva cuando está bien diseñada clínicamente.</p>

      <h3>¿Y qué pasa con la alianza terapéutica?</h3>
      <p>La alianza terapéutica —el vínculo de trabajo entre paciente y terapeuta— es uno de los factores más relevantes para el éxito de cualquier psicoterapia. La evidencia actual es clara: no existen diferencias significativas en la calidad de la alianza terapéutica entre terapia online y presencial (Seuling et al., 2024).</p>
      <p>Esto tiene una implicancia clínica relevante: el vínculo terapéutico no depende exclusivamente de la copresencia física, sino de la capacidad de sintonía del terapeuta, la calidad de la escucha y la seguridad percibida por el paciente. La presencia terapéutica no es solo física, es relacional.</p>

      <h3>Principales ventajas de la terapia online</h3>
      <ol>
        <li><strong>Accesibilidad:</strong> Permite acceder a atención especializada sin importar la ubicación geográfica, ideal para zonas rurales o personas con movilidad reducida.</li>
        <li><strong>Ahorro de tiempo y mayor adherencia:</strong> Eliminar los desplazamientos facilita la integración de la terapia en la vida cotidiana, lo que reduce las tasas de abandono (Shaker et al., 2023).</li>
        <li><strong>Comodidad y facilitación de la apertura:</strong> Para algunos pacientes, estar en su propio entorno genera una mayor sensación de seguridad inicial, facilitando la apertura emocional.</li>
        <li><strong>Continuidad en contextos cambiantes:</strong> Permite sostener procesos terapéuticos ante viajes, cambios de ciudad o horarios laborales exigentes.</li>
      </ol>

      <h3>¿Sirve para todos los casos?</h3>
      <p>No siempre. A pesar de su eficacia, la terapia online no es igualmente adecuada para todos. Algunos casos requieren evaluación más cuidadosa, como cuadros de alto riesgo (ideación suicida activa) o dificultades importantes en la privacidad del entorno. La decisión sobre la modalidad debe ser clínica, no ideológica.</p>

      <h3>Confidencialidad, ética y encuadre</h3>
      <p>Una terapia online bien realizada implica plataformas seguras, resguardo de datos, consentimiento informado y claridad en los límites. Estos elementos son esenciales para garantizar una práctica ética y profesional equivalente a la presencial.</p>

      <h3>Cierre</h3>
      <p>La terapia online no es una modalidad inferior, es una modalidad distinta. En un contexto donde muchas personas quedan fuera de atención por barreras logísticas o geográficas, su valor no es solo clínico, es también profundamente humano. Porque a veces, lo que define si una persona inicia un proceso terapéutico es su posibilidad real de acceder a él.</p>

      <hr class="my-8 border-slate-200" />
      
      <h3 class="text-lg font-bold mb-4">Referencias</h3>
      <ul class="text-sm text-slate-500 list-none pl-0">
        <li>• American Psychological Association. (2013/2024). Guidelines for the practice of telepsychology.</li>
        <li>• Aafjes-van Doorn, K., et al. (2024). The association between quality of therapeutic alliance and treatment outcomes in teletherapy.</li>
        <li>• Farkas, C., et al. (2020). Telepsicología en infancia en tiempos de COVID-19: Guía de buenas prácticas para Chile.</li>
        <li>• Omylinska-Thurston, J., et al. (2024). Digital psychotherapies for adults experiencing depressive symptoms: Systematic review and meta-analysis.</li>
        <li>• Seuling, P. D., et al. (2024). Therapeutic alliance in videoconferencing psychotherapy compared to psychotherapy in person.</li>
        <li>• Shaker, A. A., et al. (2023). Psychiatric treatment conducted via telemedicine versus in-person modality.</li>
      </ul>
    `,
    date: 'Marzo 2026',
    category: 'Actualidad',
    imageUrl: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];
export const FAQS: FAQItem[] = [
  {
    question: "¿Cómo puedo agendar una primera cita?",
    answer: "Puedes agendar tu hora directamente a través de nuestro formulario de contacto en esta página, o escribiéndonos directamente por WhatsApp a +56993317706. Nuestro equipo de recepción te ayudará a encontrar el profesional más adecuado para tus necesidades."
  },
  {
    question: "¿Atienden por Fonasa o Isapre?",
    answer: "Los profesionales que conformamos esta red emitimos boletas particulares reembolsables en Isapres y seguros complementarios. Te recomendamos igualmente consultar directamente al momento de agendar."
  },
  {
    question: "¿Cuál es la diferencia entre psicólogo y psiquiatra?",
    answer: "El psicólogo se enfoca en psicodiagnóstico, en la psicoterapia, trabajando emociones, conductas y pensamientos a través del diálogo y herramientas terapéuticas. El psiquiatra es un médico que además de que muchas veces también tiene formación terapéutica evalúa aspectos biológicos y puede recetar medicamentos si es necesario. En Grupo Faro trabajamos de manera complementaria."
  },
  {
    question: "¿Cuánto dura cada sesión de terapia?",
    answer: "Las sesiones de psicoterapia suelen durar entre 45 y 50 minutos. Las consultas psiquiátricas pueden variar, siendo la primera evaluación generalmente más extensa (45-60 minutos) y los controles psiquiátricos más breves (20-30 minutos)."
  },
  {
    question: "¿Las sesiones online son igual de efectivas?",
    answer: "Estudios recientes demuestran que la terapia online es tan efectiva como la presencial para la mayoría de los motivos de consulta. Ofrecemos una plataforma segura y privada para garantizar tu comodidad y confidencialidad."
  },
  {
    question: "¿Atienden a niños/as?",
    answer: "Tambien contamos con especialistas infantojuveniles, y una red de especialistas para abordar procesos terapéuticos con niñas/os. No dudes en consultarnos para orientarte."
  },
  {
    question: "¿Qué hago si necesito cancelar o reagendar mi hora?",
    answer: "Entendemos que pueden surgir imprevistos. Solicitamos avisar con al menos 48 horas de anticipación para poder ofrecer ese horario a otro paciente que lo necesite y evitar el cobro de la sesión."
  }
];

export const NAV_LINKS = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Nosotros', href: '#team' },
  { name: 'Nuestro Enfoque', href: '#approach' },
  { name: 'Nuestros Servicios', href: '#services' },
  { name: 'Organizaciones', href: '#psychoeducation' },
  { name: 'Contenido', href: '#blog' },
  { name: 'Preguntas', href: '#faq' },
  { name: 'Contacto', href: '#contact' },
];
