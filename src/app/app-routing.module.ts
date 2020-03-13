import { EditComponent } from './edit/edit.component';
import { JumpComponent } from './jump/jump.component';
import { FloatComponent } from './float/float.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: "float", pathMatch: "full" },
    { path: "float", component: FloatComponent },
    { path: 'jump', component: JumpComponent },
    { path: 'edit', component: EditComponent },
    { path: "**", redirectTo: "float", pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {


}
