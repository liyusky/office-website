import { Injectable } from '@angular/core';

import { Subject } from "rxjs/Subject";

@Injectable()
export class AboutUsService {
  public headerContent: Subject<number> = new Subject<number>();

  constructor() { }
  
}
