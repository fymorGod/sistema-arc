import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = 'Luiz'
  userData = {
    email: "luiz@gmail.com",
    avatar: "url_da_imagem"
  }
  title = 'sistema-arc';
}
