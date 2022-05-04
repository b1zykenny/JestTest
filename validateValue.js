const validateValue = (value) => {
    if (value <= 100 || value >= 150) {
        return false
    }
    return true
}

module.exports = validateValue;