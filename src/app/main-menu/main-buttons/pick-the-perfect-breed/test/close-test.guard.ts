import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface canComponentDeactivate {
    confirm(): boolean;
}

@Injectable()
export class CloseTestGuard implements CanDeactivate<canComponentDeactivate> {
    canDeactivate(
        component: canComponentDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot): boolean {
            return component.confirm();
        }
}