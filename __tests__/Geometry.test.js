import {Geometry} from '../src/minMatrix.js';

describe('static method in Geometry', () => {
    expect.extend({
        hasOwnProp: (received, argument) => {
            if(received.hasOwnProperty('position') !== true){
                return {
                    message: () => {return 'have not `position` property in `received`';},
                    pass: false
                };
            }
            if(received.hasOwnProperty('normal') !== true){
                return {
                    message: () => {return 'have not `normal` property in `received`';},
                    pass: false
                };
            }
            if(received.hasOwnProperty('color') !== true){
                return {
                    message: () => {return 'have not `color` property in `received`';},
                    pass: false
                };
            }
            if(received.hasOwnProperty('texCoord') !== true){
                return {
                    message: () => {return 'have not `texCoord` property in `received`';},
                    pass: false
                };
            }
            if(received.hasOwnProperty('index') !== true){
                return {
                    message: () => {return 'have not `index` property in `received`';},
                    pass: false
                };
            }
            return {
                message: () => {
                    return 'has all property';
                },
                pass: true
            };
        },
    });
    test('Geometry.plane return value', () => {
        const width = 1.0;
        const height = 1.0;
        const color = [0.1, 0.2, 0.3, 1.0];
        const geometry = Geometry.plane(width, height, color);
        expect(geometry).hasOwnProp();
    });
    test('Geometry.circle return value', () => {
        const split = 8;
        const rad = 1.0;
        const color = [0.1, 0.2, 0.3, 1.0];
        const geometry = Geometry.circle(split, rad, color);
        expect(geometry).hasOwnProp();
    });
    test('Geometry.cube return value', () => {
        const side = 1.0;
        const color = [0.1, 0.2, 0.3, 1.0];
        const geometry = Geometry.cube(side, color);
        expect(geometry).hasOwnProp();
    });
    test('Geometry.cone return value', () => {
        const split = 8;
        const rad = 1.0;
        const height = 1.0;
        const color = [0.1, 0.2, 0.3, 1.0];
        const geometry = Geometry.cone(split, rad, height, color);
        expect(geometry).hasOwnProp();
    });
});

