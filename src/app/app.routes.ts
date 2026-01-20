import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { Routes } from '@angular/router';


import { ContactComponent } from './pages/contact/contact.component';
import { BlogGridComponent } from './blog/blog-grid/blog-grid.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { HomeMainComponent } from './home/home-main/home-main.component';
import { ContactTwoComponent } from './pages/contact-two/contact-two.component';

import { BlogGridSidebarComponent } from './blog/blog-grid-sidebar/blog-grid-sidebar.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { PortfolioClassicComponent } from './portfolio/portfolio-classic/portfolio-classic.component';
import { PortfolioTwoComponent } from './portfolio/portfolio-two/portfolio-two.component';
import { PortfolioGalleryComponent } from './portfolio/portfolio-gallery/portfolio-gallery.component';
import { PortfolioMasonryComponent } from './portfolio/portfolio-masonry/portfolio-masonry.component';
import { PortfolioMetroComponent } from './portfolio/portfolio-metro/portfolio-metro.component';
import { PortfolioSliderComponent } from './portfolio/portfolio-slider/portfolio-slider.component';
import { PortfolioDetailsComponent } from './portfolio/portfolio-details/portfolio-details.component';
import { PortfolioDetailsListComponent } from './portfolio/portfolio-details-list/portfolio-details-list.component';
import { PortfolioDetailsSliderComponent } from './portfolio/portfolio-details-slider/portfolio-details-slider.component';
import { PortfolioDetailsVideoComponent } from './portfolio/portfolio-details-video/portfolio-details-video.component';
import { AboutComponent } from './pages/about/about.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServicesTwoComponent } from './pages/services-two/services-two.component';
import { ServicesThreeComponent } from './pages/services-three/services-three.component';
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';
import { HelpCenterComponent } from './pages/help-center/help-center.component';
import { TeamClassicComponent } from './pages/team-classic/team-classic.component';
import { TeamDetailsComponent } from './pages/team-details/team-details.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { JobComponent } from './pages/job/job.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { CartComponent } from './pages/cart/cart.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

import { TermsComponent } from './pages/terms/terms.component';
import { PolicyComponent } from './pages/policy/policy.component';
import { SearchComponent } from './pages/search/search.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShopRightSidebarComponent } from './pages/shop-right-sidebar/shop-right-sidebar.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';

export const routes: Routes = [
  { path: '', component: HomeMainComponent,title:'Sonido Real'},
  { path: 'index', component: HomeMainComponent,title:'Sonido Real'},

  {path:'nosotros',component:AboutComponent,title:'Nosotros - Sonido Real'},
  {path:'programacion',component:JobComponent,title:'Programacion - Sonido Real'},
  {path:'servicios',component:ServicesComponent,title:'Servicios - Sonido Real'},
  {path:'service-details/:id',component:ServiceDetailsComponent,title:'Servicios - Sonido Real'},
  {path:'contact',component:ContactTwoComponent,title:'Contacto - Sonido Real'},
  {path:'blog',component:BlogGridSidebarComponent,title:'Blog - Sonido Real'},

  {path:'blog-details/:id',component:BlogDetailsComponent,title:'Blog Details - Sonido Real'},

  {path:'pages',children:[
    {path:'about-me',component:AboutMeComponent,title:'About Me - Sonido Real'},
    {path:'services-two',component:ServicesTwoComponent,title:'Services Two - Sonido Real'},
    {path:'services-three',component:ServicesThreeComponent,title:'Services Three - Sonido Real'},
    {path:'help-center',component:HelpCenterComponent,title:'Help Center - Sonido Real'},
    {path:'team',component:TeamClassicComponent,title:'Team Classic - Sonido Real'},
    {path:'team-details',component:TeamDetailsComponent,title:'Team Details - Sonido Real'},
    {path:'event-details',component:EventDetailsComponent,title:'Event Details - Sonido Real'},
    {path:'job-details',component:JobDetailsComponent,title:'Job Details - Sonido Real'},
    {path:'pricing',component:PricingComponent,title:'Pricing - Sonido Real'},
    {path:'coming-soon',component:ComingSoonComponent,title:'Coming Soon - Sonido Real'},
    {path:'shop',component:ShopComponent,title:'Shop - Sonido Real'},
    {path:'shop-right-sidebar',component:ShopRightSidebarComponent,title:'Shop Right Sidebar - Sonido Real'},
    {path:'product-details/:id',component:ProductDetailsComponent,title:'Product Details - Sonido Real'},
    {path:'faq',component:FaqComponent,title:'Faq - Sonido Real'},
    {path:'search',component:SearchComponent,title:'Search - Sonido Real'},
    {path:'policy',component:PolicyComponent,title:'Policy - Sonido Real'},
    {path:'terms',component:TermsComponent,title:'Terms - Sonido Real'},
    {path:'login',component:LoginComponent,title:'Login - Sonido Real'},
    {path:'register',component:RegisterComponent,title:'Register - Sonido Real'},
    {path:'forgot',component:ForgotComponent,title:'Forgot - Sonido Real'},
    {path:'cart',component:CartComponent,title:'Cart - Sonido Real'},
    {path:'wishlist',component:WishlistComponent,title:'Wishlist - Sonido Real'},
    {path:'checkout',component:CheckoutComponent,title:'Checkout - Sonido Real'},
    // {path:'contact-two',component:ContactTwoComponent,title:'Contact Two - Sonido Real'},
  ]},

  // {path:'blog',children:[
  //   {path:'blog-standard',component:BlogStandardComponent,title:'Blog Standard - Sonido Real'},
  //   {path:'blog-grid',component:BlogGridComponent,title:'Blog Grid - Sonido Real'},
  //   {path:'blog-grid-two',component:BlogGridTwoComponent,title:'Blog Grid Two - Sonido Real'},
  //   {path:'blog-list-sidebar',component:BlogListSidebarComponent,title:'Blog List Sidebar - Sonido Real'},
  //   {path:'blog-masonry',component:BlogMasonryComponent,title:'Blog Masonry - Sonido Real'},
  //   {path:'blog-details-two',component:BlogDetailsTwoComponent,title:'Blog Details Two - Sonido Real'},
  // ]},
  {path:'portfolio',children:[
    {path:'classic',component:PortfolioClassicComponent,title:'Portfolio Classic - Sonido Real'},
    {path:'grid',component:PortfolioTwoComponent,title:'Portfolio Classic - Sonido Real'},
    {path:'gallery',component:PortfolioGalleryComponent,title:'Portfolio Gallery - Sonido Real'},
    {path:'masonry',component:PortfolioMasonryComponent,title:'Portfolio Masonry - Sonido Real'},
    {path:'metro',component:PortfolioMetroComponent,title:'Portfolio Metro - Sonido Real'},
    {path:'slider',component:PortfolioSliderComponent,title:'Portfolio Slider - Sonido Real'},
    {path:'details',component:PortfolioDetailsComponent,title:'Portfolio Details - Sonido Real'},
    {path:'details-list',component:PortfolioDetailsListComponent,title:'Portfolio Details List - Sonido Real'},
    {path:'details-slider',component:PortfolioDetailsSliderComponent,title:'Portfolio Details Slider - Sonido Real'},
    {path:'details-video',component:PortfolioDetailsVideoComponent,title:'Portfolio Details Video - Sonido Real'},
  ]},
  {path:'**',component:HomeMainComponent,title:'Sonido Real'},
];
