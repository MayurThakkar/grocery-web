// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { enableProdMode } from '@angular/core';
import { platformNativeScriptDynamic } from '@nativescript/angular';

import { AppModule } from '@src/app/app.module';

import { environment } from '@src/environments/environment';

if (environment.production) {
  enableProdMode();
}

// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
platformNativeScriptDynamic().bootstrapModule(AppModule);
