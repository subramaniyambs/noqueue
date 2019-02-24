import { Component, OnInit } from '@angular/core';
import { ResturantServiceService } from '../resturant-service.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-restuarant',
  templateUrl: './create-restuarant.component.html',
  styleUrls: ['./create-restuarant.component.css']
})
export class CreateRestuarantComponent implements OnInit {
  resturantForm: FormGroup;
  constructor(private api: ResturantServiceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.resturantForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'area': [null, Validators.required],
    });
  }

  onFormSubmit(form: NgForm) {
    this.api.addRestuaraant(form)
      .subscribe(res => {
        // let id = res['_id'];
        // this.router.navigate(['/book-details', id]);
      }, (err) => {
        console.log(err);
      });
  }

}
