import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TrainingPlan } from "./models";

@Injectable({
  providedIn: "root"
})
export class TrainingPlanService {
  trainingPlanUrl = "api/trainingPlan";

  constructor(private http: HttpClient) {}

  getTrainingPlans() {
    return this.http.get<TrainingPlan[]>(this.trainingPlanUrl);
  }
}
