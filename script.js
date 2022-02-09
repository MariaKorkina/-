// получаем данные с сервера

async function moneyCourses () {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    const data = await response.json()

    // получаем данные из объекта
    const usdRate = data.Valute.USD.Value.toFixed(2)
    const eurRate = data.Valute.EUR.Value.toFixed(2)
    const gbpRate = data.Valute.GBP.Value.toFixed(2)
    const kztRate = data.Valute.KZT.Value.toFixed(2)


    // выводим данные в спаны
    const usd = document.querySelector('#usd')
    const eur = document.querySelector('#eur')
    const gbp = document.querySelector('#gbp')
    const kzt = document.querySelector('#kzt')

    usd.innerText = usdRate
    eur.innerText = eurRate
    gbp.innerText = gbpRate
    kzt.innerText = kztRate
}

moneyCourses()