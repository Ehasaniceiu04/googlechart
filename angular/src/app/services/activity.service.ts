import { Injectable } from '@angular/core';
import { ActivityModel } from '../model/activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  activities: ActivityModel[] = [
    { activityName: 'Office Work', activityHour: 8 },
    { activityName: 'Sleeping', activityHour: 7 },
    { activityName: 'Watching Movie', activityHour: 2 },
    { activityName: 'Reading Books', activityHour: 3 },
  ]
  constructor() { }

  getAll() {
    return this.activities;
  }
}
