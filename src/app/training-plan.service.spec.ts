import { TestBed } from '@angular/core/testing';

import { TrainingPlanService } from './training-plan.service';

describe('TrainingPlanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainingPlanService = TestBed.get(TrainingPlanService);
    expect(service).toBeTruthy();
  });
});
