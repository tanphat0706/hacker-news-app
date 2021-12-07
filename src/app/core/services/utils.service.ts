import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UtilsService {
    private previousUrl: BehaviorSubject<string> = new BehaviorSubject<any>(null);
    public previousUrl$: Observable<string> = this.previousUrl.asObservable();
    constructor() {}

    stringReplaceWithInput(string: String, oldValue: any, newValue: any) {
        const newString = string.replace(oldValue, newValue);
        return newString;
    }

    convertTitleToSlug(title: String) {
        return title.toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
    }
}
