import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(private meta: Meta) {}
  generateTag(config:any) {
    config = {
      title: 'Black-Bullock',
      description: 'Obras Civiles & Movimiento de Suelos ',
      image: '',
      slug: 'https://www.black-bullock.com/',
      ...config,
    };
    // this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    // this.meta.updateTag({ name: 'twitter:site', content: '@Black-Bullock' });
    // this.meta.updateTag({ name: 'twitter:title', content: config.title });
    // this.meta.updateTag({
    //   name: 'twitter:description',
    //   content: config.description,
    // });
    // this.meta.updateTag({ name: 'twitter:image', content: config.image });

    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({
      property: 'og:site_name',
      content: 'black-bullock',
    });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({
      property: 'og:description',
      content: config.description,
    });
    this.meta.updateTag({ property: 'og:image', content: config.image });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.black-bullock.com/',
    });
  }
}
