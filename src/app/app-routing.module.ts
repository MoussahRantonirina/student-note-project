import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './component/dashboard/student/student.component';
import { NoteComponent } from './component/dashboard/note/note.component';
import { SubjectComponent } from './component/dashboard/subject/subject.component';

const routes: Routes = [
  {path: 'dashboard', children: [
    {path: '', redirectTo:'student', pathMatch: 'full'},
    {path: 'student', component: StudentComponent},
    {path: 'subject', component: SubjectComponent},
    {path: 'note', component: NoteComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
