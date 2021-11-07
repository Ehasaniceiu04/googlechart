import { Injectable } from '@angular/core';
import { MetalModel } from '../model/metal.model';

@Injectable({
  providedIn: 'root'
})
export class MetalService {
  metals: MetalModel[] = [
    { metalName: 'Copper', density: 8.94, style: '#b87333', label: 'Cu' },
    { metalName: 'Silver', density: 10.49, style: 'silver', label: 'Ag' },
    { metalName: 'Gold', density: 19.30, style: 'gold', label: 'Au' },
    { metalName: 'Platinum', density: 21.45, style: 'color:#e5e4e2', label: 'Pt' },
  ]
  constructor() { }
  getAll() {
    return this.metals;
  }
}
