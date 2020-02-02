import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TrainingSession } from "./models";

@Injectable({
  providedIn: "root"
})
export class TrainingSessionService {
  trainingSessionsUrl = "api/trainingSession";

  constructor(private http: HttpClient) {}

  getActiveSession() {
    return this.http.get<TrainingSession[]>(
      this.trainingSessionsUrl + "?isActive=true"
    );
  }
}
