import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'office-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss']
})
export class FlowComponent implements OnInit {

  private _flowArr: Flow[] = [
    new Flow(
      {
        title: '注册及认证',
        messages: [
          '下载借条大师APP',
          '注册并完成必填信息认证'
        ]
      },
      0
    ),
    new Flow(
      {
        title: '点击发现页面',
        messages: [
          '点击借条大师APP的发现页面',
          '寻找贷款商户'
        ]
      },
      1
    ),
    new Flow(
      {
        title: '选择意向商户',
        messages: [
          '向意向商户输入',
          '贷款申请金额'
        ]
      },
      2
    ),
    new Flow(
      {
        title: '生成好友聊天框',
        messages: [
          '向好友发起会话，打借条'
        ]
      },
      3
    )
  ]; 
  private _flow: Flow = this._flowArr[0];
  private _flag: number = 0;
  private _active: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  slideShow(step: number) {
    this._flag += step;
    this.isActive = step > 0;
    this._flag = this._flag > 3 ? 0 : this._flag;
    this._flag = this._flag < 0 ? 3 : this._flag;
    this.flow = this._flowArr[this._flag];
  }

  set flow(flow: Flow) {
    this._flow = flow;
  }

  get flow(): Flow {
    return this._flow;
  }

  

  set isActive(active: boolean) {
    this._active = active;
  }

  get isActive(): boolean {
    return this._active;
  }

}

interface FlowInterface {
  readonly title: string;
  readonly messages: string[];
}

class Flow implements FlowInterface{

  private _imagePath: string;
  private _title: string;
  private _messagesArr: string[];

  constructor(flow: FlowInterface, flag: number) {
    this.title = flow.title;
    this.messages = flow.messages;
    this.image = String(flag + 1);
  }

  set image(flag: string) {
    this._imagePath = `../../../assets/images/product-server/flow-${flag}.png`;
  }

  get image(): string {
    return this._imagePath;
  }

  set title(title: string) {
    this._title = title;
  }

  get title(): string {
    return this._title;
  }

  set messages(messagesArr: string[]) {
    this._messagesArr = messagesArr;
  }

  get messages(): string[] {
    return this._messagesArr;
  }
}