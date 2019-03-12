export function DateToString(date) {
    let year = date.getFullYear();
    let day  = (date.getDate()<10)?'0'+date.getDate():date.getDate();
    let month  = (date.getMonth()<9)?'0'+(date.getMonth()+1):(date.getMonth()+1);
    return day+"/"+month+"/"+year;
}

export function DateToStringWIthNoSlach(date){
    let year = date.getFullYear();
    let day  = (date.getDate()<10)?'0'+date.getDate():date.getDate();
    let month  = (date.getMonth()<9)?'0'+(date.getMonth()+1):(date.getMonth()+1);
    return day+""+month+""+year;
}