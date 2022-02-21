import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebrtcPage } from './webrtc.page';

const routes: Routes = [
  {
    path: '',
    component: WebrtcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebrtcPageRoutingModule {}
