import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  userId = null;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  signin() {
    this.router.navigate(['', 'dashboard'], { queryParams: { userId: this.userId } });
  }

}
