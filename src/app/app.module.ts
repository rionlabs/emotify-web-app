import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {EmoticonsComponent} from './components/home/emoticons/emoticons.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

import {FirebaseConfigObj} from "../environments/firebase";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabase, AngularFireDatabaseModule} from "angularfire2/database";

import {MatButtonModule, MatSnackBarModule, MatToolbarModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        FooterComponent,
        HomeComponent,
        EmoticonsComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatSnackBarModule,
        AngularFireModule.initializeApp(FirebaseConfigObj, 'Emotify')
    ],
    providers: [
        AngularFireDatabase,
        AngularFireDatabaseModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
