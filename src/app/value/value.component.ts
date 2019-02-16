import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Values } from '../models/values';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  constructor(private http:HttpClient) { }

  values:Values[]=[];

  ngOnInit() {
    this.getValues().subscribe(data =>{
      this.values = data;
    });
  }

  getValues(){
    return this.http.get<Values[]>("http://localhost:60534/api/values");
  }
}
