import { Header } from "../../components/header/header";
import style from "./InfoPageAot.module.css"


import img_t26_1 from "../../img/t_26_1.jpg"
import img_t26_2 from "../../img/t_26_2.jpg"

import img_t34_1 from "../../img/t_34_1.jpg"
import img_t34_2 from "../../img/t_34_2.jpg"

import img_pz2_1 from "../../img/pz2_2.jpg"
import img_pz2_2 from "../../img/pz_2_1.jpg"

import img_pz3_1 from "../../img/pz3_1.jpg"
import img_pz3_2 from "../../img/pz3_2.jpg"

///





import { CartServer } from "../PlayPage/CartSever";
import { CartUnit } from "./CartUnit";


export const InfoPageAot = () => {
const text = [
  "Cоветский лёгкий танк. Самый многочисленный танк Красной армии и финской армии к началу Великой Отечественной войны,   а также армии Испанской Республики времён гражданской войны в Испании, второй по количеству выпущенных после Т-34 советский танк 1930-х — 1940-х годов. Создан на основе британского танка Vickers Mk E (также известного как «Виккерс 6-тонный»), закупленного в 1930 году. Принят на вооружение в СССР в 1931 году.",
  "Cоветский средний танк периода Великой Отечественной войны, выпускался серийно с 1940 года. В течение 1942—1947 годов — основной танк РККА и ВС СССР. до первой половины 1944 года, до поступления в войска его модификации Т-34-85. Самый массовый танк Второй мировой войны и послевоенного времени. Был разработан конструкторским бюро танкового отдела Харьковского завода № 183 как танк А-32, главный конструктор танка — Михаил Ильич Кошкин. Успешность проекта была предопределена применением новейшего высокоэкономичного дизель-мотора В-2, благодаря которому среднебронированный Т-34 унаследовал от лёгкобронированных БТ высокую удельную мощность (отношение мощности двигателя к боевой массе).",
  "Разработан в 1934 году. В различных модификациях производился до 1943 года. В начале Второй мировой войны такие танки составляли 38 процентов танкового парка вермахта. Первые модификации Pz.Kpfw. II в боях оказались слабее по вооружению и бронированию практически всех танков аналогичного класса: польских 7TP, французских R35 и H35, чешских LT vz.38, советских Т-26 и БТ. Начиная с 1938 года, модификации Pz.Kpfw. II Ausf. C, уже превосходили по бронированию некоторые лёгкие танки аналогичного класса: польские 7TP, советские Т-26 и БТ.",
  "Немецкий средний танк времён Второй мировой войны, серийно выпускавшийся с 1937 по 1943 год. Сокращёнными названиями этого танка являлись Pz.Kpfw. III, Panzer III, Pz. III. В ведомственном рубрикаторе военной техники нацистской Германии этот танк имел обозначение Sd.Kfz. 141 (Sonderkraftfahrzeug 141 — машина специального назначения 141). В советских исторических документах и популярной литературе Pz.Kpfw. III именовался как «Тип 3», Т-III или Т-3."















]


const accuracy = ["2,2,1,1", "3,2,1", "2,2,1" ]




const units = [{name:'Т-26',img_play:'1',img_VOV:img_t26_1, img_VOV1:img_t26_2 ,name_text:text[0],count:3, defend:1,move:3,range:4,accuracy: accuracy[0],ammo:10},
 {name:'Т-34 обр.1940',img_play:img_t34_1,img_VOV:img_t34_1, img_VOV1:img_t34_2 ,name_text:text[1],count:3, defend:3,move:3,range:4,accuracy: accuracy[0],ammo:10},
  {name:'Pz-II C',img_play:img_t34_1,img_VOV:img_pz2_1, img_VOV1:img_pz2_2 ,name_text:text[2],count:3, defend:2,move:3,range:3,accuracy: accuracy[1],ammo:10},
  {name:'Pz-III G ',img_play:img_t34_1,img_VOV:img_pz3_1, img_VOV1:img_pz3_2 ,name_text:text[3],count:3, defend:2,move:3,range:4,accuracy: accuracy[0],ammo:10} ]





  return (
    <>
      <Header/>
      <div className={style.div10}>
      {units.map((unit_cart) => { return <CartUnit name={unit_cart.name} name_text={unit_cart.name_text}  move={unit_cart.move} defend={unit_cart.defend} count={unit_cart.count} img={unit_cart.img_play} img_vov={unit_cart.img_VOV} img_vov1={unit_cart.img_VOV1} range={unit_cart.range} accuracy={unit_cart.accuracy} ammo={unit_cart.ammo}></CartUnit>})}
      </div>




    </>
  );
};