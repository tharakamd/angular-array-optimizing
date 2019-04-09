import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {ArrayNotOptimizedComponent} from './array-not-optimized/array-not-optimized.component';

const appRoutes: Routes = [
  {path: 'not-optimized', component: ArrayNotOptimizedComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ArrayNotOptimizedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
