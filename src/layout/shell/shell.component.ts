import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopbarComponent } from '../topbar/topbar.component';

@Component({
  selector: 'md-shell',
  templateUrl: 'shell.component.html',
  styleUrl: 'shell.component.css',
  imports: [RouterOutlet, SidebarComponent, TopbarComponent],
})
export class ShellComponent {}
