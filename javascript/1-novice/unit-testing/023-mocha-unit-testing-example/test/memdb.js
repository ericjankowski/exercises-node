const memdb = require('..');
const assert = require('assert');

describe('memdb', () => {
    beforeEach(() => {
        memdb.clear();
    });
    
    describe('sunchronous .saveSync(doc)', () => {
        it('should save the document', () => {
            const pet = { name: 'Tobi' };
            memdb.saveSync(pet);
            const ret = memdb.first({ name: 'Tobi' } );
            assert(ret == pet);
        });
    });

    describe('asynchronous .saveAsync(doc, cb)', () => {
        it('should save the document', (done) => {
            const pet = { name: 'Tobi' };
            memdb.saveAsync(pet, () => {
                const ret = memdb.first({ name: 'Tobi' });
                assert(ret == pet);
                done();
            });
        });
    });

    describe('.first(obj)', () => {
        it('should return the first matching doc', () => {
            const tobi = { name: 'Tobi' };
            const loki = { name: 'Loki' };
            memdb.saveSync(tobi);
            memdb.saveSync(loki);
            let ret = memdb.first({ name: 'Tobi' });
            assert(ret == tobi);
            ret = memdb.first({ name: 'Loki' });
            assert(ret == loki);
        });
        it('should return null when no doc matches', () => {
            const ret = memdb.first({ name: 'Manny' });
            assert(ret == null);
        });
    });
});

/*
module.exports = {
    'memdb': {
        '.saveSync(doc)':{
            'should save the document': () => {}
        }
    }
}
*/