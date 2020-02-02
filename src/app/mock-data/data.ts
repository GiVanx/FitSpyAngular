export const EXERCISE_1 = {
  id: 1,
  name: "Push-ups"
};

export const EXERCISE_2 = {
  id: 2,
  name: "Pull-ups"
};

export const EXERCISE_SET_PLAN_1 = {
  id: 1,
  reps: 10,
  weight: 20
};

export const EXERCISE_SET_PLAN_2 = {
  id: 2,
  reps: 10,
  weight: 20
};

export const EXERCISE_SET_PLAN_3 = {
  id: 3,
  reps: 10,
  weight: 20
};

export const EXERCISE_SET_PLAN_4 = {
  id: 4,
  reps: 10,
  weight: 20
};

export const EXERCISE_PLAN_1 = {
  id: 1,
  exercise: EXERCISE_1,
  exerciseSetPlans: [EXERCISE_SET_PLAN_1, EXERCISE_SET_PLAN_2]
};

export const EXERCISE_PLAN_2 = {
  id: 2,
  exercise: EXERCISE_2,
  exerciseSetPlans: [EXERCISE_SET_PLAN_3, EXERCISE_SET_PLAN_4]
};

export const TRAINING_PLAN = {
  id: 1,
  name: "Monday Plan",
  exercisePlans: [EXERCISE_PLAN_1, EXERCISE_PLAN_2]
};

export const SET_SESSION_1 = {
  id: 1,
  exerciseSetPlan: EXERCISE_SET_PLAN_1,
  countCompleted: 0
};

export const SET_SESSION_2 = {
  id: 1,
  exerciseSetPlan: EXERCISE_SET_PLAN_2,
  countCompleted: 0
};

export const EXERCISE_SESSION_1 = {
  id: 1,
  exercisePlan: EXERCISE_PLAN_1,
  exerciseSetSessions: [SET_SESSION_1, SET_SESSION_2],
  completed: false
};

export const SET_SESSION_3 = {
  id: 3,
  exerciseSetPlan: EXERCISE_SET_PLAN_3,
  countCompleted: 0
};

export const SET_SESSION_4 = {
  id: 4,
  exerciseSetPlan: EXERCISE_SET_PLAN_4,
  countCompleted: 0
};

export const EXERCISE_SESSION_2 = {
  id: 2,
  exercisePlan: EXERCISE_PLAN_2,
  exerciseSetSessions: [SET_SESSION_3, SET_SESSION_4],
  completed: false
};

export const TRAINING_SESSION_1 = {
  trainingPlan: TRAINING_PLAN,
  isActive: true,
  completed: false,
  exerciseSessions: [EXERCISE_SESSION_1, EXERCISE_SESSION_2]
};

export const TRAINING_SESSION = [TRAINING_SESSION_1];
export const EXERCISE_SESSION = [EXERCISE_SESSION_1, EXERCISE_SESSION_2];
export const SET_SESSION = [
  SET_SESSION_1,
  SET_SESSION_2,
  SET_SESSION_3,
  SET_SESSION_4
];
