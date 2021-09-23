import React from "react";
import "./styles.css";
// $(document).ready(function(){
// 	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
// 		$(this).toggleClass('open');
// 	});
// });
interface IconTypes {
  setOpen?: any;
  open?: boolean;
}
const MenuAnimation: React.FC<IconTypes> = ({ setOpen, open }) => {
  return (
    <div
      onClick={() => setOpen(!open)}
      className={open ? "nav-icon1 open" : "nav-icon1"}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MenuAnimation;
