import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AbbeyComponent } from './pages/abbey/abbey.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { CookiesPolicyComponent } from './pages/cookies-policy/cookies-policy.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice.component';
import { ReturnPolicyComponent } from './pages/return-policy/return-policy.component';
import { FaqComponent } from './pages/faq/faq.component';
import { RatesComponent } from './pages/rates/rates.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'abbey', component: AbbeyComponent },
  { path: 'rates', component: RatesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'cookies-policy', component: CookiesPolicyComponent },
  { path: 'terms-conditions', component: TermsConditionsComponent },
  { path: 'return-policy', component: ReturnPolicyComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'faq', component: FaqComponent },
  { path: "redirectTo", pathMatch: "full" },
  { path: '**', component: NotFoundComponent },
];