import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FullComponent } from "./layout/full.component";
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './core/auth/auth.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FullComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'acc';

  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();

    this.oauthService.initCodeFlow();
    this.oauthService.initLoginFlow();


}
}
