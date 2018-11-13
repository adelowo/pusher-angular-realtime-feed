import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedFormComponent } from './feed-form/feed-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedComponent } from './feed/feed.component';

const appRoutes: Routes = [
  { path: 'new', component: FeedFormComponent },
  {
    path: 'feed',
    component: FeedComponent,
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },

  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FeedFormComponent,
    PageNotFoundComponent,
    DashboardComponent,
    FeedComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  exports: [RouterModule],

  bootstrap: [AppComponent],
})
export class AppModule {}
