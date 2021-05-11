import { Injectable } from '@angular/core';
import { TreeStateData } from '../store/reducer/tree.reducer';

@Injectable({
  providedIn: 'root'
})
export class DataTransformService {

  constructor() { }

  vendorListMap(d: any) {
    return {name: d.name, email: d.contact.email, location: d.contact.location};
  }

  getInitialSelectsData(x: TreeStateData) {
    if (x) {
      const pos = (x.node && x.node.level === 2) ? x.node.pos : [0, 0, 0];

      const streams = x.layers.map( sx => sx.name);
      const groups = x.layers[pos[0]].children.map((sx: any) => sx.name);
      const teams = x.layers[pos[0]].children[pos[1]].children.map((sx: any) => sx.name);

      return {
        streams,
        groups,
        teams,
        stream: x.layers[pos[0]].name,
        group: x.layers[pos[0]].children[pos[1]].name,
        team: x.layers[pos[0]].children[pos[1]].children[pos[2]].name
      };
    }
    return null;
  }
}
