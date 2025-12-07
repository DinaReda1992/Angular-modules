import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { App } from './app';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';
@NgModule({
  declarations: [
    App,
    HeaderComponent,
    // UserComponent,

  ],
  imports: [
    BrowserModule,
    SharedModule,
    TasksModule,
    RouterModule.forRoot([])],
  bootstrap: [App]
})

export class AppModule {

}