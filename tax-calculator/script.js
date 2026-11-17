document.getElementById("calculator").addEventListener("submit",(event)=>{
  event.preventDefault();
  const income=document.getElementById("income").value;
  const rate=document.getElementById("rate").value;
  const output=document.getElementById("result");
  try{
    const result=calculateTax(income,rate);
    output.textContent="Estimated tax: "+new Intl.NumberFormat("en-US",{
      style:"currency",currency:"USD"
    }).format(result);
    output.className="success";
  }catch(error){
    output.textContent=error.message;
    output.className="error";
  }
});
