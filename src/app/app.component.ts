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
            'Ceci est un casque que j’ai réparé grâce à l’impression 3D et à la soudure. Après on peut constater la réalisation de différentes machines fonctionnelles faites en bois. La dernière image vous montre une réalisation faite avec des composants arduino.',
        imageNames: ['machine-bois.JPG', 'train-bois.JPG', 'arduino.JPG'],
    }
    contentProjectScratch = {
        title: 'scratch',
        description:
            'En premier lieux vous pouvez voir une mini représentation d’un mini mario fait avec le logiciel Scratch 2 ce mini jeu reprend que les bases d’un mario. Tous les autres mini jeux que vous pouvez voir ont été créés par moi même sur le logiciel Scratch 2. J’ai créer toute sorte de mini jeux qui vont de collecter le plus de point à faire des combat contre un autre joueur ou un jeu de dessin.',
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
        description:
            'Voici la présentation des différentes impressions que j’ai pu réaliser grâce aux imprimantes 3D. Sur ces quelques photos, vous pouvez voir différentes réalisations. Ce cochon a un atout qui est de pouvoir contenir des objets de petite taille comme de la monnaie ou de la matière flexible, cette demi-figurine de deadpool peut contribuer à ajouter une touche de décoration dans votre demeure.  Cet éléphant à la fonctionnalité d’avoir la trompe flexible et les pattes amovibles, quant à elle, cette figurine possède le pouvoir de se démembrer, car elle a été fabriquée en plusieurs pièces séparément. Cette poignée de couvercle a pu avoir une utilité dans le quotidien de la cuisine. La dernière impression est un Yoda fait de résine verte transparente pour le moment il est encore qu’en phase de test.',
        imageNames: [
            'cochon.JPG',
            'deadpool.JPG',
            'éléphant.JPG',
            'figurine-girl.JPG',
            'couvercle.JPG',
            'yoda-résine.JPG',
        ],
    }

    contentProjectVSCode = {
        title: 'scratch',
        description:
            'L’image n°1 représente le code du site sur lequel vous êtes en train de naviguer.Celle-ci montre la partie html du site c’est-à-dire toute la partie visuelle. L’image n°2 vous montre l’un des fichiers du site web nommé fundex ( https://fundex-27fc5.web.app/ ) qui a été réalisé par mes soins. Le code que vous voyez est le “type script” plus communément appelé TS. Il gère toute la partie logistique d’un site web exemple : le fait d’appuyer sur un bouton et que celui-ci nous redirige vers une autre page.',
        imageNames: ['code-portfolio.png', 'fundex.png'],
    }

    contentProjectImprimante = {
        title: 'scratch',
        description:
            'Voici mon imprimante 3D en résine de la marque Anycubic du modèle Photon. Elle permet de réaliser des impressions en résine de petite taille.Son fonctionnement est assez simple, elle utilise la lumière UV qui passe par un écran LCD, celui-ci va créer une forme et laissera passer la lumière UV et entraînera la solidification de la résine. Mais il faut faire attention au danger des gaz produits par la résine voilà pourquoi il est obligatoire de porter un masque et des gants afin d’éviter des démangeaisons et des intoxications. Après avoir imprimé votre objet, il faudra procéder à un durcissement par les lumières UV.  le durcir de nouveau par les lumières UV, et le nettoyer. Pour ce faire, on a la possibilité d’utiliser la machine Wash and Cure de chez Anycubic ou de Elegoo . Son fonctionnement est lui aussi très simple, car il y a deux modes wash (laver) et cure (soigner) et un minuteur. Il vous suffit juste de choisir le mode et d’indiquer le temps nécessaire pour votre objet.',
        imageNames: [
            'imprimante-résine-3D.JPG',
            'matériel-impréssion.JPG',
            'wash-and-cure.JPG',
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
