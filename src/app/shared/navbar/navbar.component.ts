import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irUsuario(id: string) {
    // console.log(id);
    if (!id) {
      return;
    }
    this.router.navigateByUrl(`usuario/${id}`);
  }
}
