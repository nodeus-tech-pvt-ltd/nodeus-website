import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

import "../../styles/shared/BackToTop.css";

function BackToTop() {

  const [visible,setVisible]=useState(false);

  useEffect(()=>{

      const toggle=()=>{

          setVisible(window.scrollY>500);

      }

      window.addEventListener("scroll",toggle);

      return ()=>window.removeEventListener("scroll",toggle);

  },[]);

  return(

      <button
      className={`back-to-top ${visible?"show":""}`}
      onClick={()=>window.scrollTo({
          top:0,
          behavior:"smooth"
      })}
      >

      <ChevronUp size={22}/>

      </button>

  )

}

export default BackToTop;