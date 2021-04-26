import { Component } from '@angular/core';

@Component({
    selector: 'app-homepage',
    templateUrl: './home-page.html'
})
export class HomePage {
    droppedData: string;

    dragEnd(event) {
        console.log('Element was dragged', event);
    }
}
