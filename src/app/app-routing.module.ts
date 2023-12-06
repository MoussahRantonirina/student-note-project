import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './component/dashboard/student/student.component';

const routes: Routes = [
  {path: 'dashboard', children: [
    {path: '', redirectTo:'student', pathMatch: 'full'},
    {path: 'student', component: StudentComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
