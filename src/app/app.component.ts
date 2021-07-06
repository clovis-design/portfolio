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
        title: 'Construction puzzle bois 3D',
        description:
            '<ul><li>Système locomotive miniature</li><li>Système montagne russe avec billes</li><li>Assemblage sans colle </li><li>Découpage au laser sur contreplaqué fin </li><li>Puzzles à engrenages mécanique</li><li>Fonctionnement à manivelle</li></ul>',
        imageNames: [
            'machine-bois.JPG',
            'billes2.jpg',
            'train-bois.JPG',
            'loco3.jpg',
        ],
    }
    contentProjectScratch = {
        title: 'scratch',
        description:
            'En premier lieux vous pouvez voir une mini représentation d’un mini mario fait avec le logiciel Scratch 2 ce mini jeu reprend que les bases d’un mario. Tous les autres mini jeux que vous pouvez voir ont été créés par moi même sur le logiciel Scratch 2. J’ai créer toute sorte de mini jeux qui vont de collecter le plus de point à faire des combat contre un autre joueur ou un jeu de dessin.',
        imageNames: [
            'mariobross2.png',
            'jeux-sorcier.png',
            'jeux-ball.png',
            'jeux-perroquet.png',
            'jeux-dessin.png',
            'jeux-poisson.png',
        ],
    }

    contentProjectObjet = {
        title: "Réparation d'objets quotidiens",
        description:
            '<b>Réparation bouton de cellule du chauff-eau Trumatic</b><ul><li>Prototype premier test </li><li>Prototypage par Fusion 360</li><li>PLA blanc</li><li>Temps de réalisation: 2h00</li><li>Impression par imprimante CR_ 10</li></ul><b>Réparation attaches écouteurs</b><ul><li>Fil PLA bleu</li><li>Fichier 3D sur thingivers</li><li>Temps réalisation: 1h00</li><li>Temps de soudure des fils du casque: 2h00</li></ul><b>Réparation poignée couvercle poele</b><ul><li>Fichier sur thingiverse </li><li>Temps de réalisation:2h30</li><li>PLA blanc</li><li>Installation par vis et colle sur support vitre </li></ul>',
        imageNames: [
            'objet4.jpg',
            'objet3D2.JPG',
            'objet3D1.JPG',
            'objet3D3.JPG',
            'repair-csaque-min.JPG',
            'objet1.jpg',
            'objet2.jpg',
            'couvercle2.jpg',
            'couvercle.JPG',
        ],
    }

    contentProjectPot = {
        title: 'Pot en lévitation',
        description:
            '<ul><li>Réalisation en imprimante 3D </li><li>Pot design High Tech</li><li>Fil PLA blanc</li><li>Temps de réalisation du pot: 2h00</li><li>Appareillage magnétique en attente</li><li>Système permettant la flottaison d’objets</li><li>Objet tournant à 360°</li></ul>',
        imageNames: [
            'pot1.jpg',
            'pot2.jpg',
            'pot3.jpg',
            'pot-lévitation-min.JPG',
        ],
    }

    contentProjectObjet3D = {
        title: "Présentation d'Objets 3D",
        description:
            'Voici la présentation des différentes impressions que j’ai pu réaliser grâce aux imprimantes 3D. Sur ces quelques photos, vous pouvez voir différentes réalisations. Ce cochon a un atout qui est de pouvoir contenir des objets de petite taille comme de la monnaie ou de la matière flexible, cette demi-figurine de deadpool peut contribuer à ajouter une touche de décoration dans votre demeure.  Cet éléphant à la fonctionnalité d’avoir la trompe flexible et les pattes amovibles, quant à elle, cette figurine possède le pouvoir de se démembrer, car elle a été fabriquée en plusieurs pièces séparément. ',
        imageNames: [
            'cochon.JPG',
            'deadpool.JPG',
            'éléphant.JPG',
            'figurine-girl.JPG',
            'yoda-résine.JPG',
        ],
    }

    contentProjectVSCode = {
        title: 'VSCode',
        description:
            'L’image n°1 représente le code du site sur lequel vous êtes en train de naviguer. Celle-ci montre la partie html du site c’est-à-dire toute la partie visuelle. <br />L’image n°2 vous montre l’un des fichiers du site web nommé <a href=" https://fundex-27fc5.web.app/ ">fundex</a>  qui a été réalisé par mes soins. Le code que vous voyez est le “type script” plus communément appelé TS. Toute la partie logique d’un site web exemple : le fait d’appuyer sur un bouton et que celui-ci nous redirige vers une autre page. Vous pouvez aller voir le code source sur <a href=" https://github.com/clovis-design/portfolio ">Github</a>.',
        imageNames: ['code-portfolio.png', 'fundex.png'],
    }

    contentProjectImprimantePLA = {
        title: 'Imprimante 3D caractéristiques',
        description:
            "<ul><li>Matériels utilisés (PLA, ABS, TPU, Cuivre, Bois, Fibre de Carbone, Gradient Color etc…)</li><li>Logiciels utilisés (PROE, Solid-works, UG, 3d Max, logiciel de conception 3D Rhino, etc…)</li><li>Logiciels d'exploitation (CURA, Repetier-Host, simplifie 3D)</li><li>Système d'exploitation (Linux, Windows, OSX)</li></ul>",
        imageNames: ['imp1.jpg', 'imprimante-3D.JPG', 'imp2.jpg'],
    }

    contentProjectImprimante = {
        title: 'Imprimante 3D résine et son matériel',
        description:
            'Voici mon imprimante 3D en résine de la marque Anycubic du modèle Photon. Elle permet de réaliser des impressions en résine de petite taille.Son fonctionnement est assez simple, elle utilise la lumière UV qui passe par un écran LCD, celui-ci va créer une forme et laissera passer la lumière UV et entraînera la solidification de la résine. Mais il faut faire attention au danger des gaz produits par la résine voilà pourquoi il est obligatoire de porter un masque et des gants afin d’éviter des démangeaisons et des intoxications. Après avoir imprimé votre objet, il faudra procéder à un durcissement par les lumières UV.  le durcir de nouveau par les lumières UV, et le nettoyer. Pour ce faire, on a la possibilité d’utiliser la machine Wash and Cure de chez Anycubic ou de Elegoo . Son fonctionnement est lui aussi très simple, car il y a deux modes wash (laver) et cure (soigner) et un minuteur. Il suffit juste de choisir le mode et d’indiquer le temps nécessaire pour votre objet.',
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
