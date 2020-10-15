import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent implements OnInit {
  checkoutForm;
  
  constructor(
    private activatedRoute: ActivatedRoute
  ) { 
  }

  ngOnInit(): void {
  }

  onSubmit(customerData) {
    // Process checkout data here

    console.log('Your order has been submitted', customerData);
  }

}