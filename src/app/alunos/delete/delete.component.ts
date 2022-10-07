import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Alunos } from '../alunos';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {



  constructor(private alunosService: AlunosService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) =>{
      var id = Number(param.get('id'))
      this.deleteAluno(id)
    } )
  }
  deleteAluno(id:Number){
    this.alunosService.delete(id)
    .subscribe({
      next:() => {
        this.router.navigate(["/alunos/home"]);
      },
      error:(error) => {
        console.log(error);

      }
    })
}
}
