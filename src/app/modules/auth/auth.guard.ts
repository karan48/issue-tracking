import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate
{
    constructor(
        private _router: Router,
        private readonly _authService: AuthService
    ){}

    /**
     * Can activate
     *
     * @param route
     * @param state
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
    {
        const redirectUrl = state.url === '/sign-out' ? '/' : state.url;
        return this._check(redirectUrl);
    }

    /**
     * Check the authenticated status
     *
     * @param redirectURL
     * @private
     */
    private _check(redirectURL: string): Observable<boolean>
    {

        const logInUserInfo = this._authService.getLoginUserInfo();

        if(!logInUserInfo) {
            // Redirect to the sign-in page
            this._router.navigate(['auth/login'], {queryParams: {redirectURL}});

            // Prevent the access
            return of(false);
        } else {
            return of(true);
        }
    }
}