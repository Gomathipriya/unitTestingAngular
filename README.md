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
