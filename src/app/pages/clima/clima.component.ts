import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClimaService } from '../../services/clima.service';
import { Clima, ClimaSubmit } from '../../models/clima';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent implements OnInit {
  
  clima = {} as Clima
  climaSubmit = {} as ClimaSubmit
  clima_result = {}
  
  constructor(
    public climaService: ClimaService,
    private activatedRoute: ActivatedRoute
  ) { 
  }

  ngOnInit(): void {
    //this.getClima();
  }

  onSubmit(customerData) {
    // Process checkout data here

    console.log('Your order has been submitted', customerData);
  }

  getClima() {
    navigator.geolocation.watchPosition(function(position){
      this.climaService.saveClimaDefault({long: position.coords.longitude, lat: position.coords.latitude}).subscribe((clima = this.clima) => {
        this.clima_result = clima;
      });
    })
  }

  save(form: NgForm){
    this.climaService.saveClima(this.climaSubmit).subscribe((result) => {
      console.log(result);
    });
  }

}