To override Provider

    TestBed.overrideProvider(Window, {useValue: windowMock});

To Override Window

(<any>window).screen = { width: 300 };
  
To test Router

import { RouterTestingModule } from '@angular/router/testing';

imports: [RouterTestingModule]

TO test DOM Sanitizer

{
                provide: DomSanitizer,
                useValue: {
                    sanitize: () => 'safeString',
                    bypassSecurityTrustHtml: () => 'safeString'
                  }
            }


testing service with http client

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
