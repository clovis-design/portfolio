import { Component } from '@angular/core'
import * as data from './translate.json'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent {
    title = 'portfolio'
    isVisible = false
    englishVersion = true
    modalService = null
    // motivationLetter =
    //    "Je m'appelle Clovis Sanceo, j'ai 15 ans bientôt 16. Je voudrai rentrer dasn votre lycée car j'adore tout ce qui touche a la technologie y compris la fabrication de projets qui permette de surporter les personne dans leur tache cotidienne mais ce qui me fait le plus kiffer c'est le faite de coder l'objet technologique.             J'aimeraui rentrée chez vous car lors de mon mini stage chez vous j'ai pus comfirmer mon choix de venir chez vous car vous propose des options très interessantes comme l'option robotix que j'ai decouvert lors de votre video sur Youtube."
    motivationLetter = data.en
    constructor() {}

    showModal(): void {
        this.isVisible = true
    }

    handleOk(): void {
        console.log('Button ok clicked!')
        this.isVisible = false
    }

    handleCancel(): void {
        console.log('Button cancel clicked!')
        this.isVisible = false
    }
    handleTrantslateMotivationLetter(): void {
        console.log('toto', this.englishVersion)
        console.log(data.fr)
        if (this.englishVersion === false) {
            this.motivationLetter = data.fr
        } else {
            this.motivationLetter = data.en
        }
    }
    showModal2(): void {
        console.log('bite')
        this.modalService.confirm({
            nzTitle: 'Confirm',
        })
    }
}
