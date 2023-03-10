import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-opciones',
  templateUrl: './menu-opciones.component.html',
  styleUrls: ['./menu-opciones.component.scss']
})
export class MenuOpcionesComponent implements OnInit {

  idClassroom?         :string;

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.idClassroom = this.route.snapshot.params['id'];
  }
}
