import { Component, ElementRef, OnInit } from '@angular/core';
import { ENGINE_METHOD_STORE } from 'constants';
import { WebrtcService } from '../services/webrtc.service';


@Component({
  selector: 'app-webrtc',
  templateUrl: './webrtc.page.html',
  styleUrls: ['./webrtc.page.scss'],
})
export class WebrtcPage implements OnInit {

  topVideoFrame = 'partner-video';
  userId: string;
  partnerId: string;
  myEl: HTMLMediaElement;
  partnerEl: HTMLMediaElement;


  constructor(public webRTC: WebrtcService, public elRef: ElementRef) { }

  ngOnInit(): void {
    this.myEl = this.elRef.nativeElement.querySelector('#my-video');
    this.partnerEl = this.elRef.nativeElement.querySelector('#partner-video');


  }

  login() {
    this.webRTC.init(this.userId, this.myEl, this.partnerEl);
  }

  call() {
    this.webRTC.call(this.partnerId);
    this.swapVideo('my-video');
  }

  swapVideo(topVideo: string) {
    this.topVideoFrame = topVideo;
  }

}
