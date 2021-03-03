import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CommonService } from './service/common.service';

@Component({
    selector: 'fundamental-ngx-root',
    templateUrl: './app.component.html',
})
export class AppComponent {

    title$: Observable<string>;

    constructor(
        private commonService: CommonService,
        private titleService: Title,
    ) {
        this.title$ = this.commonService.$title.pipe(delay(0));
    }
}