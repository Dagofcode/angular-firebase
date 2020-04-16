import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CreateCustomerComponent } from "./customers/create-customer/create-customer.component";
import { CustomersListComponent } from "./customers/customers-list/customers-list.component";

const routes: Routes = [
  { path: "", redirectTo: "customers", pathMatch: "full" },
  { path: "customers", component: CustomersListComponent },
  { path: "add", component: CreateCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}