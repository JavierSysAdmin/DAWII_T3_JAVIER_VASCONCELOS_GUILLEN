import { Routes } from '@angular/router';
import { Api1Component } from './api1/api1.component';
import { Api2Component } from './api2/api2.component';

export const routes: Routes = [
    {path: "Api1", component: Api1Component},
    {path: "Api2", component: Api2Component},
];
