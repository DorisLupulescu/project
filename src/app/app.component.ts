import { Component, OnInit, OnChanges, DoCheck } from "@angular/core";
import { CommunicationService, Cat } from "./communication.service";
import { Observable } from "rxjs";
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { RefreshCatsService } from "./refresh-cats.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "project";
  catsObs: Observable<Cat[]>;
  cats: Cat[];
  changed = false;
  isEdit = false;

  constructor(
    private communicationS: CommunicationService,
    private refresh: RefreshCatsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initCats();
    this.refresh.hasChanged.subscribe(data => {
      if (data) {
        this.initCats();
      }
    });
  }

  initCats() {
    this.catsObs = this.communicationS.getAllCats();
    this.catsObs.subscribe((catData: []) => {
      this.cats = catData;
    });
  }

  getCats() {
    if (this.cats) return this.cats;
  }

  isEditing() {
    this.refresh.isEditing = true;
  }

  onDelete(cat: string) {
    if (confirm("Are you sure you want to delete this entry ? ")) {
      this.communicationS.deleteCat(cat).subscribe(() => {
        this.refresh.isEditing = false;
        this.router.navigate(["/"]);
        this.initCats();
      });
    } else {
      alert("The cat was not deleted");
    }
  }
}
