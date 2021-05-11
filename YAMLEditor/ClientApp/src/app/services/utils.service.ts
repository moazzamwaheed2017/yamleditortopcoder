import { Injectable } from '@angular/core';
import { IData } from '../models/Data';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  treeFetchBreadcrumbs(tree: any, pos: any): string[] {
    const breadcrumbs = [];
    if (tree.length && !pos){
      pos = [0];
    }
    if (pos) {
      for (let i = 0; i < pos.length; i++) {
        breadcrumbs.push(tree[pos[i]].name);
        tree = tree[pos[i]].children;
      }
    }

    return breadcrumbs;
  }

  getMemberInfoFromGitlab(name: string, data: IData) {
    let found: any = data.gitlab.members.find(x => x.username === name);
    if (!found) {
      found = {username: name, name: '', email: '', employer: ''};
    }
    return found;
  }

  public _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  public searchFilter(itemType: 'string' | 'object', base: any, value: string): any[] {
    const filterValue = this._normalizeValue('' + value);
    if (itemType === 'string'){
      return base.filter((v: string) => this._normalizeValue('' + v).includes(filterValue));
    } else{
      return base.filter((v: any) => {
        return _.values(v).find( sv => this._normalizeValue('' + sv).includes(filterValue));
      });
    }

  }
}
