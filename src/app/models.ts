// Plans

export class TrainingPlan {
  id: number;
  name: string;
  exercisePlans: ExercisePlan[];
}

export class ExercisePlan {
  id: number;
  exercise: Exercise;
  exerciseSetPlans: ExerciseSetPlan[];
}

export class ExerciseSetPlan {
  id: number;
  reps: number;
  weight: number;
}

// Plan Sessions

export class TrainingSession {
  id: number;
  trainingPlan: TrainingPlan;
  isActive: boolean;
  completed: false;
  exerciseSessions: ExerciseSession[];
}

export class ExerciseSession {
  id: number;
  exercisePlan: ExercisePlan;
  exerciseSetSessions: ExerciseSetSession[];
  completed: false;
}

export class ExerciseSetSession {
  id: number;
  exerciseSetPlan: ExerciseSetPlan;
  countCompleted: number;
}

export class Exercise {
  id: number;
  name: string;
}
