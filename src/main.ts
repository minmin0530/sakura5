import './style.css'

const MAX_DIV = 30;
const RIGHT: number = 50;
const TOP: number = 2200;


const COLORS: string[] = [
  "#ff8888",
//  "#ff4444",
//  "#ff0000",
"#ffbbbb",
"#ffdddd",
//  "#bb4444",
//  "#bb0000",
//  "#884444",
//  "#880000",
];

class Div {
  static speed: number = MAX_DIV;
  div: HTMLDivElement;
  top: number;
  right: number;
  readonly topOrigin: number;
  readonly rightOrigin: number;

  constructor() {
    this.div = document.createElement("div");
    this.right = (RIGHT + Math.random() * 400 - RIGHT);
    this.rightOrigin = this.right;
    this.top = (TOP + Math.random() * 400 - 200);
    this.topOrigin = this.top;
    this.div.textContent = "●";
    this.div.style.color = COLORS[ Math.floor(COLORS.length * Math.random()) ];
    this.div.style.position = "absolute";
    this.div.style.right = this.right + "px";
    this.div.style.top = this.top + "px";
    this.div.style.fontSize = (Math.random() * 20) + "px";
    footerImage.appendChild(this.div);
  }

  update(speed: number): void {
    if (this.top == TOP) {
      if (Math.random() < speed * 2) {
        this.div.style.visibility = "visible";
      } else {
        this.div.style.visibility = "hidden";
      }
    }
    this.div.style.right = this.right + "px";
    this.right += 2.1 + speed;

    this.div.style.top = this.top + "px";
    this.top += 2.1 + speed;

    if (this.top > 2400) {
      this.top = TOP;
      this.right = this.rightOrigin;
    }
  }
}

const footerImage = document.getElementsByClassName("footer-image")[0] as HTMLDivElement;

const divs: Div[] = [];
for (let i = 0; i < MAX_DIV; i++) {
  divs.push( new Div() );
}

let time: number = 0.0;
function loop(): void {
  time += 0.002;
  if (time > 360) {
    time = 0;
  }
  for (const div of divs) {
    div.update((Math.cos(time) + 1) / 2);
  }

  requestAnimationFrame(loop);
}

loop();