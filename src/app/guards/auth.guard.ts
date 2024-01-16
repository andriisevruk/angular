import { Injectable, inject } from '@angular/core';
import {  Router, CanActivateFn  } from '@angular/router';
import { UserService } from '../services/user.service';


export function authenticationGuard(): CanActivateFn {
  return () => {
    const userService: UserService = inject(UserService);
    const routerService: Router = inject(Router);
    
    if (userService.isAuthenticated ) {
      return true;
    }
    routerService.navigate(['/login'])
    return false;
  };
}

