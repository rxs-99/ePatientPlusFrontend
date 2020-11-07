import { Injectable } from '@angular/core';
import { ResponseBubble } from '../ui/response_bubble';

@Injectable({
  providedIn: 'root'
})
export class ResponseBubbleService {
  responseBubble: ResponseBubble;
  constructor() { }

  getBubble(): ResponseBubble {
    return this.responseBubble;
  }

  setBubble(newRB: ResponseBubble): void {
    this.responseBubble = newRB;
  }
}
