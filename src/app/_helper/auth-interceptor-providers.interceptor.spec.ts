import { TestBed } from '@angular/core/testing';

import { AuthInterceptorProvidersInterceptor } from './auth-interceptor-providers.interceptor';

describe('AuthInterceptorProvidersInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthInterceptorProvidersInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthInterceptorProvidersInterceptor = TestBed.inject(AuthInterceptorProvidersInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
