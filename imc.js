function process(){

    let weightUnit = document.querySelector('#select-unit-weight').value
    let heightUnit = document.querySelector('#select-unit-height').value
    let weight = Number(document.querySelector('input#value-weight').value)
    let height = Number(document.querySelector('input#value-height').value)
    let bmi = document.querySelector('input#bmi')
    let status = document.querySelector('input#status')

    weightUnit == "#" || heightUnit == "#" ?   alert("Select a valid measure unit!") : bmi.value = calcBMI(weightUnit, heightUnit, weight, height)
    status.value = statusBMI(parseInt(bmi.value))


    function calcBMI(weigUn, heigUn, weig, heig){
        if(weig <= 0 || heig<=0){
            alert("Select a valid weight/height!")
        }
        else if(weigUn=="Kg"){
            return calculate(weigUn, heigUn, weig, heig)
        }
        else if(weigUn="lbs"){
            let res = 0
            weig = weig/2.2046
            return calculate(weigUn, heigUn,weig, heig)
        }
    }

    
    function calculate(weigUn, heigUn, weig, heig){
        res = 0
        switch(heigUn){
            case "m":
            res = weig/(heig*heig)
            res = Number(res.toFixed(2))
            return res
            break

            case "ft":
            heig = heig/3.28
            res = weig/(heig*heig)
            res = Number(res.toFixed(2))
            return res
            break
        }
        return res
    }

    function statusBMI(bmi){
        if(bmi<20){
            status.value = "Thin"
        }
        else if(bmi>20 && bmi<=25){
            status.value = "Healthy"
        }
        else if(bmi>25 && bmi<=30){
            status.value = "Over-weight"
        }
        else if(bmi>30 && bmi<=35){
        status.value = "Fat"
        }
        else{
        status.value = "Morbid"
        }
        return status.value
    }
}