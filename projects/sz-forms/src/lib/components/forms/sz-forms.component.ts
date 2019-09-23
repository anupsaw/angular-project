import {
  Component, OnInit, Input, DoCheck, ComponentFactoryResolver,
  NgModuleFactoryLoader, NgModuleFactory,
  Injector,
  ViewChild, ViewContainerRef, AfterViewInit, NgModule, Compiler, ViewEncapsulation, Optional, Self, ElementRef, ChangeDetectorRef, NgZone
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AsyncValidator, FormControlDirective, NgControl } from '@angular/forms';
import { SzInputComponent } from '../sz-input/sz-input.component';
import { SzBaseControl } from '../control/sz-base-control.abstract';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'sz-forms',
  templateUrl: './sz-forms.component.html',
  styleUrls: ['./sz-forms.component.scss'],
  host: { class: 'sz-forms' }
})
export class SzFormsComponent implements OnInit, DoCheck, AfterViewInit {


  public userForm: FormGroup;
  @Input() config: any;

  type = 'type';

  @ViewChild('dynamic', { read: ViewContainerRef, static: false }) dynamic: ViewContainerRef;


  constructor(private readonly fb: FormBuilder,
    private resolver: ComponentFactoryResolver,
    private loader: NgModuleFactoryLoader,
    private compiler: Compiler,
    private injector: Injector) {
    console.log(loader)
    this.initForm();
  }

  ngDoCheck() {
    console.log('do check called');
  }

  ngOnInit() {

    let config = {
      control: 'input',
      properties: {
        type: 'text',
        name: 'Name',
        placeholder: 'Type Your Name..',
        formControlName: 'name',
        class: 'one two three',
        required: true
      }

    }
    this.config = [
      {
        control: 'input',
        properties: {
          type: 'text',
          name: 'name',
          placeholder: 'Type Your Name..',
          formControlName: 'city',
          class: 'one two three',
          required: true
        }

      }, {
        control: 'input',
        properties: {
          type: 'text',
          name: 'age',
          placeholder: 'Type Your Age..',
          formControlName: 'age',
          class: 'one two three',
          required: false
        }

      },
      {
        control: 'select',
        properties: {
          name: 'state',
          placeholder: 'Select State..',
          formControlName: 'state',
          class: 'one two three',
          required: true
        }

      },
      {
        control: 'textarea',
        properties: {
          name: 'comment',
          placeholder: 'Add your comments..',
          formControlName: 'comment',
          class: 'one two three',
          required: true
        }

      }];


  }

  initForm(): void {

    let xyz = new FormControl()
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      city: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', [Validators.required, Validators.minLength(2)]],
      comment: ['', [Validators.required, Validators.minLength(2)]],
      state: ['', [Validators.required, Validators.minLength(2)]]

    });


  }

  ngAfterViewInit(): void {

    this.createComponent();
  }

  test(): void {
    console.log(this.userForm);
  }

  protected createNewComponent(selector: string, tmpl: string) {
    @Component({
      selector: selector,
      template: tmpl
    })
    class CustomDynamicComponent extends SzBaseControl {
      constructor(
        @Optional() @Self() public control: NgControl,
        private readonly eleRef: ElementRef,
        private readonly cd: ChangeDetectorRef,
        private readonly zone: NgZone,
        private readonly resolver: ComponentFactoryResolver,
        private sanitizer: DomSanitizer) {
        // super(control);
        super(control);
      }


    };
    // a component for this particular template
    return CustomDynamicComponent;
  }

  protected createNewModule(...component: Array<any>) {
    @NgModule({
      declarations: component,
      entryComponents: component
    })
    class CustomDynamicModule {
    };
    // a component for this particular template
    return CustomDynamicModule;
  }

  createComponent() {
    let compFact, componentRef
    const compList = this.createComponentList();
    // const comp = this.createNewComponent('<div class="test"></div>');
    // const comp2 = this.createNewComponent('<div class="anup"><input class="Anup" type="text" /></div>');

    const module = this.createNewModule(compList);
    const modCompiled = this.compiler.compileModuleAndAllComponentsSync(module);
    const moduleRef = modCompiled.ngModuleFactory.create(this.injector);

    // compList.forEach((comp: any) => {
    //   compFact = moduleRef.componentFactoryResolver.resolveComponentFactory(comp);
    //   componentRef = compFact.create(this.injector);
    //   this.dynamic.insert(componentRef.hostView);
    // });

    // const modRef = modCompiled.ngModuleFactory.create(this.injector);

    setTimeout(() => {
      const compFact2 = moduleRef.componentFactoryResolver.resolveComponentFactory(SzInputComponent);

      const comp = this.dynamic.createComponent(compFact2);
      comp.instance.formGroup = this.userForm;
      comp.instance.formControlName = 'city';

      compList.forEach((comp: any) => {
        compFact = moduleRef.componentFactoryResolver.resolveComponentFactory(comp);
        const comp1 = this.dynamic.createComponent(compFact);
        (comp1.instance as any).formGroup = this.userForm;
      });
    }, 100)



    // const compFact2 = this.resolver.resolveComponentFactory(SzInputComponent);
    // // const componentRef2 = compFact2.
    // const comp = this.dynamic.createComponent(compFact2);
    // comp.instance.formGroup = this.userForm;
    // comp.instance.formControlName = 'city';

    // import('../../sz-dynamic/sz-dynamic.module').then((mod) => {
    //   const module1 = mod.SzDynamicModule;
    //   const modCompiled = this.compiler.compileModuleAndAllComponentsSync(module1);

    //   const modRef = modCompiled.ngModuleFactory.create(this.injector);
    //   const compFact2 = modRef.componentFactoryResolver.resolveComponentFactory(SzInputComponent);

    //   const comp = this.dynamic.createComponent(compFact2);
    //   comp.instance.formGroup = this.userForm;
    //   comp.instance.formControlName = 'city';

    //   compList.forEach((comp: any) => {
    //     compFact = modRef.componentFactoryResolver.resolveComponentFactory(comp);
    //     componentRef = compFact.create(this.injector);
    //     this.dynamic.insert(componentRef.hostView);
    //   });
    // });

  }

  createComponentList(): Array<any> {

    const components = [];
    this.config.forEach((element: any) => {
      components.push(this.intiControl(element))
    });

    return components;

  }

  intiControl(props: any): any {
    // let props = this.config.properties;


    let input = ` <div [formGroup]="form"> <${props.control} `;
    for (let key of Object.keys(props.properties)) {
      input += ` ${key}="${props.properties[key]}"`;

    }
    input += props.control != 'input' ? `></${props.control}></div>` : ` /> </div>`;
    console.log(input);
    return this.createNewComponent(`sz-${props.control}`, input);

    //  return input;

    // (<HTMLElement>this.eleRef.nativeElement).append(ele);
    // console.log(input);
  }

}
