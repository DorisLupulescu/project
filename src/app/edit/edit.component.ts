import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { CommunicationService, Cat } from "../communication.service";
import { Observable } from "rxjs";
import { RefreshCatsService } from "../refresh-cats.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  id: string;
  editMode = false;
  cat: Observable<Cat>;

  editForm: FormGroup;
  isEditing = true;

  constructor(
    private route: ActivatedRoute,
    private communication: CommunicationService,
    private router: Router,
    public refresh: RefreshCatsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params["id"];
      this.initForm();
      this.editMode = params["id"] != null;
    });

    this.initForm();
  }

  initForm() {
    let catName = "";
    let catColor = "";

    if (this.editMode) {
      this.cat = this.communication.getCatById(this.id);
      this.cat.subscribe(data => {
        catName = data.name;
        catColor = data.color;
        this.editForm.get("name").patchValue(catName);
        this.editForm.get("color").patchValue(catColor);
      });
    }

    this.editForm = new FormGroup({
      name: new FormControl(catName, [
        Validators.required,
        Validators.minLength(2)
      ]),
      color: new FormControl(catColor, [
        Validators.required,
        Validators.minLength(2)
      ])
    });
  }

  onSave() {
    let newCat = <Cat>{};
    newCat.name = this.editForm.get("name").value;
    newCat.color = this.editForm.get("color").value;
    this.communication.createCat(newCat).subscribe(() => {
      this.refresh.hasChanged.next(true);
      this.router.navigate(["/"]);
    });
  }

  onUpdate() {
    let newCat = <Cat>{};
    newCat.name = this.editForm.get("name").value;
    newCat.color = this.editForm.get("color").value;
    this.communication.updateCat(newCat, this.id).subscribe(() => {
      this.refresh.hasChanged.next(true);
      this.router.navigate(["/"]);
    });
  }

  onCancel() {
    this.editForm.reset();
    this.editMode = false;
    this.refresh.hasChanged.next(false);
    this.router.navigate(["/"]);
  }
}
