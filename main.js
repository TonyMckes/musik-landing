import Splide from '@splidejs/splide'
import '@splidejs/splide/css'
import './style.css'

document.addEventListener('DOMContentLoaded', function () {
  new Splide('#slider1', {
    width: '100vw',
    perPage: 5,
    gap: '2rem',
    type: 'loop',
    focus: 'center',
    isNavigation: true,
    speed: 250,
    breakpoints: {
      768: {
        perPage: 2,
      },
      1024: {
        perPage: 3,
      },
    },
    // rewind: true,
  }).mount()

  new Splide('#slider2', {
    // width: '100vw',
    fixedWidth: '50%',
    perPage: 2.5,
    gap: '2rem',
    type: 'loop',
    focus: 'center',
    isNavigation: true,

    speed: 250,
    // breakpoints: {
    //   768: {
    //     perPage: 2,
    //   },
    //   1024: {
    //     perPage: 3,
    //   },
    // },
    // rewind: true,
  }).mount()
  new Splide('#slider3', {
    // width: '100vw',
    // fixedWidth: '50%',
    perPage: 5,
    gap: '2rem',
    type: 'loop',
    focus: 'center',
    isNavigation: true,

    speed: 250,
    // breakpoints: {
    //   768: {
    //     perPage: 2,
    //   },
    //   1024: {
    //     perPage: 3,
    //   },
    // },
    // rewind: true,
  }).mount()
})
