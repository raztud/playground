
const razvanIsValid = () => {
  return false;
};

const razvan = () => {
  if (!razvanIsValid()) {
    throw new Error('Razvan is not valid 1');
  }
};

exports.razvan = razvan;
exports.razvanIsValid = razvanIsValid;
