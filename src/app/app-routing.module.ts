import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TrainingSessionComponent } from "./training-session/training-session.component";

const routes: Routes = [
  { path: "", redirectTo: "/training-session", pathMatch: "full" },
  { path: "training-session", component: TrainingSessionComponent }
  // {
  //   path: "training-session/:trainingSessionId/exercise-session",
  //   component: ExerciseSessionComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
