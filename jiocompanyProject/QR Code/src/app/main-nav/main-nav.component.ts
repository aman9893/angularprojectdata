import { Component } from '@angular/core';
import $ from "jquery";
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  events=[];


  add(){

    $('.list_item').on('click', function(){
      $('.list_item').removeClass('active1');
      $(this).addClass('active1');
      
  });
  }
}
