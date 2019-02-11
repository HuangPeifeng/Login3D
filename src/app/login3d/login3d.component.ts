import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login3d',
  templateUrl: './login3d.component.html',
  styleUrls: ['./login3d.component.scss']
})
export class Login3dComponent implements OnInit {
  width = '100';
  height = '100';
  myParams = {
    particles: {
      number: {
        value: 100,
      },
      color: {
        value: '#e35d5b'
      },
      shape: {
        type: 'circle',
      },
      line_linked: {
        color: '#ffffff'
      }
    },
    interactivity: {
      events: {
        onhover: {
          mode: 'repulse'
        }
      },
      modes: {
        repulse: {
          distance: 100
        }
      }
    }
  };
  myStyle = {
    'background': '#000000',
    'position': 'fixed',
    'width': '100vw',
    'height': '100vh'
  };

  isUserInput = false;
  isPassInput = false;
  isFocus = false;

  constructor() { }

  ngOnInit() {
  }

  focus(type) {
    if (type === 'user') {
      this.isUserInput = true;
      this.isPassInput = false;
    } else {
      this.isPassInput = true;
      this.isUserInput = false;
    }
    this.isFocus = true;
  }

  blur() {
    this.isUserInput = false;
    this.isPassInput = false;
    this.isFocus = false;
  }
}
