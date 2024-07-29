import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTreeNestedDataSource, MatTreeModule} from '@angular/material/tree';
import {NestedTreeControl} from '@angular/cdk/tree';

interface dummyNode {
  name: string;
  children?: dummyNode[];
}

@Component({
  selector: 'app-left-panel',
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule],
  templateUrl: './left-panel.component.html',
  styleUrl: './left-panel.component.scss'
})
export class LeftPanelComponent {

  constructor() {
    this.dataSource.data = this.treeData;
  }

  isLeftPanelCollapsed:boolean=true;

  handleExpandCollapse()
  {
    this.isLeftPanelCollapsed=!this.isLeftPanelCollapsed;
  }

 

   treeData = [
    
    {
      name: 'Front brake',
      children: [
        {
          name: 'Front Brake Lever',
          children: [{name: 'Subsub1'}],
        },
        
      ],
    },
  ];

  treeControl = new NestedTreeControl<dummyNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<dummyNode>();

  hasChild = (_: number, node: dummyNode) => !!node.children && node.children.length > 0;
}
