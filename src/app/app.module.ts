import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FeedFormComponent } from "./feed-form/feed-form.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: "new", component: FeedFormComponent },
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full"
  }
  {path: "dashboard", component: DashboardComponent}
];

@NgModule({
  declarations: [AppComponent, FeedFormComponent, PageNotFoundComponent, DashboardComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
