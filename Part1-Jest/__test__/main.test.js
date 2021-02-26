
const { TestScheduler } = require('jest');
const formatVolumeIconPath = require('../assets/scripts/main');

describe('VolumeIconPathTest', () => {
    test('iconLevel3Test', () => {
        expect(formatVolumeIconPath(99)).toBe(`./assets/media/icons/volume-level-3.svg`);
    });
    test('iconLevel2Test', () => {
        expect(formatVolumeIconPath(50)).toBe(`./assets/media/icons/volume-level-2.svg`);
    });
    test('iconLevel1Test', () => {
        expect(formatVolumeIconPath(20)).toBe(`./assets/media/icons/volume-level-1.svg`);
    });
    test('iconLevel0Test', () => {
        expect(formatVolumeIconPath(0)).toBe(`./assets/media/icons/volume-level-0.svg`);
    });
    
});