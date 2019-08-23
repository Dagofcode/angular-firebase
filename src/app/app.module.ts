import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "angularfire2";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { environment } from "src/environments/environment";

import { AngularFireDatabaseModule } from "angularfire2/database";
import { HeaderComponent } from "./header/header.component";

import { MatToolbarModule } from "@angular/material";
import { CustomerDetailsComponent } from "./customers/customer-details/customer-details.component";
import { CustomersListComponent } from "./customers/customers-list/customers-list.component";
import { CreateCustomerComponent } from "./customers/create-customer/create-customer.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    CreateCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
