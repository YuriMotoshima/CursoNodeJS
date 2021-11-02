// 2019 - 1984 = 35 anos
// 11 - 12 = -1 meses
// 11 - 11 = 0 meses
// 11 - 10 = 1 meses
// 04 - 12 = -8 dias
// 12 - 12 = 0 dias
// 04 - 01 = 3 dias

//1573568256893

function getage(timestamp){
    const today = new Date()
    const birth = new Date(timestamp)

    let age = today.getFullYear() - birth.getFullYear()
    const month = today.getMonth() - birth.getMonth()

    if (month < 0 || month == 0 && today.getDate() < birth.getDate()) {
        age = age - 1
    }

    return age
}