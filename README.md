To override Provider

    TestBed.overrideProvider(Window, {useValue: windowMock});

To Override Window

<code> (<any>window).screen = { width: 300 }; </code>
  
To test Router

<pre>
import { RouterTestingModule } from '@angular/router/testing';

imports: [RouterTestingModule]
</pre>

TO test DOM Sanitizer

            {
                provide: DomSanitizer,
                useValue: {
                    sanitize: () => 'safeString',
                    bypassSecurityTrustHtml: () => 'safeString'
                  }
            }


testing service with http client
<pre>
class MockService {
    public get(_url): Observable<any> {
        return Observable.of({[1]});
    }
}

describe('TestService', () => {
    let service : TestService;
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                TestService,
                { provide: MainService, useClass: MockService }
            ]
        });
        service = TestBed.get(TestService);
    });

    it('get ',()=>{
        service.get('test').subscribe(result => {
            let data: any = result;
            expect(data.length).toBe(1);
        });
    });
});
</pre>


To execute testing for single component change “describe” to “fdescribe”. To execute single test case change “it” to “fit”. This will execute only the specific component and specific test case inside it

For Element Ref

<code> export class MockElementRef extends ElementRef {
    constructor() { super(null); }
}
</code>

For Pipe

<pre>
  @Pipe({ name: 'telephone' })
class TelephonePipeMock implements PipeTransform {
    transform(value: number): number {
        // blah blah
        return value;
    }
}
  </pre>
  
  To test timeout
  
  <pre>
  
    beforeEach(() => {
    var timerCallback = jasmine.createSpy("timerCallback");
    jasmine.clock().install();
  });
  
  afterEach(() => {
    jasmine.clock().uninstall();
  });
  
  it("causes a timeout to be called", function() {
  setTimeout(function() {
    timerCallback();
  }, 100);

  expect(timerCallback).not.toHaveBeenCalled();

  jasmine.clock().tick(101);

  expect(timerCallback).toHaveBeenCalled();
});
  
  </pre>
  
  To test redux state
  
  <pre>
  
  import {MockNgRedux, NgReduxTestingModule} from '@angular-redux/store/lib/testing';
  
   imports: [
                NgReduxModule,
                NgReduxTestingModule
            ],
            providers: [
                MockNgRedux
            ]
            
   spyOn(MockNgRedux.getInstance(), 'getState').and.returnValue({});
  </pre>
