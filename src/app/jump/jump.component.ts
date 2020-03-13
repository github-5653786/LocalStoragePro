import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jump',
  templateUrl: './jump.component.html',
  styleUrls: ['./jump.component.css']
})
export class JumpComponent implements OnInit {

  arr = [];

  constructor(private router: Router) {
    this.arr = JSON.parse(localStorage.getItem("user"));
  }
  ngOnInit() { }

  adduser() {
    this.router.navigate(['/float'])
  }

  delete(i) {
    if (i == 0) {
      alert("You cannot delete first data")
    } else {
      this.arr.splice(i, 1);
    }
  }

  edit(index) {
    localStorage.setItem("edituser", JSON.stringify(this.arr[index]));
    localStorage.setItem("idexes", JSON.stringify(index));
    this.router.navigate(['/edit']);
  }

}
