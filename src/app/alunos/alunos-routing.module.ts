import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [{path:"alunos/home",component:HomeComponent},
{path:"alunos/create",component:CreateComponent},
{path:"alunos/edit/:id",component:EditComponent},
{path:"alunos/delete/:id",component:DeleteComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
