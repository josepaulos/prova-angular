import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Alunos } from '../alunos';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formAluno: Alunos = {
    id: 0,
    nome: "",
    turma: ""
  }

  constructor(private alunosService: AlunosService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) =>{
      var id = Number(param.get('id'))
      this.getAlunoById(id)
    } )
  }

  getAlunoById(id: number) {
    this.alunosService.getById(id).subscribe((data) => {
      this.formAluno = data
    })
  }
  updateAluno(){
    this.alunosService.update(this.formAluno)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/alunos/home"]);
      },
      error:(error) => {
        console.log(error);

      }
    })
  }

}
