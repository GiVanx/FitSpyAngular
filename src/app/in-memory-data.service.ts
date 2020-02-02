import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import {
  TRAINING_SESSION,
  EXERCISE_SESSION,
  SET_SESSION
} from "./mock-data/data";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let trainingSession = TRAINING_SESSION;
    let exerciseSession = EXERCISE_SESSION;
    let setSession = SET_SESSION;
    return { trainingSession, exerciseSession, setSession };
  }
}
