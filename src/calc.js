import React from "react";
import "./index.css"
export default function Calc(){
    const [htVal, setHtVal]=React.useState("")
    const [wtVal, setWtVal]=React.useState("")
    const [genderValue, setGenderVal]=React.useState("")
    const[final, setFinal]=React.useState("")
    const[final2, setFinal2]=React.useState("")
    const[final3, setFinal3]=React.useState("")
    const[proteinMod, setproteinMod]=React.useState("")
   
    
    function handleClick(){  
        let BMI = wtVal/((htVal*2.54/100)*(htVal*2.54/100))
        let range1 
        let range2
        let range1p
        let range2p
        let kcal1
        let kcal2
        let idealWtVal 
        let pro1 = 0 
        let pro2 = 0 
        let gen = genderValue.toLowerCase();
        let bw = "IBW"
        
       
        if(gen==="m"){idealWtVal = (106 + 6*(htVal-60))/2.2;}
        else if(gen==="f"){idealWtVal = (100 + 5*(htVal-60))/2.2;}
        idealWtVal=(Math.round(idealWtVal * 10) / 10 )
        console.log(idealWtVal)
        if(BMI<19){kcal1 =30; kcal2=35;range1 = kcal1 * wtVal; range2 = kcal2 * wtVal;}
            else if(BMI>=19 && BMI <= 25){kcal1 =25; kcal2=30;range1 = kcal1 * wtVal; range2 = kcal2 * wtVal;}
                else if(BMI>25 && BMI <30){kcal1 =20; kcal2=25;range1 = kcal1 * wtVal; range2 = kcal2 * wtVal;}
                    else if(BMI>=30 && BMI <40){kcal1 =15; kcal2=18;range1 = kcal1 * wtVal; range2 = kcal2 * wtVal;}
                            else if(BMI>=40 && BMI <50){kcal1 =8; kcal2=15;range1 = kcal1 * wtVal; range2 = kcal2 * wtVal;}
                                else if(BMI >= 50){kcal1 =8; kcal2=11;range1 = kcal1 * wtVal; range2 = kcal2 * wtVal;}
       setFinal(`${Math.round(range1)}-${Math.round(range2)}kcals(${kcal1}-${kcal2}kcals/kg ${wtVal}kg ABW)`)
       

        if(proteinMod.length>0){pro1+=Number(proteinMod); pro2+=Number(proteinMod)}
        
       if(BMI<19){bw ="ABW"; pro1 +=1.4;; pro2+=1.6; range1p = pro1 * wtVal; range2p = pro2 * wtVal;}
            else if(BMI>=19 && BMI <= 25){bw = "ABW"; pro1 += 1.0; pro2+=1.2;range1p = pro1 * wtVal; range2p = pro2 * wtVal;}
                else if(BMI>25 && BMI <30){pro1+=1.4;  pro2+=1.6;range1p = pro1 * idealWtVal; range2p = pro2 * idealWtVal;}
                    else if(BMI>=30 && BMI <40){pro1+=1.2; pro2+=1.4;range1p = pro1 * idealWtVal; range2p = pro2 * idealWtVal;}
                            else if(BMI>=40 && BMI <50){pro1+=1.8; pro2+=2;range1p = pro1 * idealWtVal; range2p = pro2 * idealWtVal;}
                                else if(BMI >= 50){pro1+=1.8; pro2+=2;range1p = pro1 * idealWtVal; range2p = pro2 * idealWtVal;}
        
        pro1 = (Math.round(pro1 * 10) / 10 );
        pro2 = (Math.round(pro2 * 10) / 10 );   
                       
        setFinal2(`${Math.round(range1p)}-${Math.round(range2p)}g(${pro1}-${pro2}g/kg ${BMI>25?idealWtVal:wtVal}kg ${bw})`)
        setFinal3(`${range1}-${range2}ml`)
    }
        
     
   

    return(
    <div>
        <div className="input--container">
            <input type= "text" className="input" id="height" placeholder="height in inches" value={htVal} onChange={(x)=>setHtVal(x.target.value) }/>
            <input type= "text" className="input" id="weight" placeholder="weight in kg" value={wtVal} onChange={(x)=>setWtVal(x.target.value) } />
            <input type= "text" className="input" id="gender" placeholder="gender m/f" value={genderValue} onChange={(x)=>setGenderVal(x.target.value) } />
            <input type= "text" className="input" id="height" placeholder="optional protein mod" value={proteinMod} onChange={(x)=>setproteinMod(x.target.value)}/>
        </div>
        <div className="check--container">
        
            
        </div>

        <div className="button--container">
        
        <button id = "submit" className="submit"  onClick={handleClick}>press to submit</button>
        </div>

        <div className="results--container">
        <div className="results">
            <h1>Kcal Needs</h1>
            <p>{final}</p>
        </div>
        <div className="results">
            <h1>Protein Needs</h1>
            <p>{final2}</p>
        </div>
        <div className="results">
            <h1>Fluid Needs</h1>
            <p>{final3}</p>
        </div>
    </div>
    </div>
    )
}