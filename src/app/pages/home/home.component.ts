import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { AuthService, EventManagerService } from "@core/services";
import { Events } from "@shared/constants";
import { User } from "@shared/models";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user!: User;

  authService: AuthService = inject(AuthService);
  eventManagerService: EventManagerService = inject(EventManagerService);

  ngOnInit(): void {
    const user = this.authService.getUserFromToken();

    this.eventManagerService.register(Events['tokenUser'], user);
    this.eventManagerService.publish(Events['tokenUser'], user);

    this.user = user;
  }
}
