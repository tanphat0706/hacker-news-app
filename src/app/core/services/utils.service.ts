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

    setPreviousUrl(previousUrl: string) {
        this.previousUrl.next(previousUrl);
    }
}
