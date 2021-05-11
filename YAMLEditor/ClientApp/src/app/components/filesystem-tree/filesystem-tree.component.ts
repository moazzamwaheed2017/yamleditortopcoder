import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

interface FilesNode {
  name: string;
  children?: FilesNode[];
}


/** Flat node with expandable and level information */
interface FileFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-filesystem-tree',
  templateUrl: './filesystem-tree.component.html',
  styleUrls: ['./filesystem-tree.component.scss']
})
export class FilesystemTreeComponent implements OnInit {

  constructor() {
    this.dataSource.data = this.data;
  }

  data: FilesNode[] = [
    {
      name: 'Fruit'
    },
    {
      name: 'Vegetables'
    },
    {
      name: 'Fruit'
    },
    {
      name: 'Vegetables'
    },
    {
      name: 'Fruit'
    },
    {
      name: 'Vegetables'
    },
    {
      name: 'Fruit'
    },
    {
      name: 'Vegetables'
    }
  ];

  private _transformer = (node: FilesNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level,
    };
  }

  treeControl = new FlatTreeControl<FileFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);



  ngOnInit(): void {
  }



  hasChild = (_: number, node: FileFlatNode) => node.expandable;

}
