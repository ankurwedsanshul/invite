import { Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Injectable()
export class ScrollServiceService {

  constructor(private _scrollToService: ScrollToService) { }
  public triggerScrollTo() {

    /**
     * @see NOTE:1
     */
    const config: ScrollToConfigOptions = {
      container: 'detailPane',
      duration: 650,
      easing: 'easeOutElastic',
      offset: 20
    };

    this._scrollToService.scrollTo(config);
  }
}
