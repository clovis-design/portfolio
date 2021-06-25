import { ProjectModalComponent } from './../modals/project-modal/project-modal.component'
import { Injectable } from '@angular/core'
import { NzModalService } from 'ng-zorro-antd'
import { promise } from 'selenium-webdriver'

export type ProjectModalType = {
    imageNames: Array<string>
    title: string
    description: string
}

@Injectable({
    providedIn: 'root',
})
export class ProjectModalService {
    constructor(private readonly _modalService: NzModalService) {}
    public async open(data: ProjectModalType): Promise<void> {
        this._modalService.create({
            nzTitle: data.title,
            nzContent: ProjectModalComponent,
            nzComponentParams: {
                data,
            },
            nzWidth: 1200,
        })
    }
}
