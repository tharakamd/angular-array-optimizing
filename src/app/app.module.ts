import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {ArrayNotOptimizedComponent} from './array-not-optimized/array-not-optimized.component';
import {ArrayOptimizedComponent} from './array-optimized/array-optimized.component';

const appRoutes: Routes = [
  {path: 'not-optimized', component: ArrayNotOptimizedComponent},
  {path: 'optimized', component: ArrayOptimizedComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ArrayNotOptimizedComponent,
    ArrayOptimizedComponent
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
