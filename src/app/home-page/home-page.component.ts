import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import SwiperCore, { Navigation,SwiperOptions,Autoplay,Scrollbar  } from 'swiper';
SwiperCore.use([Navigation,Autoplay,Scrollbar]);

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  term: any;
  constructor(private http: HttpClient, private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    const starSpan = this.el.nativeElement.querySelector('#start-count'); // Assuming you have the element with id "start-count" in your HTML

    this.http.get<any>('https://api.github.com/repos/EnsembleUI/ensemble').subscribe(
      (data) => {
        this.renderer.setProperty(starSpan, 'textContent', data.stargazers_count);
      },
      (error) => {
        console.error('Error fetching GitHub data:', error);
      }
    );
  }

  configPartners: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 24,

    speed:2500,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      // when window width is >= 320px
      160: {
        slidesPerView: 1.25,
        spaceBetween: 24,
        autoplay: {
          delay: 1500,
        },
      },
      320: {
        slidesPerView: 1.25,
        spaceBetween: 24,
        autoplay: {
          delay: 1500,
        },
      },
      // when window width is >= 480px
      428: {
        slidesPerView:1.25,
        spaceBetween: 24,
        autoplay: {
          delay: 1500,
        },
      },
      // when window width is >= 767px
      767: {
        slidesPerView: 2.45,
        spaceBetween: 24,
        autoplay: {
          delay: 1500,
        },
      },
      // when window width is >= 991px
      991: {
        slidesPerView: 3.75,
        spaceBetween: 24,
        autoplay: {
          delay: 1500,
        },
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3.3,
        spaceBetween: 24,
        autoplay: {
          delay: 1500,
        },
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 24,
        autoplay: {
          delay: 1500,
        },
      },

    }

  };
  onSwiper(swiper: any) {
  }
  onSlideChange() {
  }
  clearSearch() {
    this.term = '';
  }
  slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );

}
