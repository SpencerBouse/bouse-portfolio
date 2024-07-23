import gsap from "gsap";

type gsapOptions = {
  duration?: number;
  scaleTo?: number;
  opacity?: number;
  delay?: number;
  ease?: string;
}

export function onBeforeEnter(el: any, scaleFrom = 0.6, opacityFrom = 0) {
  gsap.set(el, {
    scale: scaleFrom,
    opacity: opacityFrom
  })
}

export function onEnter(el: Element, done: any, options: gsapOptions = {}) {
  const { duration = 1, scaleTo=1, opacity = 1, delay = 0, ease = "elastic.out(1,0.5)"} = options

  gsap.to(el, {
    duration: duration,
    scale: scaleTo,
    delay: delay,
    opacity: opacity,
    ease: ease,
    onComplete: done
  });
}

export function onLeave(el: Element, done: any, options: gsapOptions = {}) {
  const {duration = .25, scaleTo = 0.6, opacity = 0, delay = 0, ease= "elastic.in(1,1)"} = options

  gsap.to(el, {
    duration: duration,
    scale: scaleTo,
    opacity: opacity,
    delay: delay,
    ease: ease, 
    onComplete: done
  })
}

export function onLeaveClose(el: Element, done: any) {
  gsap.to(el, {
    duration: .5,
    scale: .6,
    opacity: 0,
    ease: "elastic.in(1,1)",
    onComplete: done
  })
}

export function onEnterSlide(el: Element, done: any, dir: number) {
  gsap.fromTo(el, {
    xPercent: dir * 110
  },{ 
    duration: .5,
    xPercent: 0,
    onComplete: done 
  })
}

export function onLeaveSlide(el: Element, done: any, dir: number) {
  gsap.fromTo(el, {
    xPercent: 0
  },{ 
    duration: .5,
    xPercent: -dir*110,
    onComplete: done 
  })
}

export function onEnterDropDown(el: Element, done: any, duration=.5) {
  gsap.from(el, {
    duration: duration,
    height: 0,
    ease: "power2.out",
    onComplete: done
  })
}

export function onLeaveDropDown(el: Element, done: any, duration=.3) {
  gsap.to(el, {
    duration: duration,
    height: 0,
    ease: "power2.in",
    onComplete: done,
  })
}

export function onLeaveLoad(el: Element, done: any) {
  gsap.set(el, { position: 'absolute', zIndex: 10, bottom: 0, transformOrigin: "center center"})

  gsap.to(el.children, {
      duration: .25,
      opacity: 0,
      ease: "none"
  })
  gsap.to(el, {
    duration: .4,
    scaleY: .05,
    ease: "power4.out",
  })
  gsap.to(el, {
    duration: .2,
    scaleX: 0,
    scaleY: 0,
    delay: .35,
    ease: "power4.out",
    onComplete: done
  })
}