import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-float',
  templateUrl: './float.component.html',
  styleUrls: ['./float.component.css']
})
export class FloatComponent implements OnInit {

  newArr = [];

  constructor(private router: Router) { }

  ngOnInit() { }

  myArray = [];
  onSubmit(val) {
    this.myArray.push(val);
    localStorage.setItem("user", JSON.stringify(this.myArray));
    (document.getElementById("names") as HTMLInputElement).value = '';
    (document.getElementById("ages") as HTMLInputElement).value = '';
    // console.log("Values", this.myArray);

  }

  view() {
    this.router.navigate(['/jump']);
  }

}
