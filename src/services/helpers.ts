import { WindowClass } from "./models/windowClass"

const popups: string[] = []
let colors: string[] = []

function random(array: string[]):string {
  const i = array[Math.floor(Math.random()*array.length)]
  array.splice(array.indexOf(i), 1)

  return i
}

export function resetColors() {
  colors = ['green', 'blue', 'red', 'yellow']
}

export function randomColor() {
  if(!colors.length) resetColors()
  
  return random(colors)
}

export function randomPopup() {
  if(!popups.length){
    popups.push('virus', 'adblock', 'money')
  }
  
  return random(popups)
}

export function updateWindowOrders(i: any, windows:WindowClass[]) {
  const min = 3
  const max = 3 + (windows.length -1)
  windows.forEach(win=>{
    if(win.position.z > min && win.position.z >= windows[i].position.z) win.position.z--
  })
  windows[i].position.z = max
}