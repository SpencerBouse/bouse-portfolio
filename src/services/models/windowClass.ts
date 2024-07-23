
interface InnerSize {
  x: number;
  y: number;
}
interface Position {
  x: number;
  y: number;
  z: number;
}
interface WindowOptions {
  title?: string;
  icon?: string;
  text?: string;
  img?: string;
  altText?: string;
  link?: string;
  from?: string;
  reactive?: boolean;
}

class OptionsClass {
  title?: string;
  icon?: string;
  text?: string;
  img?: string;
  altText?: string;
  link?: string;
  from?: string;
  reactive?: boolean;

  constructor (title?: string, icon?: string, text?: string, img?: string, altText?: string, link?: string, from?: string, reactive?: boolean){
    this.title = title;
    this.icon = icon;
    this.text = text;
    this.img = img;
    this.altText = altText;
    this.link = link;
    this.from = from;
    this.reactive = reactive;
  }
}

export class WindowClass {
  id: number;
  color: string;
  innerSize: InnerSize;
  position: Position;
  options!: WindowOptions;

  constructor( id:number, color:string,  innerSize = {x:0,y:0}, position = {x:0,y:0,z:1}, options: WindowOptions = {} ) {
    const { title,icon,text,img,altText,link,from,reactive } = options

    this.id = id;
    this.color = color;
    this.innerSize = innerSize;
    this.position = position;
    this.options = new OptionsClass(title,icon,text,img,altText,link,from,reactive)
  }
}