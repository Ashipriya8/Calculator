import { Component } from '@angular/core';
import { isNumber } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
value='0';
oldvalue='0';
operator='';
newvalue= true;
Group=[
  [7,8,9,'*'],
  [4,5,6,'-'],
  [1,2,3,'+'],
  [0,'C','/','=']

];
  
onButtonclick(symbol)
{
console.log(symbol);
if(isNumber(symbol))
{
  console.log('is a number');
  if(this.newvalue)
  this.value=''+symbol;
  else
  this.value+=''+symbol;
  this.newvalue=false;
}
else if(symbol==='C')
{
  this.value='0';
  this.newvalue=true;
}
else if(symbol ==='=')
{
  if(this.operator ==='*')
  this.value=''+(parseInt(this.oldvalue)*parseInt(this.value))
  else if(this.operator==='-')
  this.value=''+(parseInt(this.oldvalue)-parseInt(this.value))
  else if(this.operator === '+')
  this.value=''+(parseInt(this.oldvalue)+parseInt(this.value))
  else if(this.operator === '/')
  this.value=''+(parseInt(this.oldvalue)/parseInt(this.value))
  this.newvalue=true;
}
 else
 {
  this.newvalue=true;
  this.oldvalue=this.value;
  this.operator=symbol
}
}

}
