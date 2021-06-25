import { ProjectModalService } from './services/project-modal.service'
import { Component } from '@angular/core'
import * as data from './translate.json'
import { ProjectModalType } from './services/project-modal.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent {
    contentProjectHeadphone = {
        title: 'cloclo',
        description:
            "J'ai utilisé de la résine. <br>Matériaux utilisés : <ul class='list-style' style='color:red;'><li>PLA 3mm</li><li>Imprimante CREALITY CR10</li><li>Couleur blanc</li><ul>",
        imageNames: ['machine-bois.JPG', 'train-bois.JPG'],
    }
    contentProjectScratch = {
        title: 'scratch',
        description: 'cloclo',
        imageNames: [
            'mario-bross.png',
            'jeux-sorcier.png',
            'jeux-ball.png',
            'jeux-perroquet.png',
            'jeux-dessin.png',
            'jeux-poisson.png',
        ],
    }
    contentProjectObjet3D = {
        title: 'scratch',
        description: 'Voici la réalisation de plusieurs impréssions 3D ',
        imageNames: [
            'cochon.JPG',
            'deadpool.JPG',
            'éléphant.JPG',
            'figurine-girl.JPG',
            'couvercle.JPG',
        ],
    }

    title = 'portfolio'
    isVisible = false
    englishVersion = true
    modalService = null
    motivationLetter = data.en
    constructor(private readonly _projectModalService: ProjectModalService) {}

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

    showProjectModal(data: ProjectModalType): void {
        this._projectModalService.open(data)
    }
}
