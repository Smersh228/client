import { FC } from "react";
import { Header } from "../../components/header/header";
import style from "./InfoPageAot.module.css"



interface ICartUnit {
name: string,
name_text: string
defend:number
count:number
move: number
img: string
img_vov:string
img_vov1:string
range:number
ammo:number
accuracy:string





}




export const CartUnit: FC<ICartUnit> = ({name,name_text,defend,count,move,img,img_vov,img_vov1,ammo,accuracy,range }) => {
  return (
   
    
       <div className={style.div1}>
        <div  className={style.div4} >
          <img src={img_vov}></img>
          <img  src={img_vov1}></img>
          </div>
         
          <div className={style.div2} >{name}</div> 
          <div style={{display:'flex'}}>
            
          
          <div className={ name_text.length <500 ? style.div3  :style.div5} >   {name_text}   </div>
          <div style={{flexDirection:'column'}}>
         
          
           <div className={style.div3} >    <span style={{paddingLeft:'50%'}}> Характеристики</span>   Защита:{defend} <br></br>Численность:{count} Боеприпасы:{ammo}<br></br> Меткость:{accuracy} Дальность:{range}<br></br> Очки перемещения:{move}  </div>
          

          </div>
         
          
          </div>


      </div>


     



  
  );
};