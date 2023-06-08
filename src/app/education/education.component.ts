import { Component } from '@angular/core';
// Definición de la interfaz del objeto
interface Titulo {
  nombre: string,
  institucion: string,
  descripcion: string,
  ubicacion: String,
  img: string,
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  certificados: any[];

  constructor() {
    this.certificados = [
      { // 1
        img: "assets/img/cursos/oracle-pl-sql.png",
        alt: "Certificado de Curso de Oracle PL-SQL",
        title: "Oracle PL-SQL",
        description: "",
      },
      { // 2
        img: "assets/img/cursos/wordpress.png",
        alt: "Certificado de Curso de Wordpress",
        title: "Wordpress",
        description: "",
      },
      { // 3
        img: "assets/img/cursos/Protege-tu-Negocio-Ciberseguridad-en-el-Teletrabajo.png",
        alt: "Certificado de Curso de Protege tu Negocio Ciberseguridad en el Teletrabajo",
        title: "Protege tu Negocio Ciberseguridad en el Teletrabajo",
        description: "",
      },
      { // 4
        img: "assets/img/cursos/Principios-basicos-de-internet-de-las-cosas.png",
        alt: "Certificado de Curso de Principios basicos de internet de las cosas",
        title: "Principios basicos de internet de las cosas",
        description: "",
      },
      { // 5
        img: "assets/img/cursos/Google-cloud-platform-fundamentals-core-infrastructure-en-español.png",
        alt: "Certificado de Curso de Google cloud platform fundamentals core infrastructure en español",
        title: "Google cloud platform fundamentals core infrastructure en español",
        description: "",
      },
      { // 6
        img: "assets/img/cursos/Digitaliza-paso-a-paso-tu-negocio-con-herramientas-de-Google.png",
        alt: "Certificado de Curso de Digitaliza paso a paso tu negocio con herramientas de Google",
        title: "Digitaliza paso a paso tu negocio con herramientas de Google",
        description: "",
      },
      { // 7
        img: "assets/img/cursos/Creacion-de-contenidos-digitales.png",
        alt: "Certificado de Curso de Creacion de contenidos digitales",
        title: "Creacion de contenidos digitales",
        description: "",
      },
      { // 8
        img: "assets/img/cursos/Ergonomía-y-Autocuidado-Frente-a-Pantallas-de-Computadores-ACHS.png",
        alt: "Certificado de Curso de Ergonomía y Autocuidado Frente a Pantallas de Computadores",
        title: "Ergonomía y Autocuidado Frente a Pantallas de Computadores",
        description: "",
      },
      { // 9
        img: "assets/img/cursos/Desarrollo-de-apps-moviles.png",
        alt: "Certificado de Curso Desarrollo de apps moviles",
        title: "Desarrollo de apps moviles",
        description: "",
      },
    ]
  }

  // Creación del array de titulos
  titulos: Titulo[] = [
    { 
      nombre: " Ingeniería en informática", 
      institucion: "CFT DuocUC.", 
      descripcion: "Esta formación me ha permitido adquirir competencias en áreas fundamentales como la programación, la arquitectura de software, la gestión de bases de datos, las redes informáticas y la seguridad de la información. Además, tengo una comprensión profunda de los principios y las metodologías de ingeniería que son esenciales para el desarrollo y la implementación exitosa de soluciones tecnológicas.",
      ubicacion: "Puente alto, Stg.",
      img: "assets/logo-duocuc.png",
    },
    { 
      nombre: "Analista programador computacional", 
      institucion: "CFT DuocUC.", 
      descripcion: "Esta formación me ha proporcionado una sólida base en lenguajes de programación, estructuras de datos, algoritmos y metodologías de desarrollo de software. Conozco las mejores prácticas para el diseño, implementación y mantenimiento de aplicaciones informáticas, y tengo habilidades en la resolución de problemas y la depuración de código.",
      ubicacion: "Puente alto, Stg.",
      img: "assets/logo-duocuc.png",
    },
  ];
}
