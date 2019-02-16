import { CityComponent } from "./city/city.component";
import { ValueComponent } from "./value/value.component";
import {Routes} from '@angular/router';
import { CityDetailsComponent } from "./city/city-details/city-details.component";
import { CityAddComponent } from "./city/city-add/city-add.component";
import { RegisterComponent } from "./register/register.component";


export const appRoutes : Routes = [
  { path: "city", component: CityComponent },
  { path: "register", component: RegisterComponent },
  { path: "cityDetail/:cityId", component: CityDetailsComponent },
  { path: "cityAdd", component: CityAddComponent },
  { path: "value", component: ValueComponent },
  { path: "**", redirectTo: "city", pathMatch: "full" }
  
];
