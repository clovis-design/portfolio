import { ProjectModalType } from './../../services/project-modal.service'
import { Component, Input, OnInit } from '@angular/core'

@Component({
    selector: 'app-project-modal',
    templateUrl: './project-modal.component.html',
    styleUrls: ['./project-modal.component.less'],
})
export class ProjectModalComponent implements OnInit {
    effect = 'scrollx'

    @Input() public data: ProjectModalType
    constructor() {}

    ngOnInit(): void {}
}
