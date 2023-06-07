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
