import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebrtcPageRoutingModule } from './webrtc-routing.module';

import { WebrtcPage } from './webrtc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebrtcPageRoutingModule
  ],
  declarations: [WebrtcPage]
})
export class WebrtcPageModule {}
