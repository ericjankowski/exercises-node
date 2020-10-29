const db =[];
exports.saveSync = (doc) => {
    db.push(doc);
};

exports.first = (obj) => {
    return db.filter((doc) => {
        for(let key in obj) {
            if (doc[key] != obj[key]) {
                return false;
            }
        }
        return true;
    }).shift();
};

exports.clear = () => {
    db.length = 0;
  };