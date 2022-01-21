import { Component, Input } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';

import { NzTreeFlatDataSource, NzTreeFlattener } from 'ng-zorro-antd/tree-view';
import { Router } from '@angular/router';
interface FoodNode {
  name: string;
  disabled?: boolean;
  path?: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Bug',
    path: '/home',
    children: [
      { name: 'home.page.ts', path: '/home' },
      { name: 'skills.page.ts', path: '/skills' },
      { name: 'contact.page.ts', path: '/contact' },
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  disabled: boolean;
}

@Component({
  selector: 'app-code-editor-tree ',
  templateUrl: './code-editor-tree.component.html',
})
export class AppCodeEditorTreeComponent {
  private transformer = (node: FoodNode, level: number) => ({
    expandable: !!node.children && node.children.length > 0,
    name: node.name,
    level,
    disabled: !!node.disabled,
    path: node.path,
  });
  selectListSelection = new SelectionModel<ExampleFlatNode>();

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new NzTreeFlattener(
    this.transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new NzTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private router: Router) {
    this.dataSource.setData(TREE_DATA);
  }

  hasChild = (_: number, node: ExampleFlatNode): boolean => node.expandable;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.treeControl.expand(this.getNode('Bug')!);
    }, 300);
  }

  getNode(name: string): ExampleFlatNode | null {
    return this.treeControl.dataNodes.find((n) => n.name === name) || null;
  }

  onClick(node) {
    this.router.navigateByUrl(node.path);
    return this.selectListSelection.toggle(node);
  }

  onSelect(node) {
    return this.selectListSelection.isSelected(node);
  }
}
