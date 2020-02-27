const changeFunder = funder => {
    return ({
        type: 'CHANGE_FUNDER',
        payload: { funder }
    })
}

export { changeFunder }