import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  beforeText: string;
  afterText: string;
  bodyText: string;

  splitRow: Array<string>;

  newText: string;

  constructor(private navCtrl: NavController) {
    this.beforeText = '';
    this.afterText = '';
    this.bodyText = '';
    this.newText = '';
  }

  ngOnInit() { }

  generateText() {
    this.newText = '';
    this.splitRow = this.bodyText.split('\n');

    for (let t of this.splitRow) {
      if (t != '') {
        let row_text: string = this.beforeText + t.toString() + this.afterText;
        this.newText += row_text + '\n';
      }
    }
  }

  setTag(tag: string) {
    if (tag == 'a') {
      this.beforeText = '<' + tag + ' href="">';
    } else {
      this.beforeText = '<' + tag + '>';
    }

    this.afterText = '</' + tag + '>';
  }
}
