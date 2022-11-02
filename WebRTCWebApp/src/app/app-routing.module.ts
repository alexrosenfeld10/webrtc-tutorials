import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SessionCallComponent } from './components/session-call/session-call.component';
import { SessionListenerComponent } from './components/session-listener/session-listener.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'session-call/:room', component: SessionCallComponent },
  { path: 'session-listener/:room', component: SessionListenerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
