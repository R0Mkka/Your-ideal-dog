import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface canComponentDeactivate {
    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CloseTestGuard implements CanDeactivate<canComponentDeactivate> {
    canDeactivate(
        component: canComponentDeactivate): Observable<boolean> | Promise<boolean> | boolean {
            return component.canDeactivate ? component.canDeactivate() : true;
        }
}