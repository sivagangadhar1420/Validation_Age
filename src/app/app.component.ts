import { Component } from '@angular/core';
@Component({
  selector: 'app-root',

  template:
   `<div> 
   <div><b>If Ex1:</b><br>
        <span *ngIf='b1'>Hi1</span>
        <span *ngIf='!b1'>Hi2</span>
        <span *ngIf='b1 && b2'>Hi3</span>
        <span *ngIf='b1 || b2'>Hi4</span>
   </div>
   <div><b>If Else Ex2:</b><br>
      <ng-template *ngIf='!b3;then Go1;else Go2'></ng-template>
      <ng-template #Go1>
        <p>Welcome to Session</p>
      </ng-template>
      <ng-template #Go2>
        <p>Bye from Session</p>
      </ng-template>
   </div>
   <div><b>If Else Ex3:</b><br>
      <ng-template *ngIf='checkAge();then Move1;else Move2'></ng-template>
      <ng-template #Move1>
        <p [class]='c1'>Valid for voting</p>
      </ng-template>
      <ng-template #Move2>
        <p>Invalid for voting</p>
      </ng-template>
   </div>
  </div>
          `,
  
})
export class AppComponent 
{
  age:number=17;
  c1:string='green';
  c2:string='red';
  b1:boolean=false;
  b2:boolean=true;

  b3:boolean=false;  
  b4:boolean=true;
  checkAge():boolean
  {
    if(this.age>=18)
      return this.b4;
    else
     return this.b3;
    //return this.b3;
  }
}
