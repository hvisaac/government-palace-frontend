import { Component } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    StatusBar.setOverlaysWebView({ overlay: true }).catch(()=>{});;
    this.hideStatusBar().catch(()=>{});;
  }

  async ionViewWillEnter(){
    this.hideStatusBar();
  }

  async hideStatusBar () {
    await StatusBar.hide();
  };
}
