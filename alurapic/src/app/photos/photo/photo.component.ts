import { Component, Input } from '@angular/core';

const CLOUD = 'http://localhost:3000/imgs/'

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {
    private _url = '';
    
    @Input() alt = '';
    @Input() set src(src: string) {
        if (!src.startsWith('data')) {
            this._url = CLOUD + src; 
        } else {
            this._url = src;
        }
    }

    get src() {
        return this._url;
    }
}