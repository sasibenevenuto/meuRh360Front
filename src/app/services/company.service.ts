import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Registration } from "../model/registration.model";
import { Observable } from "rxjs";

@Injectable()
export class CompanyService {
    url = "https://localhost:7177";

    constructor(private http: HttpClient) {

    }

    registration(model: Registration): Observable<any> {
        return this.http.post<any>(`${this.url}/api/User`, model);
    }
}