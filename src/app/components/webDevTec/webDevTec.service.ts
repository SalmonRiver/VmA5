module vmA5 {
  'use strict';

  export interface ITecThing {
    rank: number;
    title: string;
    url: string;
    description: string;
    logo: string;
  }

  export class WebDevTecService {
    public data: ITecThing[];

    public get tec(): ITecThing[] {
      return this.data;
    }

    /** @ngInject */
    constructor() {
      var rawData = [
        {
          'title': 'AngularJS',
          'url': 'https://angularjs.org/',
          'description': 'HTML enhanced for web apps!',
          'logo': 'angular.png'
        }, {
          'title': 'Angular UI Bootstrap',
          'url': 'http://angular-ui.github.io/bootstrap/',
          'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
          'logo': 'ui-bootstrap.png'
        },
        {
          'title': 'Bootstrap',
          'url': 'http://getbootstrap.com/',
          'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
          'logo': 'bootstrap.png'
        },
        {
          'title': 'TypeScript',
          'url': 'http://www.typescriptlang.org/',
          'description': 'TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.',
          'logo': 'typescript.png'
        },
        {
          'title': 'BrowserSync',
          'url': 'http://browsersync.io/',
          'description': 'Time-saving synchronised browser testing.',
          'logo': 'browsersync.png'
        },
        {
          'title': 'GulpJS',
          'url': 'http://gulpjs.com/',
          'description': 'The streaming build system.',
          'logo': 'gulp.png'
        },


        {
          'title': 'Less',
          'url': 'http://lesscss.org/',
          'description': 'Less extends the CSS language, adding features that allow variables, mixins, functions and many other techniques.',
          'logo': 'less.png'
        },

      ];

      this.data = rawData.map((awesomeThing: ITecThing) => {
        //   awesomeThing.rank = Math.random();
        return awesomeThing;
      });
    }
  }

}
