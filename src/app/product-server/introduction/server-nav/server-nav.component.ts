import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'office-server-nav',
  templateUrl: './server-nav.component.html',
  styleUrls: ['./server-nav.component.scss']
})
export class ServerNavComponent implements OnInit {
  public navList: string[] = [
    '打借条',
    '打欠条',
    '转账',
    '视频语音通话',
    '信用报告',
    '个人名片',
    '失信查询',
    '授信',
    '借条街',
    '借给TA模板',
    '借条大师助手',
    '认证VIP'
  ];

  constructor() {}

  ngOnInit() {}

}
