const birthdayAge = (date: string): number => {
  let currentDate = new Date()
  const getCurrentMonth = currentDate.getMonth() + 1
  const getCurrentDay = currentDate.getDate()
  const getCurrentYear = currentDate.getFullYear()
  let age = null

  let arrayDate = date.split('/').map(value => {
    return Number(value)
  })

  if(arrayDate[1] < getCurrentMonth){
    age = getCurrentYear - arrayDate[2]
  }else if(arrayDate[1] > getCurrentMonth){
    age = (getCurrentYear - arrayDate[2]) + 1
  }else{
    if(getCurrentDay === arrayDate[0]){
      age = (getCurrentYear - arrayDate[2]) + 1
      console.log('aniversario')
    }else if(getCurrentDay > arrayDate[0]){
      age = (getCurrentYear - arrayDate[2])
    }else{
      age = (getCurrentYear - arrayDate[2]) + 1
    }
  }

  return age;
}

module.exports = birthdayAge