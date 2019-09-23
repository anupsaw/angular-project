import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ang-mat-ext',
  templateUrl: './ang-mat-ext.component.html',
  styleUrls: ['./ang-mat-ext.component.scss']
})
export class AngMatExtComponent implements OnInit {

  public angMatForm: FormGroup;
  constructor(private readonly fb: FormBuilder) { }

  ngOnInit() {
    this.angMatForm = this.fb.group({
      name: ['', Validators.required]
    })
  }

  printForm(): void {
    console.log(this.angMatForm);
  }

}
