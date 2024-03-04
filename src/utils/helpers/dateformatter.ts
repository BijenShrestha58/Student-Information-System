export const DateFormatter=(date:any)=>{
    const options = { year: "numeric", month: "long", day: "numeric" };

const dateObject = new Date(date);
const displayDate = dateObject.toLocaleDateString("en-US", options);
return(displayDate)
}
