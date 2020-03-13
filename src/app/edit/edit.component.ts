import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  arra = [];
  constructor(private router: Router) {
    this.arra.push(JSON.parse(localStorage.getItem("edituser")));
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/jump']);
  }

  onSubmit() {
    let cnfrm = confirm("Are you sure to update values.......?");
    if (cnfrm) {
      let users = JSON.parse(localStorage.getItem("user"));
      let ind = JSON.parse(localStorage.getItem("idexes"));
      let a = (document.getElementById("names") as HTMLInputElement).value;
      let b = (document.getElementById("ages") as HTMLInputElement).value;

      users[ind].name = a;
      users[ind].age = b;

      localStorage.setItem("user", JSON.stringify(users));
      this.router.navigate(['/jump'])
    } else {
      alert("Values not updated.")
    }
  }
}
