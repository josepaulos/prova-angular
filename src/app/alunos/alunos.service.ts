import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Alunos } from './alunos';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<Alunos[]>("http://localhost:3000/alunos")
  }
  create(payload:Alunos){
    return this.http.post<Alunos>("http://localhost:3000/alunos", payload);
  }
  getById(id:number){
    return this.http.get<Alunos>(`http://localhost:3000/alunos/${id}`)
  }
  update(payload:Alunos){
    return this.http.put(`http://localhost:3000/alunos/${payload.id}`, payload);
  }
  delete(id:Number){
    return this.http.delete<Alunos>(`http://localhost:3000/alunos/${id}`)
  }
}
