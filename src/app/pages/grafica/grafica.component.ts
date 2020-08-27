import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styles: [
  ]
})
export class GraficaComponent  {
  

  public labels1 : string[] = ['Pan', 'Refrescos','Tacos'];
  public  data1  = [
    [10,15,40],
  ];
  public colors1 =[
    {backgroundColor:['#6859E6','#010FEE','#F08769']}
   ];

}
