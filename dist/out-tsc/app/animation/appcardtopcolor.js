import { trigger, state, style, animate, transition } from '@angular/animations';
export function CardTopColorChangeAnim( /*duration: number = 300*/) {
    return trigger('cardUpdate', [
        state('selected', style({
            borderTopColor: '#bb8b5a'
        })),
        state('unselected', style({
            borderTopColor: '#dfecf1'
        })),
        transition('selected => unselected', [
            animate('0.5s')
        ]),
        transition('unselected => selected', [
            animate('0.5s')
        ])
    ]);
}
//# sourceMappingURL=appcardtopcolor.js.map