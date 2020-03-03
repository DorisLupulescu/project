import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { Cat, CommunicationService } from "./communication.service";

@Injectable({
  providedIn: "root"
})
export class RefreshCatsService {
  hasChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isEditing = true;

  constructor() {}

  // initCats(): Cat[] {
  //   this.catsObs = this.communicationS.getAllCats();
  //   this.catsObs.subscribe((catData: []) => {
  //     this.cats = catData;
  //   });
  //   return this.cats;
  // }
}
