import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NZ_I18N } from 'ng-zorro-antd/i18n'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { fr_FR } from 'ng-zorro-antd/i18n'
import { registerLocaleData } from '@angular/common'
import fr from '@angular/common/locales/fr'
import {
    NzCarouselModule,
    NzIconModule,
    NzModalModule,
    NzSwitchModule,
} from 'ng-zorro-antd'
import { ProjectModalComponent } from './modals/project-modal/project-modal.component'
import { SanitizeHtmlPipe } from './pipes/SanitizeHtmlPipe'

registerLocaleData(fr)

@NgModule({
    declarations: [AppComponent, ProjectModalComponent, SanitizeHtmlPipe],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NzButtonModule,
        NzModalModule,
        NzSwitchModule,
        NzIconModule,
        NzCarouselModule,
    ],
    providers: [{ provide: NZ_I18N, useValue: fr_FR }],
    bootstrap: [AppComponent],
})
export class AppModule {}
