class Type1 {
    private floors = [];

    constructor() {
        let i = 1;
        for ( ; i <= 15; i++) {
            const st = i.toString();
            this.floors.push(st);
        }
        i = 16;
        for ( ; i < 22; i = i + 2) {
            const stDup = i.toString();
            const endDup = (i + 1).toString();
            this.floors.push(stDup + '/' + endDup);
        }
    }

    getFloors(): Array<string> {
        return this.floors;
    }
}

class Type2 {
    private floors = [];
    constructor() {
        let i = 1;
        for ( ; i <= 21; i++) {
            const st = i.toString();
            this.floors.push(st);
        }
        i = 22;
        const stDup = i.toString();
        const endDup = (i + 1).toString();
        this.floors.push(stDup + '/' + endDup);
    }

    getFloors(): Array<string> {
        return this.floors;
    }
}

const type1 = new Type1();
const type2 = new Type2();

export function getFloorPlanByTower(tower: number) {
    if (tower < 1 || tower > 3) {
        throw new RangeError('Wrong tower number');
    }
    switch (tower) {
        case 1:
        case 3:
            return type1.getFloors();
        case 2:
            return type2.getFloors();
    }

}
