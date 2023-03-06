
function reformatDate(str) {

    const date = new Date(str)
    const year = date.getFullYear()
    let month = (date.getMonth() + 1).toString()
    let day = date.getDate().toString()

    if (month.length === 1) {
        month = `0${month}`
    }

    if (day.length === 1) {
        day = `0${day}`
    }

    return `${year}/${month}/${day}`

}

console.log(reformatDate("2/22/22"))