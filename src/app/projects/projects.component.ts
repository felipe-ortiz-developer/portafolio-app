import { Component } from '@angular/core';

interface Proyecto{
  url: string;
  alt: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  baseUrl: string = "assets/img/projects/";
  
  proyectosWeb: Proyecto[] = [{
      url : this.baseUrl+"/sistemas-web/estetica-integral.PNG",
      alt : "Sistema de salud",
      title : "Sistema de salud",
      description : "Simple Page App, registro y administración de clientes."
    }, {
      url : this.baseUrl+"/sistemas-web/moodle.PNG",
      alt : "Sistema de cursos",
      title : "Sistema de cursos",
      description : "Aplicación Moodle para cursos online."
    }, {
      url : this.baseUrl+"/sistemas-web/votacion.PNG",
      alt : "Sistema de votación",
      title : "Sistema de votación",
      description : "Formulario de validacion y administrador de votos."
    },
  ];

  proyectosEstaticos: Proyecto[] = [{
      url : this.baseUrl+"/portafolios/portafolio-1.png",
      alt : "Portafolio Felipe Ortiz",
      title : "Portafolio",
      description : "Aplicacion estatica para mostrar perfil profesional."}
    // }, {
    //   url : this.baseUrl+"/sistemas-web/moodle.PNG",
    //   alt : "Sistema de cursos",
    //   title : "Sistema de cursos",
    //   description : "Aplicación Moodle para cursos online."
    // }, {
    //   url : this.baseUrl+"/sistemas-web/votacion.PNG",
    //   alt : "Sistema de votación",
    //   title : "Sistema de votación",
    //   description : "Formulario de validacion y administrador de votos."
    // },
  ];

  proyectosMoviles: Proyecto[] = [
    {
      url : this.baseUrl+"/aplicaciones-moviles/app2.png",
      alt : "Aplicacion para calcular IMC de una persona",
      title : "IMC App",
      description : "Aplicación para calcular el IMC de una persona."
    },
    {
      url : this.baseUrl+"/aplicaciones-moviles/app1.png",
      alt : "Aplicacion para lanzar dados",
      title : "Tus Dados App",
      description : "Aplicacion movil para lanzar dados."
    }
    // ,{
    //   url : this.baseUrl+"/sistemas-web/votacion.PNG",
    //   alt : "Sistema de votación",
    //   title : "Sistema de votación",
    //   description : "Formulario de validacion y administrador de votos."
    // },
  ];
}