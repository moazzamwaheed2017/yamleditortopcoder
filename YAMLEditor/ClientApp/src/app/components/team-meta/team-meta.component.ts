import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UtilsService } from 'src/app/services/utils.service';
import { AppState } from 'src/app/store';
import { TreeStateData } from 'src/app/store/reducer/tree.reducer';
import { GroupNode } from '../group-tree/group-tree.component';

@Component({
  selector: 'app-team-meta',
  templateUrl: './team-meta.component.html',
  styleUrls: ['./team-meta.component.scss']
})
export class TeamMetaComponent implements OnInit {
  tree$: Observable<TreeStateData> =  this.store.select<TreeStateData>((state: any) => state.tree.data);
  tree: TreeStateData | null = null;
  node: GroupNode | null = null;
  breadcrumbs: string[] = [];

  constructor(private store: Store, private utilsSvc: UtilsService) {

  }

  pullAllNameFromTree() {

  }

  ngOnInit(): void {
    this.tree$.subscribe( tree => {
      this.tree = tree;

      if (this.tree && this.tree.node) {
        this.node = tree.node;

        const pos = this.tree.node.pos;
        this.breadcrumbs = this.utilsSvc.treeFetchBreadcrumbs(this.tree.layers, pos);
      }
    });
  }

}
