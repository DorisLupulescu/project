import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { EditComponent } from "./edit/edit.component";
import { AppRoutingModule } from "./app-routing.module";
import { CommunicationService } from "./communication.service";
import { RefreshCatsService } from "./refresh-cats.service";

@NgModule({
  declarations: [AppComponent, EditComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CommunicationService, RefreshCatsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
