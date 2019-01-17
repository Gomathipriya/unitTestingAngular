To override Provider

    TestBed.overrideProvider(Window, {useValue: windowMock});

To Override Window

(<any>window).screen = { width: 300 };
  
To test Router

import { RouterTestingModule } from '@angular/router/testing';
