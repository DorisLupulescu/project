import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Cat {
  name: string;
  birtdate: Date;
  weight: number;
  color: string;
  toys: [any];
}

@Injectable({
  providedIn: "root"
})
export class CommunicationService {
  constructor(private httpClient: HttpClient) {}
  getAllCats(): Observable<Cat[]> {
    return this.httpClient.get<Cat[]>("http://localhost:3000/cats");
  }

  deleteCat(ID: string) {
    return this.httpClient.delete("http://localhost:3000/cats/" + ID);
  }

  getCatById(ID: string): Observable<Cat> {
    return this.httpClient.get<Cat>("http://localhost:3000/cats/" + ID);
  }

  createCat(cat: any): Observable<Cat> {
    return this.httpClient.post<Cat>("http://localhost:3000/cats/", cat);
  }

  updateCat(cat: any, ID: string): Observable<Cat> {
    return this.httpClient.put<Cat>("http://localhost:3000/cats/" + ID, cat);
  }
}
