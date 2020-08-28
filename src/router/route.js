import About from "../views/about";
import TangShi from "../views/tangShi";
import SongCi from "../views/songCi";
import YuanQu from "../views/yuanQu";
import LunYu from "../views/lunYu";
// import YouMengYing from "../views/youMengYing";
import SiShuWuJing from "../views/siShuWuJing";

export default [
  {
    title: "唐诗",
    path: "/tang_si",
    component: TangShi
  },
  {
    title: "宋词",
    path: "/song_ci",
    component: SongCi
  },
  {
    title: "元曲",
    path: "/yuan_qu",
    component: YuanQu
  },
  {
    title: "四书五经",
    path: "/si_shu_wu_jing",
    component: SiShuWuJing
  },
  {
    title: "论语",
    path: "/lun_yu",
    component: LunYu
  },
  // {
  //   title: "幽梦影",
  //   path: "/you_meng_ying",
  //   component: YouMengYing
  // },
  // {
  //   title: "其他",
  //   path: "/other",
  //   component: YouMengYing
  // },
  {
    title: "关于",
    path: "/about",
    component: About
  }
];
