// Фотографии лежат в src/assets. Чтобы заменить фото, подставьте файл с тем же именем
// или поменяйте импорт и описание (alt) ниже.
import house from "./assets/bath.jpg";
import interior from "./assets/interior.jpg";
import bathroom from "./assets/bathroom.jpg";
import group from "./assets/group.jpg";
import hands from "./assets/hands.jpg";
import bouquet from "./assets/bouquet.jpg";
import cup2 from "./assets/cup2.jpg";

export const IMAGES = {
  house: { src: house, alt: "Дом с горячим чаном на заснеженной террасе зимним вечером" },
  interior: { src: interior, alt: "Светлая гостиная с кухней-студией и большими окнами" },
  bathroom: { src: bathroom, alt: "Помещение с каменной плиткой и стеклянной дверью в парную" },
  group: { src: group, alt: "Участницы сидят в кругу на деревянном полу" },
  hands: { src: hands, alt: "Руки участниц во время телесной практики" },
  bouquet: { src: bouquet, alt: "Хвойный букет с шишкой, сушёным апельсином и золотой птичкой" },
  cup2: { src: cup2, alt: "Хвойный букет с корицей, шишкой и сушёным апельсином в руке" },
};
