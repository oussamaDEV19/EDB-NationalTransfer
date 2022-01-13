import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user-suc',
  templateUrl: './add-user-suc.component.html',
  styleUrls: ['./add-user-suc.component.css']
})
export class AddUserSucComponent implements OnInit {

  public detail:string;
  
  constructor(private route:ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.detail=this.route.snapshot.paramMap.get('infosAcc');
  }

}
