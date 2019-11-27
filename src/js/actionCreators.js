export function resetForm() {
    return {
        type: 'reset',
    };
}

export function setName(name) {
    return {
        type: 'setName',
        name,
    };
}