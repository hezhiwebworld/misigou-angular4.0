import { Directive, ElementRef, AfterViewInit, Renderer2 ,HostBinding,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appButton]',
})
export class ButtonDirective implements AfterViewInit{
  //@HostBinding('style.font-size') fontSize = '150px'
  @HostListener ('click') onclick(){
    alert('你好剑')
  }
  @Input('appButton') name: string;
  constructor(
    private er: ElementRef,
    private renderer2:Renderer2
  ) { }
  //钩子函数的几种生命周期状态的一种
  ngAfterViewInit() {
   // this.renderer2.addClass(this.er.nativeElement,'btn')
      //向自定义指令传值 
      if(this.name){
         const text = this.renderer2.createText(this.name)
         //前者提供操作dom与元素的能力//后者提供访问dom元素的能力
         this.renderer2.appendChild(this.er.nativeElement,text);
      }
  }
}
