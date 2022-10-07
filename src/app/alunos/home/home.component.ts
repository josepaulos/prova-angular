import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';
import { Alunos } from '../alunos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allAlunos:Alunos[]=[]

  constructor(private alunosService:AlunosService) { }

  ngOnInit(): void {
    this.getAlunos()
  }

  getAlunos(){
this.alunosService.get().subscribe((data) => {
  this.allAlunos = data;
})
  }

}
