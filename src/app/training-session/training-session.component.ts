import { Component, OnInit } from "@angular/core";
import { TrainingSessionService } from "../training-session.service";
import { TrainingSession } from "../models";
import { tap, first, map, flatMap } from "rxjs/operators";
import { from, of } from "rxjs";

@Component({
  selector: "app-training-session",
  templateUrl: "./training-session.component.html",
  styleUrls: ["./training-session.component.css"]
})
export class TrainingSessionComponent implements OnInit {
  constructor(private sessionService: TrainingSessionService) {}

  activeSession: TrainingSession;

  ngOnInit() {
    this.getActiveSession();
  }

  getActiveSession() {
    this.sessionService
      .getActiveSession()
      .pipe(
        flatMap(session => session),
        tap(session => console.log("Active session: " + session)),
        first()
      )
      .subscribe(session => (this.activeSession = session));
  }
}
