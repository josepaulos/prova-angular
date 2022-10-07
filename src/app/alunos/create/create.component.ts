import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';
import { Alunos } from '../alunos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  alunoForm: Alunos = {
    id: 0,
    nome: '',
    turma: ''

  }

  constructor(private alunosService: AlunosService,private router:Router) { }

  ngOnInit(): void {
  }
  createAluno() {
this.alunosService.create(this.alunoForm).subscribe({
  next:(data) =>{
    this.router.navigate(["/alunos/home"])
  },
  error:(error) => {
    console.log(error);
  }
})
 
}


}
